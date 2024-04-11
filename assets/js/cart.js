const listSP = [
    {
        ma: "001",
        hinh: "iphone-11-128gb.webp",
        ten: "iPhone 11 128GB | Chính hãng VN/A",
        kichthuoc: "6.1 inches",
        ram: "4 GB",
        dungluong: "128 GB",
        giamoi: "11290000",
        giacu: "13990000",
        icon: "<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>",
        button: "MUA NGAY",
    },
    {
        ma: "002",
        hinh: "samsung-galaxy-s23-128gb.webp",
        ten: "Samsung Galaxy S23 8GB 128GB",
        kichthuoc: "6.1 inches",
        ram: "8 GB",
        dungluong: "128 GB",
        giamoi: "13750000",
        giacu: "22990000",
        icon: "<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>",
        button: "MUA NGAY",
    },
    {
        ma: "003",
        hinh: "oppo-reno-11-f-xanh.webp",
        ten: "OPPO Reno11 F 5G 8GB 256GB",
        kichthuoc: "6.7 inches",
        ram: "8 GB",
        dungluong: "256 GB",
        giamoi: "8990000",
        giacu: "14990000",
        icon: "<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>",
        button: "MUA NGAY",
    },
    {
        ma: "004",
        hinh: "samsung-galaxy-z-flip-5-256gb.webp",
        ten: "Samsung Galaxy Z Flip5 256GB",
        kichthuoc: "6.7 inches",
        ram: "8 GB",
        dungluong: "256 GB",
        giamoi: "17490000",
        giacu: "25990000",
        icon: "<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>,<i class=fa-solid fa-star></i>",
        button: "MUA NGAY",
    },
];

var string = "";
for (let i = 0; i < listSP.length; i++) {
    var obj = JSON.stringify(listSP[i]);
    string += ` <div class="col-3">
       <img src="./assets/images/${listSP[i].hinh}" alt="iphone-11-128gb"/>
           <div class="title-hero-col">
               <p class="title-info">
               ${listSP[i].ten}
               </p>
           </div>
           <div class="df-info-Phone">
                <div class="screen-size-phone">
                    <p class="border-screen">${listSP[i].kichthuoc}</p>
                </div>
               <div class="ram-phone">
                    <p class="border-ram">${listSP[i].ram}</p>
               </div>
               <div class="capacity-phone">
                   <p class="border-capacity">${listSP[i].dungluong}</p>
               </div>
           </div>
           <div class="Price-phone">
                <span class="new-Price">${listSP[i].giamoi}</span>
                <span class="old-Price">${listSP[i].giacu}</span>
           </div>
           <div class="df-icon-button">
               <div class="icon-phone">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
               </div>
               <button class="btn-add-cart" onclick="addCart('${listSP[i].ma}');">
                   MUA NGAY
               </button>
               <div class="df-status-icon">
                   <a href="#" class="icon-add" onclick="directDetail();" ><i class="fa-solid fa-magnifying-glass"></i></a>
                   <a href="#" class="icon-like" onclick="likeimg();"><i class="fa-regular fa-thumbs-up pos-top"></i></a>
                   <a href="#" class="icon-heart" onclick="heartCart();"><i class="fa-solid fa-heart pos-top"></i></a>
               </div>
           </div>
</div>
   `;
}
document.querySelector(".df-col-3").innerHTML = string;

let count = localStorage.getItem("totalCount");
if (count == null) {
    count = 0;
}else {
    document.querySelector(".Number-cart").innerText = count;
}
let arrCart = localStorage.getItem("Cart");
if (arrCart == null) {
    arrCart = [];
} else {
    arrCart = JSON.parse(localStorage.getItem("Cart"));
}
function addCart(ma) {
    var Item;
    var sluongItem = 0;
    var flag = false;
    for (let i = 0; i < listSP.length; i++) {
        if (listSP[i].ma == ma) {
            Item = listSP[i];
            sluongItem = 1;
            break;
        }
    }

    for (let i = 0; i < arrCart.length; i++) {
        if (arrCart[i].sp.ma == ma) {
            arrCart[i].qty++;
            flag = true;
            break;
        }
    }
    if (flag == false) {
        let itemCart = { sp: Item, qty: sluongItem };
        arrCart.push(itemCart);
    }

    count++;
    document.querySelector(".Number-cart").innerText = count;
    localStorage.setItem("totalCount", count + "");
    localStorage.setItem("Cart", JSON.stringify(arrCart));
}

// Ket noi trang Shopping-Cart
function directCart() {
    location.href = "shopping-cart.html";
}


// Ket noi den form
function directSign() {
    location.href = "form.html";
}

function likeimg() {
   for(var i = 0; i <= 5 ; i++) {
      if(i === 4) {
        alert("Bạn đã thích sản phẩm của chúng tôi");
        break;
      }
   }
}


function heartCart() {
    for(var i = 0; i <= 5 ; i++) {
        if(i === 4) {
          alert("Bạn đã yêu thích sản phẩm của chúng tôi");
          break;
        }
    }
}

function directDetail() {
    location.href = "detail.html";
}