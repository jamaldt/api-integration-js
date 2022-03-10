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

async function asincrono(){
    const datos_asincronos = await getDatos();
    console.log(datos_asincronos);
}

asincrono();
console.log(getDatos());