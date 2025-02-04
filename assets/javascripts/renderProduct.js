
const productList = [
    { 
        id: 1, 
        name: "Benebone Ring Durable Dog Chew Toy, Bacon Flavor", 
        price: 300000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/product_id1.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    },
    { 
        id: 2, 
        name: "Zoo Med Front Opening Terrarium Reptile Enclosure", 
        price: 32000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/smart_dish.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    },
    { 
        id: 3, 
        name: "Fiesta Healthy Toppings Papaya Bits Dog Treat", 
        price: 260000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/pro-7-600x720.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    },
    { 
        id: 4, 
        name: "Zunkel Schwarz Hill'S Science Diet Adult Perfect Digestion", 
        price: 145000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/royacanin.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    },
    { 
        id: 5, 
        name: "Maplestick Chew Toy Durable Cat Chew Toy Bacon", 
        price: 250000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/pro-34-600x720.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    },
    { 
        id: 6, 
        name: "Zoo Med Front Opening Terrarium Reptile Enclosure", 
        price: 99000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/pro-3-600x720.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    },
    { 
        id: 7, 
        name: "Earth Animal No Hide Rawhide Alternative Dog Treat Chew", 
        price: 90000, 
        stars: 5, 
        isHot: 1, 
        img: "./assets/img/pro-8-600x720.jpg" ,
        imgExtra : "./assets/img/product_id1.jpg" 
    }
];

console.log(productList);

function viewProduct(productId) {
    window.location.href = `./product-details.html?id=${productId}`; 
}

function renderProducts(productList) {
    const products = document.querySelector("#main_content--product-list .row") ; 
    products.innerHTML = ""; 

  
    
    productList.forEach((product) => {
    let starsHTML = "";
    for (let i = 0; i < product.stars; i++) {
        starsHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
                      </svg>`;
    }
    const productHTML = `
               <div class="col-xl-3">
                <div class="main_content--product-item">
                    <a class="main_content--product-figure" href="./product-details.html?id=${product.id}">
                        <img src="${product.img}" alt="${product.name}">
                    </a>
                    <div class="product-item_info">
                        <div class="product-item_rating">
                            ${starsHTML}
                        </div>

                        <div class="product-item_name">
                             <p class="sora-normal">${product.name}</p>
                        </div>
                         <div class="product-item_price sora-bold-x2">
                            <span>${product.price.toLocaleString()} vnd</span>
                        </div>
                    </div>
            
                    <div class="product-item_btn-group">
                        <button onClick="viewProduct(${product.id})" class="product-item_btn">
                            <span class="sora-bold">View product</span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg>
                        </button>
                    </div>
                </div>
              </div>
            `;
         products.innerHTML += productHTML;
    });
  }

renderProducts(productList) ; 


// Transport Item 

const btnLeft = document.querySelector(".button_extra-action.left");
const btnRight = document.querySelector(".button_extra-action.right");
const productContainer = document.querySelector("#main_content--product-list .row");
const products = document.querySelectorAll("#main_content--product-list .row .col-xl-3"); 


const widthProduct = products[0].offsetWidth ; 
const maxIndex = products.length - 4; 


let i = 0;


btnRight.addEventListener("click", () => {
    if (i < maxIndex) {  
        i++;
        productContainer.style.transform = `translateX(${-widthProduct * i}px)`;
    }
});

btnLeft.addEventListener("click", () => {
    if (i > 0) {  
        i--;
        productContainer.style.transform = `translateX(${-widthProduct * i}px)`;
    }
});


console.log(btnLeft , btnRight) ; 

document.body.style.zoom = "80%";
