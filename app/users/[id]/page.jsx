async function getUser(id) {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await response.json();
  return data.data;
}

async function UserPage({ params }) {
  const user = await getUser(params.id);
  return (
    <div>
      <img src={user.avatar} alt={user.email} />
      <div>
        <h5>
          {user.id} {user.first_name} {user.last_name}
        </h5>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserPage;
