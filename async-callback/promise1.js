var promise1 = new Promise((resolve, reject)=>
{
    setTimeout(()=>
    {
     resolve("Promise 1 is resolved")
     reject("Promise 1 is rejected ")
    },6000)
})


var promise2 = new Promise((resolve, reject)=>
{
    setTimeout(()=>
    {
     
     reject("Promise 2 is rejected ")
    },3000)
})

console.log(`before calling promise1 `);

promise1.then((resolve_msg)=>{
console.log("From Callback " +resolve_msg)
}).catch((err) =>
{
    console.log(err)
})

promise2.then((resolve_msg)=>{
    console.log("From Callback " +resolve_msg)
}).catch((err)=>
{
    console.log(err)
})

console.log(`After calling the promise`);