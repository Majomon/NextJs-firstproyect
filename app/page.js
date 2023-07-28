import Users from "@/components/Users";

async function fetchUsers() {
  const response = await fetch("https://reqres.in/api/users");
  const data = await response.json();
  return data.data;
}
{
  /*    <div>{JSON.stringify(users)}</div> Para verlo desde el front*/
}
async function IndexPage() {
  const users = await fetchUsers();
  return <Users users={users} />;
}

export default IndexPage;
