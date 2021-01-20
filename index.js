let form = document.querySelector('form');
let select =  document.querySelector('#list');
let sublist = document.querySelector('#list1');
let sublist1 = document.querySelector('#list2');
 let sublist2 = document.querySelector('#list3');
 
function showData(){
fetch('demo.txt')
.then( (data) => {
return data.text();
// handle the response
})
.then( (actualdata) =>
{
let arr = actualdata.split("\n");   
// console.log(arr);
let Two2dArray = arr.map(actualdata =>{
let index= actualdata.indexOf('-');
return actualdata.substr(index+2);
}); 

let temp =  Two2dArray.map(actualdata => actualdata.split('>'));

let tempArr = [];
temp.map(ele =>{

let query= ele[0].trim();

// for select data
if(tempArr.indexOf(ele[0].trim()) == -1){
tempArr.push(query)
var opt =document.createElement('option');
opt.textContent = query
select.append(opt)
}
})

select.addEventListener("change",()=>
{    let arrayTemp=[];
let tamparray=temp.map((ele)=>
{
if(ele.length >1 && ele[0].trim()== select.value)
{
let query= ele[1].trim();
//console.log(query);
if(arrayTemp.indexOf(query) == -1 ){
arrayTemp.push(query)
let opt =document.createElement('option');
opt.textContent =  query;
sublist.append(opt );
}
}
})
})
sublist.addEventListener("change",()=>
{    let arrayTemp=[];
let tamparray=temp.map((ele)=>
{
if(ele.length >2 && ele[1].trim()== sublist.value)
{
let query= ele[2].trim();
//console.log(query);
if(arrayTemp.indexOf(query) == -1 ){
arrayTemp.push(query)
let opt =document.createElement('option');
opt.textContent = ele[0] + "/" + query;
sublist1.append(opt );

}
}
})
})
sublist1.addEventListener("change",()=>
{  
  console.log("Inside ")
  let arrayTemp=[];
let tamparray=temp.map((ele)=>
{
if(ele.length >3 && ele[2].trim()== sublist1.value)
{
  let query= ele[3].trim();
  console.log(query);
  if(arrayTemp.indexOf(query) == -1 ){
  arrayTemp.push(query)
  let opt =document.createElement('option');
  opt.textContent = query;
  sublist2.append(opt);
}
}
})
})
}).catch(error => {
console.log("this is failed");
// handle the error
});
}