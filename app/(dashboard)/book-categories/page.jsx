import CardBookCategory from "@/app/components/CardBookCategory";
import Card from "../../components/CardComponent";
import Search from "../../components/SearchComponent";
import book, {
  getAllBook,
  getAllCategory,
  getBookByCategory,
} from "../../service/book-service";
import FilterComponent from "@/app/components/FilterComponent";
const Home = async ({ searchParams }) => {
  const category = await getAllCategory();
  const query = (await searchParams).query;
  console.log(query);
  const books = await getAllBook(query);
  return (
    <>
      <div className="flex justify-between mt-6 pb-4 bg-white rounded-t-2xl p-4">
        <a className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100">Home</a>
        <FilterComponent allCategory={category.payload} />
        {/* co */}
      </div>
      <div>
        <hr className="text-teal-700 text-center mx-4" />
      </div>
      <div className="h-[80%] w-full overflow-y-scroll">
        <div className="flex justify-center rounded-b-4xl pb-4 bg-white">
          <div className="flex justify-evenly w-full flex-wrap gap-6 mt-8">
            {books.payload.map((items) => (
              <CardBookCategory key={items.id} {...items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
