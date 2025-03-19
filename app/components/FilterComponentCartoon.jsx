"use client";

import { useRouter } from "next/navigation";

function FilterComponent({ cartoon_genre }) {
    const router = useRouter();
    const handleFilter = (e) =>{
        router.replace(`/old-school-cartoons?query=${e.target.value}`);
    }
  return (
    <>
      <select onChange={handleFilter}
        name="category"
        id=""
        className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100"
      >
        {cartoon_genre.map((items, index) => (
          <option key={items.id} value={items.id}>
            {items.cartoon_genre}
          </option>
        ))}
      </select>
    </>
  );
}

export default FilterComponent;
