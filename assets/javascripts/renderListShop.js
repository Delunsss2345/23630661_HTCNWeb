const shopList = [
    {
      id: 1,
      name: "Benebone Ring Durable Dog Chew Toy, Bacon Flavor",
      price: 300000,
      discount: 15,
      stars: 5,
      isHot: 1,
      category_shop: "toy",
      size: "L",
      brand: "Benebone",
      img: "./assets/img/product_id1x2.png",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 2,
      name: "Zoo Med Front Opening Terrarium Reptile Enclosure",
      price: 32000,
      discount: 10,
      stars: 5,
      isHot: 1,
      category_shop: "crates",
      size: "M",
      brand: "Zoo Med",
      img: "./assets/img/smart_dish.jpg",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 3,
      name: "Fiesta Healthy Toppings Papaya Bits Dog Treat",
      price: 260000,
      discount: 20,
      stars: 5,
      isHot: 1,
      category_shop: "food",
      size: "S",
      brand: "Fiesta",
      img: "./assets/img/pro-7-600x720.jpg",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 4,
      name: "Zunkel Schwarz Hill'S Science Diet Adult Perfect Digestion",
      price: 145000,
      discount: 25,
      stars: 5,
      isHot: 1,
      category_shop: "food",
      size: "XL",
      brand: "Hill's Science Diet",
      img: "./assets/img/royacanin.jpg",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 5,
      name: "Maplestick Chew Toy Durable Cat Chew Toy Bacon",
      price: 250000,
      discount: 12,
      stars: 5,
      isHot: 1,
      category_shop: "toy",
      size: "S",
      brand: "Maplestick",
      img: "./assets/img/pro-34-600x720.jpg",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 6,
      name: "Zoo Med Front Opening Terrarium Reptile Enclosure",
      price: 99000,
      discount: 8,
      stars: 5,
      isHot: 1,
      category_shop: "crates",
      size: "XL",
      brand: "Zoo Med",
      img: "./assets/img/pro-3-600x720.jpg",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 7,
      name: "Earth Animal No Hide Rawhide Alternative Dog Treat Chew",
      price: 90000,
      discount: 30,
      stars: 5,
      isHot: 1,
      category_shop: "food",
      size: "S",
      brand: "Earth Animal",
      img: "./assets/img/pro-8-600x720.jpg",
      imgExtra: "./assets/img/product_id1.jpg",
    },
    {
      id: 10,
      category: "Latest Product",
      name: "Spot Holiday Gingerbread Catnip",
      price: 470000,
      stars: 5,
      discount: 5,
      category_shop: "cat",
      size: "L",
      brand: "Spot",
      img: "./assets/img/SpotHolidayGingerbreadCatnip.jpg",
    },
    {
      id: 11,
      category: "Latest Product",
      name: "Spot Holiday Summer Catnip Toys",
      price: 345000,
      stars: 5,
      discount: 10,
      category_shop: "cat",
      size: "XL",
      brand: "Spot",
      img: "./assets/img/SpotHolidaySummerCatnipToys.jpg",
    },
    {
      id: 12,
      category: "Latest Product",
      name: "Kaytee Iglgoo Giant Hideout For Small Animals",
      price: 43000,
      stars: 5,
      discount: 12,
      category_shop: "crates",
      size: "M",
      brand: "Kaytee",
      img: "./assets/img/pro-8-600x720.jpg",
    },
    {
      id: 13,
      category: "Latest Product",
      name: "Natural Balance Limited Ingredient Grain Free Sweet",
      price: 20000,
      discount: 18,
      stars: 5,
      category_shop: "food",
      size: "S",
      brand: "Natural Balance",
      img: "./assets/img/pro-30-600x720.jpg",
    }
  ];
  
const brands = ["Benebone", "Zoo Med", "Fiesta", "Hill's Science Diet", "Maplestick"];
  
const sizes = ["S", "M", "L", "XL"];
  
const category = ["Food", "Cat", "Dog", "Beds", "Toy", "Crates"];



let category_shop = document.querySelector(".main_shop--list-category");
let brand_shop = document.querySelector(".main_shop--list-brands");
let size_shop = document.querySelector(".main_shop--list-size");
const renderShopLeft = (data , elemPerson , name) => {
    let html = "" ; 
    elemPerson.innerHTML = "" ; 

    data.forEach(element => {
        html += `
            <div class="item_shop--group">
                 <input id="${element}" class="item_shop--radio" type="radio" name="${name}"/> 
                <label for="${element}">${element}</label>
            </div>
        `
    });
    
    elemPerson.innerHTML += html ;
}

renderShopLeft(category , category_shop , "name") ;
renderShopLeft(brands , brand_shop , "brands") ; 
renderShopLeft(sizes , size_shop , "Size") ; 



function renderProducts(productList) {
    const products = document.querySelector(".main_shop--right-list-shop .row") ; 
    products.innerHTML = ""; 

  
    
productList.forEach((product) => {
    let starsHTML = "";
    for (let i = 0; i < product.stars; i++) {
        starsHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
                      </svg>`;
    }
    const productHTML = `
               <div class="col-xl-4">
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

renderProducts(shopList) ; 
