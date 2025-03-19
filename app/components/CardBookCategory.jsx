"use client";

import Image from "next/image";
import Link from "next/link";

export default function CardBookCategory(items) {
  return (
    <div className="mt-56 bg-slate-100 rounded-2xl">
      <div className="flex px-11 py-7 bg-ghost-white rounded-4xl h-58 max-w-[500px] drop-shadow-sm">
        <div className="relative w-1/2">
          <div className="w-45 h-62 relative -top-34">
            <img
              alt=""
              className="rounded-2xl drop-shadow-lg"
              width={500}
              height={600}
              src={items.image}
            />
          </div>
          <Link
            href="/"
            className="uppercase bg-light-blue absolute bottom-0 px-3.5 py-2.5 rounded-full w-45 hover:bg-deep-teal hover:text-ghost-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
          >
            Read Full Article
          </Link>
        </div>
        <div className="w-1/2">
          <h2 className="text-xl font-medium truncate">{items.book_title}</h2>
          <p className="font-light line-clamp-6 text-justify">
           {items.description}
          </p>
        </div>
      </div>
    </div>
  );
}
