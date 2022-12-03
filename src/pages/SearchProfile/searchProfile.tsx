import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';
import CardProfile from '../../components/CardProfile/CardProfile';
import TextField from '../../components/TextField/TextField';
import { DEFAULT_URL } from '../../config/default';
import { ProfileProps } from '../../types/types';

export const COMPONENT_ID = 'search-profile';

const SearchProfile = () => {
  const [userProfile, setUserProfile] = useState<ProfileProps>();
  const [userName, setUserName] = useState<string>();

  const getGithubProfile = async () => {
    const profileInfos = await fetch(`${DEFAULT_URL}/user?userName=${userName}`).then((response) => response.json());
    setUserProfile(profileInfos);
  };

  useEffect(() => {}, [userProfile]);
  return (
    <div className={COMPONENT_ID}>
      <div className={`${COMPONENT_ID}__container`}>
        <div className={`${COMPONENT_ID}__submit`}>
          <TextField placeholder="search by username" onChange={setUserName} />
          <Button name="search" onClick={getGithubProfile} />
        </div>
        {userProfile && (
          <CardProfile name={userProfile.name} imageUrl={userProfile.avatar_url} biography={userProfile.bio} />
        )}
      </div>
    </div>
  );
};

export default SearchProfile;
