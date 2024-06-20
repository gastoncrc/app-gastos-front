import { getAllUsers } from "../axios/users";
import UserCard from "./UserCard";

const users = await getAllUsers();
const Users = () => {
  return (
    <>
      <h1 className="text-indigo-100">Usuarios</h1>
      <div className="p-4 flex text-indigo-100 gap-4 items-center">
        {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

export default Users;
