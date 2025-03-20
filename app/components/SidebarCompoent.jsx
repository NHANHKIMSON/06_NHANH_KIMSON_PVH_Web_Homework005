"use client";
import Link from "next/link";
import SidebarData, { data } from "../data/SidebarData";

import { useState } from "react";
import { Setting, Setting2 } from "iconsax-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
  console.log("Path :  ", path);
  return (
    <>
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link
            href="https://flowbite.com/"
            className="flex flex-col items-center justify-center w-full h-32"
          >
            {/* Image */}
            <img
              src="https://s3-alpha-sig.figma.com/img/d1f4/4ca0/b0a6c2cc4e45d57bbc5a308b42616fa6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bgp-WJMsbfgJB4McdLQ8Zn~qjEPcplm8GHxYMyRZxD42xqpByz551iyM4E8na7baFo1HWI~z2ps5~imTa-fXQg5zSW4ArpP6r8u1qOzAHq9G~xCs55U8IRAbXoCibnESKpvz1z1ZcdquEWqcSA5K~NUTNKxh-mXTIKvfW5Q55kfEw4g716jzPMnI5ofK935Jh6TCP2rINv~U5CAdyQWsYzLkLtd3E~WWjEb74F8ekMyEs6-r5HRYdcE3L~Es9s8YouCcZvYJnBVU2iFrMMe3-BXdpNytVqhyJyn41fJQP-7Ya4CsrXNgIClaln3~eHOZ0qgdAmCEJupIcUM5JH42ng__"
              className="h-10 sm:h-24 rounded-full"
              alt="Flowbite Logo"
            />

            {/* Name */}
            <p className="font-semibold text-gray-900">Black Monster</p>

            {/* Email */}
            <p className="text-teal-700">blackmonster@gmail.com</p>
          </Link>
          <ul className="space-y-2 ms-8 font-medium mt-6">
            {data.map((items) => (
              // <li key={items.id}>
              //   <Link
              //     href={items.link}
              //     className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              //   >
              //     {/* Render the icon component dynamically */}
              //     {items.icon}

              //     <span className="ms-3">{items.title}</span>
              //   </Link>
              // </li>
              <li key={items.id}>
                <Link
                  href={items.link}
                  className={`flex items-center p-2 rounded-lg group transition-all 
                    ${
                      path === items.link
                        ? "bg-gray-200"
                        : "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                    }`}
                >
                  {/* Icon */}
                  {items.icon}
                  <span className="ms-3">{items.title}</span>
                </Link>
              </li>
            ))}
            <li className="mt-8">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Setting2 className="w-7" color="#0B3954" />
                <span className="flex-1 ms-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
