import Search from "./components/Search.jsx";
import Card from "./components/Card.jsx";

export default function Home() {
  return (
    <>
      <div className="sm:ml-96 flex flex-col items-center bg-slate-100">
        <div className="p-4 border-dashed rounded-lg dark:border-gray-700 w-full max-w-4xl">
          {/* Search Component */}
          <div className="w-full mb-4">
            <Search />
          </div>

          {/* Centered Header */}
          <div className="flex items-center justify-center h-48 rounded-sm bg-white dark:bg-gray-800">
            <div className="w-full h-10 flex items-center px-4 pb-4 border-b border-teal-600">
              <p className="text-teal-700">Homepage</p>
            </div>
          </div>

          {/* Centered Grid */}
          <div className="flex justify-center bg-white">
            {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg"> */}
            <div className="flex justify-around w-full flex-wrap gap-6">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
