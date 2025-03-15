import Card from "../components/CardComponent";
import Search from "../components/SearchComponent";

const Home = () => {
  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <div class="w-full mb-4">
          {/* Search component */}
          <Search />
        </div>
        <div class="flex items-center justify-center h-48 mb-4 rounded-sm bg-gray-50 dark:bg-gray-800">
          <div className="w-full h-10 flex items-center px-4 pb-4 border-b border-teal-600">
            <p className="text-teal-700">Homepage</p>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Home;
