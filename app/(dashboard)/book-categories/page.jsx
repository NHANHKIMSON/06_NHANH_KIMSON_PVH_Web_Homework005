import CardBookCategory from "@/app/components/CardBookCategory";
import Card from "../../components/CardComponent";
import Search from "../../components/SearchComponent";
import book, {
  getAllBook,
  getAllCategory,
  getBookByCategory,
} from "../../service/book-service";
const Home = async () => {
  const books = await getAllBook();
  const bookByCateId = await getBookByCategory();
  const category = await getAllCategory();
  const allCategory = [
    ...new Set(category.payload.map((items) => items.book_cate_name)),
  ];
  console.log("Book", bookByCateId);
  
  return (
    <>
      <div className="flex justify-between mt-6 pb-4 bg-white rounded-t-2xl p-4">
        <a className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100">Home</a>
        <form action="">
          <select
            name="category"
            id=""
            className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100"
          >
            {allCategory.map((items, index) => (
              
              <option key={index} value={items}>
                {items}
              </option>
            ))}
          </select>
        </form>
      </div>
      <div>
      <hr className="text-teal-700 text-center mx-4"/>
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
