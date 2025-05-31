


// this is like the state in the react , where we will store the api data.
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
const createData=(newdata)=>{
    return new Promise((resolve,reject)=>{
        let error=false; // here api endpoint will be hit.
        setTimeout(() => {
            datas.push(newdata);
        
            if(!error){
                resolve();
            } else{
                reject("api failed error");
            }
           
         }, 2000);
    })
     
}

// await works with async and it will wait till the data will be created. then getdata function will called.
const start=async ()=>{
 await createData({name:"ankit",profession:"swe"});
 getData();
}
start();

// createData({name:"tanya",profession:"swe"},getData).then(getData).catch(err=>console.log(err));
// createData({name:"aarya",profession:"swe"},getData).then(getData).catch(err=>console.log(err));