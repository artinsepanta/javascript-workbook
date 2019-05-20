"use strict"
fetch('./example.json') 
.then((response) => { 
response.json().then((data) => { 
    console.log(data) ;
      }) ;
 });
 
 async get(url) {
  let response = undefined;
  try{
          const responseObj = await fetch(url);
          const resData = await responseObj.json();
          response = [ null , resData ];
   }
   catch(e){
          response = [ e , null ];
   }
   return response ;
}
async post(url,data) {
  let response = undefined;
  try{
      const responseObj = await fetch(url, {
          method: 'POST',
          headers: {
               'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
      });
      const resData = await responseObj.json();
      response = [ null , resData ];
  }
  catch(e){
      response = [ e , null ];
  } 
  return response ;
}
async put(url,data) {
  let response = undefined;
  try{
      const responseObj = await fetch(url, {
          method: 'PUT',
          headers: {
               'Content-type': 'application/json'
           },
           body: JSON.stringify(data)
       });
       const resData = await responseObj.json();
       response = [ null , resData ];
  }
  catch(e){
      response = [ e , null ];
  }
  return response ;
}
async delete(url) {
  let response = undefined;
  try{
      const responseObj = await fetch(url, {
          method: 'DELETE',
          headers: {
           'Content-type': 'application/json'
           },
           body: JSON.stringify(data)
   });
       const resData = await 'OK';
       response = [ null , resData ];
    }
    catch(e){
        response = [ e , null ];
    }
    return response ;
}
const http = new SimpleHttp();
document.querySelector('button').addEventListener('click',async () => {
    const [ err , data ] = http.get('https://jsonplaceholder.typicode.com/posts/1');
    if(err){
        alert(err);
        return;
     }
    console.log(data);
 });