fetch("https://codeforces.com/api").then((res)=>{
    console.log(res.json());
    return (res.json);
}).catch((e)=>{
    console.log(e);
})