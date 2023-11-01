// users route

interface User {
  id: number;
  name: string;
}
const Test = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    // For data that changes frequently and always getting fresh data
    // cache: "no-store",
    // Get fresh data from backend every 10 second
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Test;
