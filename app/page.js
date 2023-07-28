async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();
  return (
    <div>
      <h1>IndexPage</h1>
      {/*    <div>{JSON.stringify(users)}</div> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <h5>{user.id}</h5>
              <p>{user.email}</p>
            </div>
            <img src={user.avatar} alt={user.email} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;
