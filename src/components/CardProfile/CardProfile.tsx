import Button from '../Button/Button';

export const COMPONENT_ID = 'card-profile';

type CardProfileProps = {
  name?: string | string[];
  imageUrl?: string;
  biography?: string | string[];
  repos?: number;
  hasButton?: boolean;
  className?: string;
  onClick?: () => unknown;
};
const CardProfile = ({
  name = '',
  imageUrl = 'https://avatars.githubusercontent.com/u/9120451?v=4',
  biography = '',
  repos,
  hasButton = false,
  className = '',
  onClick,
}: CardProfileProps) => {
  return (
    <div className={`${COMPONENT_ID}__container ${className}`} id={COMPONENT_ID}>
      <img src={imageUrl} alt="profile image" className={`${COMPONENT_ID}__image`} />
      <p className={`${COMPONENT_ID}__name`}>{name}</p>
      <p className={`${COMPONENT_ID}__biography`}>{biography}</p>
      {repos && <p className={`${COMPONENT_ID}__repositories`}>repositories: {repos}</p>}
      {hasButton && <Button name="REPOSITORIES" onClick={onClick} className={`${COMPONENT_ID}__button`} />}
    </div>
  );
};

export default CardProfile;
