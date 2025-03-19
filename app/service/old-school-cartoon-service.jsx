export async function getAllCartoon(params) {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon${params ? `?genre=${params}` : ""}`);
        const cartoon = await res.json();
        return cartoon;
    }catch (error){
        console.log(error);
    }
}

export async function getCartoonByGenre(params) {
    const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?genre=${params}`);
    const result = res.json();
    return result;
}



export default async function getAllCartoonGenre(params) {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre`);
        return res.json();
    }catch(error){
        console.log(error);
    }
}

// export async function getCartoonByGenre(params) {
//     const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon?genre=3`);
//     const data = res.json();
//     return data;
// }


// export default async function getAllCartoonByGenre(params) {
//     try{
//         const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon_genre/search?genre=${params}`);
//         return res.json();
//     }catch(error){
//         console.log(error);
//     }    
// }
