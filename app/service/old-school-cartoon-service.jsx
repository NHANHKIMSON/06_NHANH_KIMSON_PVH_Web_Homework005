export async function getAllCartoon(params) {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon${
        params ? `?genre=${params}` : ""
      }`
    );
    const cartoon = await res.json();
    return cartoon;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartoonByGenre(params) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?genre=${params}`
  );
  const result = res.json();
  return result;
}


export  async function getGenreById(params) {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${params}`);
  const result = res.json();
  return result;
  
}

export default async function getAllCartoonGenre(params) {
  try {
    const res = await fetch(
      `https://nextjs-homework005.vercel.app/api/cartoon_genre`
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export async function getCartoonSearh(params) {
  const res = await fetch(
    `https://nextjs-homework005.vercel.app/api/cartoon?search=${params}`
  );
  const json = res.json();
  return json;
}



export async function getCartoonById(params) {
  const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon/${params}`);
  const result = res.json();
  return result;
  
}