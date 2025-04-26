
const datas=[
    {name:"adesh",profession:"swe"},
    {name:"tanuj",profession:"swe"}
]

const getData=()=>{
    let output="";
    setTimeout(()=>{
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`
            
        })
         document.body.innerHTML=output;
    },[1000])
    
}
const createData=(newdata,callback)=>{
     setTimeout(() => {
        datas.push(newdata);
        callback();
     }, 2000);
}

createData({name:"tanya",profession:"swe"},getData)
createData({name:"aarya",profession:"swe"},getData)
getData();