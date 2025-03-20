import Image from "next/image";

const BookDetailCard = ({ book }) => {
  console.log("Hello", book);

  return (
    <>
      <div className="bg-white mt-32 max-h-full p-20 pb-14 rounded-[50px]">
        <div className="flex justify-end relative">
          <img
            alt={book.title || "Book Cover"}
            width={300}
            height={350}
            className="rounded-3xl drop-shadow-xl absolute -top-52"
            src={book.payload.image}
          />
        </div>
        <div className="space-y-5 mt-48">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium">{book.payload.book_title}</h2>
            <p>
              By <span className="font-medium capitalize text-teal-600">
                {book.payload.book_author}
              </span>
            </p>
          </div>
          <p className="text-justify">
            {book.payload.description || "No description available."}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookDetailCard;
