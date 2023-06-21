import Link from "next/link";
// import reactLogo from "../../assets/react.svg";
import clsxm from "@/helpers/clsxm";
// import Image from "next/image";
type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <>
      <div
        className={clsxm(
          "z-50 flex h-screen w-64 flex-col overflow-y-auto bg-white rounded-r-xl fixed md:relative transform transition duration-200 ease-in-out md:translate-x-0 shadow-2xl",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-grow flex-col px-4 py-8">
          <button
            onClick={closeSidebar}
            className="absolute top-4 right-4 md:hidden"
          >
            <svg
              className="w-6 h-6 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Link href="/">
            {/* <Image src={reactLogo} alt="React Logo" width={50} height={50} /> */}
          </Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
      </div>
      {/* <div id="backdrop" className="absolute bg-white/25 w-screen h-screen z-[45] backdrop-blur-lg" /> */}
    </>
  );
};

export default Sidebar;
