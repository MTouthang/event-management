import Button from "@/components/Button";
import { getUser } from "./lib/actions";
import { dbConnect } from "./lib/dbConnect";
import { ToastBar, Toaster } from "react-hot-toast";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  let connection;

  try {
    connection = await dbConnect();
  } catch (error) {
    console.log(error);
  }

  const users = await getUser();
  return (
    <>
      <div className="m-2">
        {connection ? (
          <h1> Database is connected! </h1>
        ) : (
          <h1> Database is not connected</h1>
        )}
      </div>
    </>
  );
}
