function readData(){
    // let xhttp=new XMLHttpRequest();
    let div1=document.getElementById("usingfetch")
    // xhttp.onreadystatechange=function(){
    //     if(this.readyState==4 & this.status==200){
    //         // console.log(JSON.parse(xhttp.responseText));
    //         let data=JSON.parse(xhttp.responseText);
    //         data.forEach(ele=>{
    //             div.innerHTML+=ele.name+":::"+ele.email+"<br/>";
    //         })
    //     }
    // } 
    // xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    // xhttp.send();
    let response=fetch("https://jsonplaceholder.typicode.com/users")
    //console.log(response);
    response.then((res)=>{
        //console.log(res);
        res.json().then((data)=>{
            //console.log(data);
            data.forEach(ele=>{
                div1.innerHTML+=ele.name+":::"+ele.email+"<br/>"
            })
        })

    })
}
readData();