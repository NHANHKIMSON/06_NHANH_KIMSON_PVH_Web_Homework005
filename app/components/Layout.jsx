import Sidebar from "./SidebarCompoent";
import Search from "./SearchComponent";
import { HomeCardData } from "../data/HomeCardData";
import Card from "./CardComponent";
import Link from "next/link";
const Layout = () => {
  return (
    <>
    <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <Sidebar />


      <div className="sm:ml-96 flex flex-col items-center bg-slate-100">
        <div className="p-4 border-dashed rounded-lg dark:border-gray-700 w-full max-w-4xl">
          {/* Search Component */}
          <div className="w-full mb-4">
            <Search />
          </div>

          {/* Centered Header */}
          <div className="px-12 flex items-center justify-center h-48 rounded-t-4xl rounded-sm bg-white dark:bg-gray-800">
            <div className="w-full h-10 flex items-center px-4 pb-8 border-b border-teal-600">
              <Link
                href={"/"}
                className="text-teal-700 bg-slate-100 px-8 py-4 rounded-2xl"
              >
                Homepage
              </Link>
            </div>
          </div>

          {/* Centered Grid */}
          <div className="flex justify-center bg-white rounded-b-4xl pb-4">
            {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"> */}
            <div className="flex justify-evenly w-full flex-wrap gap-6">
              {HomeCardData.map((items) => (
                <Card key={items.id} {...items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
