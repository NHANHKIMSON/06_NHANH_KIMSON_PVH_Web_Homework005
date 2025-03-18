export async function getAllBook(params) {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
        const book = await res.json();
        return book;
    }catch(err){
        console.log(err);
    }

}