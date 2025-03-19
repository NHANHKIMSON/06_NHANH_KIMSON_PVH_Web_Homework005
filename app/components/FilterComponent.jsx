"use client";

import { useRouter } from "next/navigation";

function FilterComponent({ allCategory }) {
    const router = useRouter();
    const handleFilter = (e) =>{
        router.replace(`/book-categories?query=${e.target.value}`);
    }
    console.log(allCategory);
    
  return (
    <>
      <select onChange={handleFilter}
        name="category"
        id=""
        className="text-teal-700 px-8 py-2 rounded-2xl bg-slate-100"
      >
        {allCategory.map((items, index) => (
          <option key={items.id} value={items.id}>
            {items.book_cate_name}
          </option>
        ))}
      </select>
    </>
  );
}

export default FilterComponent;
