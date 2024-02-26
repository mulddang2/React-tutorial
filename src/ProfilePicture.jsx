function ProfilePicture() {
  const imageUrl = './src/assets/suzy-profile.jpg';

  const handleClick = (e) => (e.target.style.display = 'none');

  return (
    <img
      onClick={(e) => handleClick(e)}
      src={imageUrl}
      style={{ width: '300px' }}
    />
  );
}

export default ProfilePicture;
