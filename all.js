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

//修正，新增完套票後表單輸入框應清除
const addTicketForm=document.querySelector(".addTicket-form");

//修正，新增查無關鍵字區呈現
const cantFindArea=document.querySelector(".cantFind-area");


//初始化函式
function init(){

    // 修正，新增完套票後表單輸入框應清除
    addTicketForm.reset();

    render(data);

    //修正，新增套票後搜尋下拉選單應恢復為初始狀態
    regionSearch.innerHTML=`<option value="地區搜尋" disabled selected hidden>地區搜尋</option>
    <option value="全部地區">全部地區</option>
    <option value="台北">台北</option>
    <option value="台中">台中</option>
    <option value="台南">台南</option>
    <option value="高雄">高雄</option>`;
}

init();

//搜尋監聽事件
regionSearch.addEventListener("change",function(e){
    
    let filterData=[];

    //修正，將渲染函式片段提出重複利用
    //若為全部地區，則渲染資料集為全部資料，否則為所選地區的資料集
    if(e.target.value=="全部地區"){
        render(data);
    }else{
        data.forEach(function(item){
            if(item.area==e.target.value){
                filterData.push(item);
            }
        })
        render(filterData);
    }
})

const warnStr=`<i class="fas fa-exclamation-circle"></i><span>必填!</span>`;
const rateWarnStr=`<i class="fas fa-exclamation-circle"></i><span>星級區間為1-10!</span>`;


//修正，渲染函式
function render(renderData){
    let str="";
    const len=renderData.length;
    renderData.forEach(function(item){
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
    searchResultText.textContent=`本次搜尋共 ${len} 筆資料`;

    //修正，無搜尋資料時的呈現
    if(len==0){
        cantFindArea.classList.add("d-block");
    }else{
        cantFindArea.setAttribute("class","cantFind-area")
    }
}

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

        //修正，需賦予id值，此為隨機碼
        let myuuid = crypto.randomUUID();
   
        data.push({
            "name":ticketName.value,
            "imgUrl":ticketImgUrl.value,
            "area":ticketRegion.value,
            "description":ticketDescription.value,
            //修正，<input>取得的值型別為字串，需轉為數值
            "group":Number(ticketNum.value),
            "price":Number(ticketPrice.value),
            "rate":Number(ticketRate.value),
            //修正，需賦予id值，此為隨機碼
            "id":myuuid
        })

        init();
    }

})