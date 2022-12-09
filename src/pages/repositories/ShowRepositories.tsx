import { useEffect, useMemo, useState } from 'react';
import CardProfile from '../../components/CardProfile/CardProfile';
import CardRepositories from '../../components/CardRepositories/CardRepositories';
import { DEFAULT_URL } from '../../config/default';
import Pagination from '../../components/Pagination/Pagination';
import { FadeLoader } from 'react-spinners';
import Button from '../../components/Button/Button';
import { ProfileProps } from '../search/SearchProfile';
import { useSearchParams, useRouter } from 'next/navigation';

export const COMPONENT_ID = 'show-repositories';

type RepositoriesProps = {
  id: number;
  name: string;
  language: string;
  type: string;
  description: string;
  updated: string;
};

const ShowRepositories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const username = searchParams.get('username');

  console.log();
  const [repositories, setRepositories] = useState([]);
  const [userProfile, setUserProfile] = useState<ProfileProps>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const pageSize = 4;

  const getProfileGithub = async () => {
    const profileInfos = await fetch(`${DEFAULT_URL}/user?userName=${username}`).then((response) => response.json());
    setUserProfile(profileInfos.user);
    setRepositories(profileInfos.repositories);
  };

  useEffect(() => {
    getProfileGithub();
    setTimeout(() => setLoading(false), 3500);
  });

  const repositoriesByPage = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return repositories && repositories.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, repositories]);

  const goToSearchPage = async () => {
    await router.push('/');
  };

  return (
    <>
      {loading && <FadeLoader color="#2da44e" />}
      {!loading && (
        <div className={`${COMPONENT_ID}`}>
          <div className={`${COMPONENT_ID}__userInfo`}>
            <Button name="SEARCH OTHER USER" onClick={goToSearchPage} />
            {userProfile && (
              <CardProfile
                name={userProfile.name}
                biography={userProfile.biography}
                imageUrl={userProfile.avatarUrl}
                repos={repositories.length}
              />
            )}
          </div>

          <div className={`${COMPONENT_ID}__repos`}>
            {repositoriesByPage.map((item: RepositoriesProps) => {
              return (
                <CardRepositories
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  type={item.type}
                  language={item.language}
                  updated={item.updated}
                />
              );
            })}

            <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={repositories.length}
              pageSize={pageSize}
              onPageChange={(page: any) => setCurrentPage(page)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ShowRepositories;
