let data = [
    {
      "id": 0,
      "name": "肥宅心碎賞櫻3日",
      "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
      "area": "高雄",
      "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
      "group": 87,
      "price": 1400,
      "rate": 10
    },
    {
      "id": 1,
      "name": "貓空纜車雙程票",
      "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台北",
      "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
      "group": 99,
      "price": 240,
      "rate": 2
    },
    {
      "id": 2,
      "name": "台中谷關溫泉會1日",
      "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      "area": "台中",
      "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
      "group": 20,
      "price": 1765,
      "rate": 7
    }
  ];


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

let selectArea="";
let areaCount;

//初始化函式
function init(){
    areaCount=0;
    let str="";
    data.forEach(function(item){
        areaCount+=1;
        str+=`<li class="ticketCard">
                <div class="ticketCard-img">
                <a href="#">
                    <img src="${item.imgUrl}" alt="${item.name}">
                </a>
                <div class="ticketCard-region">${item.area}</div>
                <div class="ticketCard-rank">${item.rate}</div>
                </div>
                <div class="ticketCard-content">
                <div>
                    <h3>
                    <a href="#" class="ticketCard-name">${item.name}</a>
                    </h3>
                    <p class="ticketCard-description">
                    ${item.description}
                    </p>
                </div>
                <div class="ticketCard-info">
                    <p class="ticketCard-num">
                    <span><i class="fas fa-exclamation-circle"></i></span>
                    剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                    </p>
                    <p class="ticketCard-price">
                    TWD <span id="ticketCard-price">$${item.price}</span>
                    </p>
                </div>
                </div>
      </li>`
    })

    ticketCardArea.innerHTML=str;
    searchResultText.textContent=`本次搜尋共 ${areaCount} 筆資料`;
}

init();


//搜尋結果函式
function reloadArea(){
    areaCount=0;
    let str="";
    data.forEach(function(item){
        
        if(item.area==selectArea){
            areaCount+=1;
            str+=`<li class="ticketCard">
                    <div class="ticketCard-img">
                    <a href="#">
                        <img src="${item.imgUrl}" alt="${item.name}">
                    </a>
                    <div class="ticketCard-region">${item.area}</div>
                    <div class="ticketCard-rank">${item.rate}</div>
                    </div>
                    <div class="ticketCard-content">
                    <div>
                        <h3>
                        <a href="#" class="ticketCard-name">${item.name}</a>
                        </h3>
                        <p class="ticketCard-description">
                        ${item.description}
                        </p>
                    </div>
                    <div class="ticketCard-info">
                        <p class="ticketCard-num">
                        <span><i class="fas fa-exclamation-circle"></i></span>
                        剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
                        </p>
                        <p class="ticketCard-price">
                        TWD <span id="ticketCard-price">$${item.price}</span>
                        </p>
                    </div>
                    </div>
                </li>`
        }
       
    })
    ticketCardArea.innerHTML=str;
    searchResultText.textContent=`本次搜尋共 ${areaCount} 筆資料`;
}

//搜尋監聽事件
regionSearch.addEventListener("change",function(e){
    
    if(e.target.value=="台北"){
        console.log("選擇台北");
        selectArea="台北"
    }else if(e.target.value=="台中"){
        console.log("選擇台中");
        selectArea="台中"
    }else if(e.target.value=="高雄"){
        console.log("選擇高雄");
        selectArea="高雄"
    }else{
        console.log("選擇全部地區");
        selectArea="全部地區"
        init();
        return;
    }

    reloadArea();
})

const warnStr=`<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
const rateWarnStr=`<i class="fas fa-exclamation-circle"></i><span>星級區間為1-10!</span>`;


//新增套票按鈕監聽事件
addTicketBtn.addEventListener("click",function(){
    let contentComplete=true;

    //每個欄位確保確實填寫
    if(!ticketName.value){
        ticketNameMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketNameMessage.innerHTML="";
        contentComplete=contentComplete && true;
        contentComplete=contentComplete && true;
    }

    if(!ticketImgUrl.value){
        ticketImgUrlMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketImgUrlMessage.innerHTML="";
        contentComplete=contentComplete && true;
    }

    if(!ticketRegion.value){
        ticketRegionMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketRegionMessage.innerHTML="";
        contentComplete=contentComplete && true;
    }

    if(ticketPrice.value==0 || !ticketPrice.value){
        ticketPriceMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketPriceMessage.innerHTML="";
        contentComplete=contentComplete && true;
    }

    if(ticketNum.value==0 || !ticketNum.value){
        ticketNumMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketNumMessage.innerHTML="";
        contentComplete=contentComplete && true;
    }

    if(ticketRate.value==0 || !ticketRate.value){
        ticketRateMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else if(ticketRate.value>10 || ticketRate.value<1){
        ticketRateMessage.innerHTML=rateWarnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketRateMessage.innerHTML="";
        contentComplete=contentComplete && true;
    }

    if(!ticketDescription.value){
        ticketDescriptionMessage.innerHTML=warnStr;
        contentComplete=contentComplete && false;
    }else{
        ticketDescriptionMessage.innerHTML="";
        contentComplete=contentComplete && true;
    }

    //若內容皆正確填寫，將資料寫入data，並初始畫面
    if(contentComplete){
        data.push({
            "name":ticketName.value,
            "imgUrl":ticketImgUrl.value,
            "area":ticketRegion.value,
            "description":ticketDescription.value,
            "group":ticketNum.value,
            "price":ticketPrice.value,
            "rate":ticketRate.value
        })
        init();
    }

})