import ProtectedRoute from "@/components/ProtectedRoute";
import AppLayout from "@/templates/Admin/AppLayout";
import { NextPage } from "next";

const Index: NextPage = () => {
  return (
    <AppLayout>
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:mt-12 xl:gap-12">
        <div
          className="flex h-96 items-end overflow-hidden rounded-lg bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80")',
          }}
        >
          <div className="w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-4 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Best website collections
            </h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400 ">
              Website
            </p>
          </div>
        </div>
        <div
          className="flex h-96 items-end overflow-hidden rounded-lg bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")',
          }}
        >
          <div className="w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-4 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Block of Ui kit collections
            </h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400 ">
              Ui kit
            </p>
          </div>
        </div>
        <div
          className="flex h-96 items-end overflow-hidden rounded-lg bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          <div className="w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-4 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Ton’s of mobile mockup
            </h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400 ">
              Mockups
            </p>
          </div>
        </div>
        <div
          className="flex h-96 items-end overflow-hidden rounded-lg bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          <div className="w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-4 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Huge collection of animation
            </h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400 ">
              Animation
            </p>
          </div>
        </div>
        <div
          className="flex h-96 items-end overflow-hidden rounded-lg bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          <div className="w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-4 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Huge collection of animation
            </h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400 ">
              Animation
            </p>
          </div>
        </div>
        <div
          className="flex h-96 items-end overflow-hidden rounded-lg bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")',
          }}
        >
          <div className="w-full overflow-hidden rounded-b-lg bg-white/60 px-8 py-4 backdrop-blur-sm dark:bg-gray-800/60">
            <h2 className="mt-4 text-xl font-semibold capitalize text-gray-800 dark:text-white">
              Huge collection of animation
            </h2>
            <p className="mt-2 text-lg uppercase tracking-wider text-blue-500 dark:text-blue-400 ">
              Animation
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};
export default ProtectedRoute(Index);
