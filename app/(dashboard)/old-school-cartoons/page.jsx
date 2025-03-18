import Card from "@/app/components/CardComponent";
import Carttoon, { getAllCartoon } from "../../service/old-school-cartoon-service";


const Cartoon = async () =>{
    const books = await getAllCartoon();
  return (
    <>
      <div className="flex justify-between border-b mt-6 pb-4 border-b-teal-700 bg-slate-100 rounded-t-2xl p-4">
        <a className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100">Home</a>
        <form action="">
          <select
            name="category"
            id=""
            className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100"
          >
            <option value="cartoon">Cartoon</option>
            <option value="Drama">Drama</option>
          </select>
        </form>
      </div>
      <div className="h-[80%] w-full overflow-y-scroll">
        <div className="flex justify-center rounded-b-4xl pb-4 bg-slate-100">
          <div className="flex justify-evenly w-full flex-wrap gap-6 mt-8">
            {books.payload.map((items) => (
              <Card key={items.id} {...items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cartoon;