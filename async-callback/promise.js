let var_promise=new Promise((resolve,reject) =>
{
    setTimeout(()=>
    {
      resolve("Promise is responding after 6 seconds")
      reject("Promise is rejected")
    }
    ,6000)})

console.log("Before using promise");

var_promise.then((resolve_msg)=>
{
 console.log("From Callback : "+ resolve_msg)
}).catch((err)=>{
  console.log(err)
})

console.log("After promise");