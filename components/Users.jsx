"use client";
// Para cuando necesite interactividad como un useclient, usestate, useeffect, en fin, cualquier hooks
// que necesite codigo de front tendre que suar "use client"
import { useRouter } from "next/navigation";
function Users({ users }) {
  const router = useRouter();
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          key={user.id}
          onClick={() => {
            router.push(`/users/${user.id}`);
          }}
        >
          <div>
            <h5>
              {user.id} {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img
            src={user.avatar}
            alt={user.email}
            style={{ borderRadius: "50%" }}
          />
        </li>
      ))}
    </ul>
  );
}

export default Users;
