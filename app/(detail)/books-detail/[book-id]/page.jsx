import BookDetailCard from "@/app/components/BookDetailCard";
import { getAllBook, getBookById } from "@/app/service/book-service";
import Image from "next/image";

export default async function BookDetail({ params }) {
  const book = await getBookById();
  const id = (await params).bookId;
  console.log("id :" , id); 
  return (
    <div className="bg-whiteSmokeCustom">
      <div className="relative px-10 py-12 mx-auto bg-slate-200 h-screen">
        {/* Breadcrumbs */}
        <div className="flex gap-5 items-center">
          <a
            className="flex gap-2 font-medium text-lg items-center hover:text-deep-teal group"
            href="/"
          >
            <svg
              className="group-hover:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12ZM12 17.99v-3"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              className="hidden group-hover:block"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p>Home</p>
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="#0B3954"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
            ></path>
          </svg>
          <div className="flex gap-2 font-medium text-lg items-center hover:text-deep-teal group cursor-pointer">
            <svg
              className="group-hover:hidden"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3.5 18V7c0-4 1-5 5-5h7c4 0 5 1 5 5v10c0 .14 0 .28-.01.42"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6.35 15H20.5v3.5c0 1.93-1.57 3.5-3.5 3.5H7c-1.93 0-3.5-1.57-3.5-3.5v-.65C3.5 16.28 4.78 15 6.35 15ZM8 7h8M8 10.5h5"
                stroke="#0B3954"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <svg
              className="hidden group-hover:block"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M13.5 12c0 3.18-2.57 5.75-5.75 5.75S2 15.18 2 12s2.57-5.75 5.75-5.75"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6"
                stroke="#087E8B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="capitalize">old school cartoons</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              stroke="#0B3954"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08"
            ></path>
          </svg>
          <div className="flex gap-2 font-medium text-lg items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 16.74V4.67c0-1.2-.98-2.09-2.17-1.99h-.06c-2.1.18-5.29 1.25-7.07 2.37l-.17.11c-.29.18-.77.18-1.06 0l-.25-.15C9.44 3.9 6.26 2.84 4.16 2.67 2.97 2.57 2 3.47 2 4.66v12.08c0 .96.78 1.86 1.74 1.98l.29.04c2.17.29 5.52 1.39 7.44 2.44l.04.02c.27.15.7.15.96 0 1.92-1.06 5.28-2.17 7.46-2.46l.33-.04c.96-.12 1.74-1.02 1.74-1.98ZM12 5.49v15M7.75 8.49H5.5M8.5 11.49h-3"
                stroke="#C81D25"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <p className="text-red-crimson capitalize">Tom &amp; Jerry</p>
          </div>
        </div>
        {/* Text Content */}
        <BookDetailCard book={book} />
      </div>
    </div>
  );
}