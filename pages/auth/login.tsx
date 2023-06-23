import BlankTemplate from "@/templates/Blank/BlankTemplate";
import { NextPage } from "next";
import Image from "next/image";

const Login: NextPage = () => {
  return (
    <BlankTemplate>
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <div className="mx-auto flex justify-center">
            <Image
              className="h-7 w-auto sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              width={200}
              height={50}
              alt="logo"
            />
          </div>
          <h3 className="mt-3 text-center text-xl font-medium text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Login or create account
          </p>
          <form>
            <div className="mt-4 w-full">
              <input
                className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
              />
            </div>
            <div className="mt-4 w-full">
              <input
                className="mt-2 block w-full rounded-lg border bg-white px-4 py-2 text-gray-700 placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-300"
                type="password"
                placeholder="Password"
                aria-label="Password"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-gray-500 dark:text-gray-200"
              >
                Forget Password?
              </a>
              <button className="transform rounded-lg bg-blue-500 px-6 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center justify-center bg-gray-50 py-4 text-center dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">
            Don&#x27;t have an account?{" "}
          </span>
          <a
            href="#"
            className="mx-2 text-sm font-bold text-blue-500 hover:underline dark:text-blue-400"
          >
            Register
          </a>
        </div>
      </div>
    </BlankTemplate>
  );
};

export default Login;
