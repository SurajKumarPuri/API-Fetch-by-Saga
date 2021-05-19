export const Apifetch= async()=>{
    try{
        const request= await fetch('https://jsonplaceholder.typicode.com/posts')
        const res= await request.json()
        console.log(res)
        return res
    }catch(e){
        console.log(e)
    }
}