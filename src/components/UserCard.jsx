const UserCard = ({ user }) => {
  const { name, age, email } = user;
  return (
    <div className="flex flex-col rounded-md bg-slate-900 p-4 gap-2 w-36 h-46">
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
