function readData(){
    let xhttp=new XMLHttpRequest();
    let div=document.getElementById("Jsondata")
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 & this.status==200){
            // console.log(JSON.parse(xhttp.responseText));
            let data=JSON.parse(xhttp.responseText);
            data.forEach(ele=>{
                div.innerHTML+=ele.name+":::"+ele.email+"<br/>";
            })
        }
    } 
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.send();
}
readData();