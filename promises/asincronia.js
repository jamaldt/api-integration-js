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
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(datos)
        return datos;
        },1500);
    });
}

getDatos()
.then((datos)=> console.log(datos));

console.log(getDatos());