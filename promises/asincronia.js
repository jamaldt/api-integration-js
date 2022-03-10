const datos = [
    {
        id:1,
        nombre:"goku",
        pdoer:"genkidama"
    },
    {
        id:2,
        nombre:"freezer",
        pdoer:"death ball"
    },
    {
        id:3,
        nombre:"piccolo",
        pdoer:"masenko"
    }
]


const getDatos = ()=>{
    setTimeout(()=>{
        return datos;
    },1500);
    
}

console.log(getDatos());