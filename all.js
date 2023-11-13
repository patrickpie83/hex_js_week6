const ticketCardArea=document.querySelector(".ticketCard-area");
const regionSearch=document.querySelector(".regionSearch");
const searchResultText=document.querySelector("#searchResult-text");
const addTicketBtn=document.querySelector(".addTicket-btn");

const ticketName=document.querySelector("#ticketName");
const ticketImgUrl=document.querySelector("#ticketImgUrl");
const ticketRegion=document.querySelector("#ticketRegion");
const ticketPrice=document.querySelector("#ticketPrice");
const ticketNum=document.querySelector("#ticketNum");
const ticketRate=document.querySelector("#ticketRate");
const ticketDescription=document.querySelector("#ticketDescription");

const ticketNameMessage=document.querySelector("#ticketName-message");
const ticketImgUrlMessage=document.querySelector("#ticketImgUrl-message");
const ticketRegionMessage=document.querySelector("#ticketRegion-message");
const ticketPriceMessage=document.querySelector("#ticketPrice-message");
const ticketNumMessage=document.querySelector("#ticketNum-message");
const ticketRateMessage=document.querySelector("#ticketRate-message");
const ticketDescriptionMessage=document.querySelector("#ticketDescription-message");

const url="https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
let data = [];

axios.get("https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json")
.then(function(res){
    console.log("no");
})

// let selectArea="";
// let areaCount;

// //初始化函式
// function init(){




//     areaCount=0;
//     let str="";
//     data.forEach(function(item){
//         areaCount+=1;
//         str+=`<li class="ticketCard">
//                 <div class="ticketCard-img">
//                 <a href="#">
//                     <img src="${item.imgUrl}" alt="${item.name}">
//                 </a>
//                 <div class="ticketCard-region">${item.area}</div>
//                 <div class="ticketCard-rank">${item.rate}</div>
//                 </div>
//                 <div class="ticketCard-content">
//                 <div>
//                     <h3>
//                     <a href="#" class="ticketCard-name">${item.name}</a>
//                     </h3>
//                     <p class="ticketCard-description">
//                     ${item.description}
//                     </p>
//                 </div>
//                 <div class="ticketCard-info">
//                     <p class="ticketCard-num">
//                     <span><i class="fas fa-exclamation-circle"></i></span>
//                     剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
//                     </p>
//                     <p class="ticketCard-price">
//                     TWD <span id="ticketCard-price">$${item.price}</span>
//                     </p>
//                 </div>
//                 </div>
//       </li>`
//     })

//     ticketCardArea.innerHTML=str;
//     searchResultText.textContent=`本次搜尋共 ${areaCount} 筆資料`;
// }

// init();


// //搜尋結果函式
// function reloadArea(){
//     areaCount=0;
//     let str="";
//     data.forEach(function(item){
        
//         if(item.area==selectArea){
//             areaCount+=1;
//             str+=`<li class="ticketCard">
//                     <div class="ticketCard-img">
//                     <a href="#">
//                         <img src="${item.imgUrl}" alt="${item.name}">
//                     </a>
//                     <div class="ticketCard-region">${item.area}</div>
//                     <div class="ticketCard-rank">${item.rate}</div>
//                     </div>
//                     <div class="ticketCard-content">
//                     <div>
//                         <h3>
//                         <a href="#" class="ticketCard-name">${item.name}</a>
//                         </h3>
//                         <p class="ticketCard-description">
//                         ${item.description}
//                         </p>
//                     </div>
//                     <div class="ticketCard-info">
//                         <p class="ticketCard-num">
//                         <span><i class="fas fa-exclamation-circle"></i></span>
//                         剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
//                         </p>
//                         <p class="ticketCard-price">
//                         TWD <span id="ticketCard-price">$${item.price}</span>
//                         </p>
//                     </div>
//                     </div>
//                 </li>`
//         }
       
//     })
//     ticketCardArea.innerHTML=str;
//     searchResultText.textContent=`本次搜尋共 ${areaCount} 筆資料`;
// }

// //搜尋監聽事件
// regionSearch.addEventListener("change",function(e){
    
//     if(e.target.value=="台北"){
//         console.log("選擇台北");
//         selectArea="台北"
//     }else if(e.target.value=="台中"){
//         console.log("選擇台中");
//         selectArea="台中"
//     }else if(e.target.value=="高雄"){
//         console.log("選擇高雄");
//         selectArea="高雄"
//     }else{
//         console.log("選擇全部地區");
//         selectArea="全部地區"
//         init();
//         return;
//     }

//     reloadArea();
// })

// const warnStr=`<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
// const rateWarnStr=`<i class="fas fa-exclamation-circle"></i><span>星級區間為1-10!</span>`;


// //新增套票按鈕監聽事件
// addTicketBtn.addEventListener("click",function(){
//     let contentComplete=true;

//     //每個欄位確保確實填寫
//     if(!ticketName.value){
//         ticketNameMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketNameMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//         contentComplete=contentComplete && true;
//     }

//     if(!ticketImgUrl.value){
//         ticketImgUrlMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketImgUrlMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//     }

//     if(!ticketRegion.value){
//         ticketRegionMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketRegionMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//     }

//     if(ticketPrice.value==0 || !ticketPrice.value){
//         ticketPriceMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketPriceMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//     }

//     if(ticketNum.value==0 || !ticketNum.value){
//         ticketNumMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketNumMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//     }

//     if(ticketRate.value==0 || !ticketRate.value){
//         ticketRateMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else if(ticketRate.value>10 || ticketRate.value<1){
//         ticketRateMessage.innerHTML=rateWarnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketRateMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//     }

//     if(!ticketDescription.value){
//         ticketDescriptionMessage.innerHTML=warnStr;
//         contentComplete=contentComplete && false;
//     }else{
//         ticketDescriptionMessage.innerHTML="";
//         contentComplete=contentComplete && true;
//     }

//     //若內容皆正確填寫，將資料寫入data，並初始畫面
//     if(contentComplete){
//         data.push({
//             "name":ticketName.value,
//             "imgUrl":ticketImgUrl.value,
//             "area":ticketRegion.value,
//             "description":ticketDescription.value,
//             "group":ticketNum.value,
//             "price":ticketPrice.value,
//             "rate":ticketRate.value
//         })
//         init();
//     }

// })
