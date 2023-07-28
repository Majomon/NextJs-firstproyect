import Users from "@/components/Users";

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
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
