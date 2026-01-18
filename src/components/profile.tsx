function Profile({ img, name }: { img: string; name: string }) {
  return (
    <div className="p-2 border-2 rounded-lg">
      <img
        className="h-36 w-28 object-cover rounded-sm"
        src={img}
        alt="Profilbild"
      />
      <h2 className="text-center">{name}</h2>
    </div>
  );
}

export default Profile;
