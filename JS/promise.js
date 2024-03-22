let a=60;
let p=new Promise((resolve,reject)=>
{
    if(a===40)
    {
        resolve("promise p is resolved")
    }
    else
    {
        reject("promise p is rejected")
    }
})

p.then((res)=>{
    console.log(res)
}).
catch((err)=>{
    console.log(err)
})

let b=80;
let p1=new Promise((resolve,reject)=>
{
    if(b===40)
    {
        resolve("promise p1 is resolved")
    }
    else
    {
        reject("promise p1 is rejected")
    }
})

p1.then((res)=>{
    console.log(res)
}).
catch((err)=>{
    console.log(err)
})

Promise.all([p,p1]).
then(()=>{}).catch((err)=>{console.log(err)})