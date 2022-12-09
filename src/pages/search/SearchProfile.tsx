import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Button from '../../components/Button/Button';
import CardProfile from '../../components/CardProfile/CardProfile';
import TextField from '../../components/TextField/TextField';
import { DEFAULT_URL } from '../../config/default';

export type ProfileProps = {
  name: string;
  avatarUrl: string;
  biography: string;
};

export const COMPONENT_ID = 'search-profile';

const SearchProfile = () => {
  const [userProfile, setUserProfile] = useState<ProfileProps>();
  const [username, setUsername] = useState<string>();
  const [isInvalidProfile, setIsInvalidProfile] = useState<boolean>(false);
  const router = useRouter();

  const getGithubProfile = async () => {
    try {
      const profileInfos = await fetch(`${DEFAULT_URL}/user?userName=${username}`).then((response) => response.json());
      setUserProfile(profileInfos.user);
      setIsInvalidProfile(false);

      if (!username || !profileInfos.user) {
        setIsInvalidProfile(true);
        return setUserProfile(undefined);
      }
    } catch (error) {
      // handle error
      return null;
    }
  };
  const goToRepoPage = () => {
    router.push(`/repositories/ShowRepositories?username=${username}`);
  };

  return (
    <div className={COMPONENT_ID} id={COMPONENT_ID}>
      <div className={`${COMPONENT_ID}__container`}>
        <div className={`${COMPONENT_ID}__submit`}>
          <TextField placeholder="search by username" onChange={setUsername} value={username} />
          <Button name="SEARCH" onClick={getGithubProfile} />
        </div>
      </div>
      {isInvalidProfile && (
        <p className={`${COMPONENT_ID}__invalidUser`}>
          <img src="https://cdn-icons-png.flaticon.com/512/179/179386.png" alt="" className="dot" /> please enter a
          valid username
        </p>
      )}

      {userProfile && (
        <CardProfile
          name={userProfile.name}
          imageUrl={userProfile.avatarUrl}
          biography={userProfile.biography}
          hasButton
          onClick={goToRepoPage}
        />
      )}
    </div>
  );
};

export default SearchProfile;
