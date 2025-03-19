export async function getAllBook(params) {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/book`);
        const book = await res.json();
        return book;
    }catch(err){
        console.log(err);
    }

}

export async function getAllCategory(params) {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/book_category`);
        const allCategory = res.json();
        return allCategory;

    }catch(error){
        console.log(error);
        
    }
    
}

export async function getBookByCategory(params) {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/book?query=11`);
        const bookByCateId = res.json();
        return bookByCateId;
    }catch (error){
        console.log(error);
    }
}