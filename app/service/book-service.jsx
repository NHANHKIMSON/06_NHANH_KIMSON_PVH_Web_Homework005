export async function getAllBook(params) {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book${
        params ? `?query=${params}` : ""
      }`
    );
    const book = await res.json();
    return book;
  } catch (err) {
    console.log(err);
  }
}

export async function getAllCategory(params) {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book_category`
    );
    const allCategory = res.json();
    return allCategory;
  } catch (error) {
    console.log(error);
  }
}

export async function getBookByCategory(params) {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/book?query=${params}`
    );
    const bookByCateId = res.json();
    return bookByCateId;
  } catch (error) {
    console.log(error);
  }
}

export async function getBookById(params) {
  try {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/book/3`);
    const getBookByIdData = res.json();
    return getBookByIdData;
  } catch (erorr) {
    console.log(erorr);
  }
}

export async function searchBookByTitle(params) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/book?search=${params}`
  );
  const json = res.json();
  return json;
}
