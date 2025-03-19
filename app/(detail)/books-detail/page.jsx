import BookDetailCard from "@/app/components/BookDetailCard";
import { getAllBook, getBookById } from "@/app/service/book-service";
import Image from "next/image";

export default async function BookDetail({ params }) {
  const {id} = params;
  const getBookDetail = await getBookById(id);  
  return (
    <div className="bg-slate-100 h-screen p-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 mb-8 text-sm">
        <a href="/" className="text-gray-600 hover:text-gray-900">
          Home
        </a>
        <span className="text-gray-400">/</span>
        <a
          href="/book-categories"
          className="text-gray-600 hover:text-gray-900"
        >
          Book Categories
        </a>
        <span className="text-gray-400">/</span>
        <span className="text-gray-900">How Do You Live?</span>
      </nav>
      {/* Book CARD */}

      <div>
          <BookDetailCard book={getBookDetail}/>
      </div>
    </div>
  );
}
