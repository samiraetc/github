type CardProfileProps = {
  name?: string;
  imageUrl?: string;
  biography?: string;
};
const CardProfile = ({
  name = '',
  imageUrl = 'https://avatars.githubusercontent.com/u/9120451?v=4',
  biography = '',
}: CardProfileProps) => {
  return (
    <div className="card-profile__container">
      <img src={imageUrl} alt="profile image" className="card-profile__image" />
      <p className="card-profile__name">{name}</p>
      <p className="card-profile__biography">{biography}</p>
      <button>SEE REPOSITORIES</button>
    </div>
  );
};

export default CardProfile;
