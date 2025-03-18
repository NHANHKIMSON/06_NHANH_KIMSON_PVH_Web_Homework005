export async function getAllCartoon() {
    try{
        const res = await fetch(`https://nextjs-homework005.vercel.app/api/cartoon`);
        const cartoon = await res.json();
        return cartoon;
    }catch (error){
        console.log(error);
    }
}