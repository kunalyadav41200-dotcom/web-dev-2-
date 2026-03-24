// console.log("Hello, World!");
// console.log(document)

// const para = document.querySelector("p")

// para.innerText="THIS IS UPDATED PARAGRAPH TEXT"
// console.log(para.innerText);

// const para = document.getElementsByClassName("para") //return html collection
// para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
// para[1].style.color="red"
// console.log(para);

// const para = document.querySelectorAll(".para") //return node list 
//  para[0].innerText="THIS IS UPDATED PARAGRAPH TEXT"
//  para[1].style.color="red"
//  console.log(para);

//  let arr= [1,2,3,4,5]
//  const newArr= arr.forEach((ele)=>console.log(ele))

// const container = document.querySelector(".container") 
// container.innerHTML= "<h1>This is a heading</h1><p>This is a paragraph inside container div</p>"
// console.log(container)

// const btn = document.querySelector("button");
// btn.classList.add("btn")
// btn.classList.remove("btn")
// btn.classList.toggle("btn")

// function printMessage(){
//     console.log("Button Clicked");
// }

// btn.addEventListener("click", printMessage)
// btn.removeEventListener("click", printMessage)
// btn.addEventListener("click", ()=>console.log("Anonymous Function Called"))


// function  startTimer(){
//     console.log("Timer Started");
// }

// const btn = document.querySelector(".click");
// btn.addEventListener("click", startTimer);


// function stopTimer(){
//     console.log("Timer Stopped");
//     btn.removeEventListener("click", startTimer);
// }
// const stopBtn = document.querySelector(".stop");
// stopBtn.addEventListener("click", stopTimer);


// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);

// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });

// function message(){
//     console.log("Button Clicked");
// }

// const click = document.querySelector(".click");
// click.addEventListener("click", message);
// click.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Click button");
// });


// const stop = document.querySelector(".stop");
// stop.addEventListener("click", ()=>{
//     console.log("Button Stopped");
//     click.removeEventListener("click", message);
// });
// stop.addEventListener("mouseover", ()=>{
//     console.log("Hovering over Stop button");
// });



// const click = document.querySelector(".click");

// function message(event){

//     console.log(event.key);
//     console.log("Button Clicked");

// }

// click.addEventListener("keyup", message);



// const form = document.querySelector("form");
// form.addEventListener("submit", (event)=>{
//     event.preventDefault();
//     console.log("Form Submitted");
// });

// console.log("Script loaded");

// window.addEventListener("load", ()=>{
//     console.log("All resources finished loading!");
// });

// console.log(a); 
// // console.log(b); 


// var a = 10;
// let b = 20;

// console.log(a); 
// console.log(b); 

// function test(){
//     let c = 30;
//     console.log(c);
//     console.log("Inside Test Function");
// }

// test();

// function greet (){

//     var message = "Hello, user!";
//     console.log(message);
// }
// greet();
// console.log(message);


// function first (){
//     second ();
// }
// function second (){
//     third ();
// }
// function third (){
//     console.trace()
// }
// first ();


// console.log("first line");
// setTimeout(()=>{console.log("second line")},2000);
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");
// console.log("second line");



// const timerId=setInterval(() => {
//     console.log("after 3 seconds")
// }, 1000);
// console.log(timerId);
// setTimeout(() => {
//     clearInterval(timerId)
    
// },10*1000)

// var hello=1
// const timerId=setInterval(()=>{
//     hello+=1
//     console.log(hello)
// },1000)

// console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000)       

// let count=1

// const timerId=setInterval(()=>{
//     if(count===10)clearInterval(timerId)
//     console.log(count)
//     count+=1

// },1000)

// console.log("before timeout")
// setTimeout(()=>{
//     console.log("inside timeout")
// },0)
// console.log("after timeout")

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btn")
// const list=document.querySelector(".list")

// btn.addEventListener("click",()=>{

//     if(name.value==="")return
//     const li=document.createElement("li")
//     const dlt=document.createElement("button")


//     dlt.innerText="Delete"
//     li.innerText=name.value;


//     dlt.addEventListener("click",()=>{
//         list.removeChild(li)
//     })


//     list.appendChild(li)
//     li.appendChild(dlt)

    
//     name.value=""
// })



// function greet(){ // callback function
//     setTimeout(() => {
//     console.log("Hello students!")
// }, 2000)
//     print(45)
// }

// function print(num){ //higher order function
//     console.log("total students are ",num)
// }
// greet(print)




// console.log("Starting homework...");

// setTimeout(() => {

// console.log ("Homework done!");

// console.log("Starting dinner...");

// setTimeout(() => {

// console.log("Dinner done!");

// console.log("Getting ready to go out...");

// setTimeout(() => {

// console.log("Going to the playground!");

// }, 1000); // after dinner

// }, 1500); // dinner time

// }, 2000); // homework time

// function finishHomework(callback) {
// console.log("Starting homework...");
// setTimeout(() => {
//     console.log("Homework done!");
//     callback();
// }, 2000);
// }





// function finishHomework(callback) {

// }

// console.log("Starting homework...");

// setTimeout(() => { callback();

// console.log("Homework done!");

// }, 2000);

// function eatDinner (callback) {

// console.log("Starting dinner...");

// } setTimeout(() => { console.log("Dinner done!"); callback();

// }, 1500);

// function goToPlayground() {

// console.log("Going to the playground!"); }

// // Chained in steps, but cleaner

// finishHomework(() => {

// eatDinner(() => { goToPlayground(); });

// });


// const p = new Promise((res,rej)=>{
//     let done=false
//     setTimeout(()=>{
//         if(done){
//             res("work is done!!")
//         }else{
//             rej("work is not done")
//         }
//     },5000)
// })
// console.log(p)



// function doHomework(){
//     const p = new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             let homeworkDone = true;
//             if (homeworkDone){
//                 console.log("homework is done");
//                 resolve("homework complete");
//             } else {
//                 reject("homework not done");
//             }
//         },2000);
//     });
// }


// function eatDinner(){
//     const p=new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let done=true
//             if(done){
//                 console.log("dinner is done")
//                 res("dinner is complete")
//             }else{
//                 rej("dinner not complete")
//             }
//             },2000)
//         })
//         return p    
//      }


// function goToPlayground(){
//     const p=new Promise((res,rej) =>{
//         setTimeout(()=>{
//             let done=true
//             if(done){
//                 console.log("went to playground")
//                 res("playground time")
//             }else{
//                 rej("not allowed")
//             }
//         },2000)
//     })
//     return p
// }


// doHomework().then((msg)=>{
//     console.log(msg)
//     return eatDinner()
// }).then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("go to sleep")
// })



// function orderFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("food ordered")
//             res()
//         },2000)
//     })
// }

// function prepareFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("food prepared")
//             res()
//         },2000)
//     })
// }

// function deliverFood(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             console.log("food Deliverd")
//             res()
//         },2000)
//     })
// }

// async function order(){
//     const data = await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// order()

// orderFood().then((data)=>{
//     return prepareFood()
// }).then((data)=>{
//     return deliverFood()
// }).then((data)=>{
// }).catch((err)=>{
//     console.log("something went wrong")
// })


// console.log("first line")
// try{
//     let sample = 234
//     console.log(sample)
//     let age = 16
//     if(age<16){
//         throw new error("you are not eligible to vote")
//         // console.log("line after sample")
//         //
//         //
//     }
//     /////
//     console.log("line after sample")
// }catch(e){
//     console.warn(e)
//     console.error(e)
//     console.log(e)
// }
// console.log("last line")


// async function getData(){
//     const response=await fetch("https://dummyjson.com/products")
//     const data=await response.json()
//     //console.log(datsa.products[0].title)
//     data.products.forEach((product)=>{
//         console.log(product.title)
//     })
// }
// getData()


// async function getData(){
//     try{
//         const response=await fetch("https://dummyjson.com/products")
//         if(response.ok===false){
//             throw new Error("something went wrong")
//         }
//     const data=await response.json()
//     console.log(data)
//     //console.log(datsa.products[0].title)
//     data.products.forEach((product)=>{
//         console.log(product.title)
//     })
// }catch(err){
//     console.log(err)
// }
// }
// getData()


// function* generate(){
//     // yield 1
//     // yield 2
//     // yield 3
//     let index=25017343
//     while(true){
//         yield index
//         index++
//     }
// }

// const gen=generate()
// console.log(gen)
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }
// const first=add(1)
// console.log(first)
// const second=first(2)
// console.log(second)
// console.log(second(3))

// console.log(add(1)(2)(3))
// function renderHistory() {
//     historyDiv.innerHTML = "";
//     searchHistory.forEach(city => {
//         const btn = document.createElement("button");
//         btn.textContent = city;
//         btn.onclick = () => {
//             cityInput.value = city;
//             form.dispatchEvent(new Event("submit"));
//         };
//         historyDiv.appendChild(btn);
//     });
// }
