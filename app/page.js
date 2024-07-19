import Button from "@/component/Button";
import { getUser } from "./lib/actions";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  const users = await getUser();
  return (
    <>
      <Button />
      {/* <ul>
        {users.map((user) => {
          return <li key={user.id}> {user.name}</li>;
        })}
      </ul> */}
    </>
  );
}
