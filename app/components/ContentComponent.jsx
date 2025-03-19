// import { Link } from "iconsax-react";
// import { HomeCardData } from "../data/HomeCardData";
// import Card from "./CardComponent";
// export default function ContentComponent() {
//   return (
//     <>
//       {/* Centered Header */}
//       <div className="px-12 flex items-center justify-center h-screen rounded-t-4xl bg-red-500 rounded-sm dark:bg-gray-800">
//         <div className="w-full h-10 flex items-center px-4 pb-8 border-b border-teal-600">
//           <Link
//             href={"/"}
//             className="text-teal-700 bg-slate-100 px-8 py-4 rounded-2xl"
//           >
//             Homepage
//           </Link>
//         </div>
//       </div>

//       <div className="flex justify-center bg-white rounded-b-4xl pb-4">
//         <div className="flex justify-evenly w-full flex-wrap gap-6">
//           {HomeCardData.map((items) => (
//             <Card key={items.id} {...items} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

import { Link } from "iconsax-react";
import { HomeCardData } from "../data/HomeCardData";
import Search from "./SearchComponent";
import Card from "./CardComponent";
export default function ContentComponent() {
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
            {HomeCardData.map((items) => (
              <Card key={items.id} {...items} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
