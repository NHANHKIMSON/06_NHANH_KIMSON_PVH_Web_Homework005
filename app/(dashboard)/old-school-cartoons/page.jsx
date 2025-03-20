// import Card from "@/app/components/CardComponentCartoon";
import CardCartoon from "@/app/components/CardComponentCartoon";
import Carttoon, {
  getAllCartoon,
  getCartoonByGenre,
  getCartoonSearh,
  getGenreById,
} from "../../service/old-school-cartoon-service";
import FilterComponent from "@/app/components/FilterComponentCartoon";
import getAllCartoonGenre from "../../service/old-school-cartoon-service";

const Cartoon = async ({ searchParams }) => {
  const cartoon_genre = await getAllCartoonGenre();
  const query = (await searchParams).query;
  const cartoonByGenre  = await getCartoonByGenre(query);

  const search = (await searchParams).search;
  
  const cartoons = search ? await getCartoonSearh(search) :  await getAllCartoon(query);
  
  const genreById = await getGenreById(query);


  return (
    <>
      <div className="flex justify-between border-b mt-6 pb-4 border-b-teal-700 bg-slate-100 rounded-t-2xl p-4">
        <a className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100">
        {query ? `${genreById.payload?.cartoon_genre}`  : "Old School Cartoon"} 
          </a>
        {/* <FilterComponent /> */}
        <FilterComponent cartoon_genre={cartoon_genre.payload} />
      </div>
      <div className="h-[80%] w-full overflow-y-scroll">
        <div className="flex justify-center rounded-b-4xl pb-4 bg-slate-100">
          <div className="flex justify-evenly w-full flex-wrap gap-6 mt-8">
            {cartoons.payload.map((items) => (
              <CardCartoon key={items.id} {...items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartoon;
