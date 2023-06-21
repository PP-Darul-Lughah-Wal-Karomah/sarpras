import AppLayout from "@/templates/Admin/AppLayout";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <AppLayout>
      <div className="flex h-screen w-full items-center justify-center bg-slate-800">
        <h1 className="text-lime-200">About</h1>
      </div>
      <div className="flex h-screen w-full items-center justify-center bg-slate-800">
        <h1 className="text-lime-200">About</h1>
      </div>
    </AppLayout>
  );
};
export default Home;
