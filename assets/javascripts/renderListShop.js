const shopList = [
  {
    id: 1,
    name: "Benebone Ring Durable Dog Chew Toy, Bacon Flavor",
    price: 300000,
    discount: 15,
    stars: 5,
    isHot: 1,
    category_shop: "Toy",
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
    category_shop: "Crates",
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
    category_shop: "Food",
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
    category_shop: "Food",
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
    category_shop: "Toy",
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
    category_shop: "Crates",
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
    category_shop: "Food",
    size: "S",
    brand: "Earth Animal",
    img: "./assets/img/pro-8-600x720.jpg",
    imgExtra: "./assets/img/product_id1.jpg",
  },
  {
    id: 10,
    name: "Spot Holiday Gingerbread Catnip",
    price: 470000,
    stars: 5,
    discount: 5,
    category_shop: "Cat",
    size: "L",
    brand: "Spot",
    img: "./assets/img/SpotHolidayGingerbreadCatnip.jpg",
  },
  {
    id: 11,
    name: "Spot Holiday Summer Catnip Toys",
    price: 345000,
    stars: 5,
    discount: 10,
    category_shop: "Cat",
    size: "XL",
    brand: "Spot",
    img: "./assets/img/SpotHolidaySummerCatnipToys.jpg",
  },
  {
    id: 13,
    name: "Natural Balance Limited Ingredient Grain Free Sweet",
    price: 20000,
    discount: 18,
    stars: 5,
    category_shop: "Food",
    size: "S",
    brand: "Natural Balance",
    img: "./assets/img/pro-30-600x720.jpg",
  },
  {
    id: 22,
    name: "A&E Cage Happy Beaks Ball Thing Bird Toy",
    price: 429019,
    stars: 5,
    category_shop: "Toy",
    size: "M",
    brand: "A&E Cage",
    img: "./assets/img/pro-2-600x720.jpg",
  },
  {
    id: 23,
    name: "Brown'S Encore Farm Fresh Fixins Flaked Cereal Treat",
    price: 227005,
    stars: 2,
    category_shop: "Food",
    size: "L",
    brand: "Brown's Encore",
    img: "./assets/img/product-600x720.jpg",
  },
  {
    id: 25,
    name: "Zoo Med Front Opening Terrarium Reptile Enclosure",
    price: 332000,
    stars: 5,
    category_shop: "Crates",
    size: "XL",
    brand: "Zoo Med",
    img: "./assets/img/pro-22-600x720.jpg",
  },
  {
    id: 27,
    name: "Dried Soldierworms 2.2 Oz Reptile Food",
    price: 299409,
    stars: 5,
    category_shop: "Food",
    size: "M",
    brand: "Generic",
    img: "./assets/img/pro-13-1-600x720.jpg",
  },
  {
    id: 29,
    name: "American Cat Club Buffalo Plaid Holiday Cat Scratchers",
    price: 489000,
    stars: 3,
    category_shop: "Cat",
    size: "L",
    brand: "American Cat Club",
    img: "./assets/img/pro-14-1-600x720.jpg",
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
                 <input value="${element}" id="${element}" class="item_shop--radio" type="radio" name="${name}"/> 
                <label for="${element}">${element}</label>
            </div>
        `
    });
    
    elemPerson.innerHTML += html ;
}

renderShopLeft(category , category_shop , "name") ;
renderShopLeft(brands , brand_shop , "brands") ; 
renderShopLeft(sizes , size_shop , "Size") ; 

let sorting = ["Default Sorting" , "Sort By Price : Low to High" , "Sort By Price : High to Low"] ; 

let sort_shop = document.querySelector(".main_shop--right-sortBtn");


const renderSort = (sorting) => {
  let gr = '' ; 
  sort_shop.innerHTML = '' ; 
  sorting.forEach((sort) => {
    gr += `<span>${sort}</span>`
  })
  sort_shop.innerHTML = gr ;


}

renderSort(sorting) ; 
let originalList = [];
let currentFilter = {
  sortItem: "",     
  sortName: "",     
  filterList: []
};

function renderProducts(productList, sortItem = "", sortName = "") {
  const products = document.querySelector(".main_shop--right-list-shop .row");
  products.innerHTML = ""; 

  let filterList = sortItem === "" ? productList : productList.filter(item => item[sortName] === sortItem);
  if (filterList.length == 0) {
      products.innerHTML = `<h2 class="not_product">Not Find Products :((</h2>`;
      return;
  }

  if (originalList.length === 0) {
    originalList = [...productList]; 
  }


  currentFilter = { sortItem, sortName, filterList };


  let fragment = document.createDocumentFragment();

  filterList.forEach((product) => {
      let starsHTML = "";
      for (let i = 0; i < product.stars; i++) {
          starsHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
                        </svg>`;
      }
      const productElement = document.createElement("div");
      productElement.classList.add("col-xl-4");
      productElement.innerHTML = `
              <div class="main_content--product-item">
                  <a class="main_content--product-figure" href="./product-details.html?id=${product.id}">
                      <img src="${product.img}" alt="${product.name}">
                  </a>
                  <div class="product-item_info">
                      <div class="product-item_rating">${starsHTML}</div>
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
                          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff">
                              <path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/>
                          </svg>
                      </button>
                  </div>
              </div>`;
      fragment.appendChild(productElement);
  });


  products.appendChild(fragment);
}


document.addEventListener("DOMContentLoaded", function () {
  let sort_btns = document.querySelectorAll(".main_shop--right-sortBtn > span");
  let text_Sort = document.querySelector(".text_Sorting");

  function handleSortClick(event) {
      event.stopPropagation();
      let span = event.target;

      if (span.textContent === "Default Sorting") {
          text_Sort.textContent = "Default Sorting";

          document.querySelectorAll('input[type="radio"]').forEach(checkbox => {
            checkbox.checked = false;
          });
        
          renderProducts(originalList);
      } 
      else if (span.textContent === "Sort By Price : Low to High") {
          text_Sort.textContent = "Sort By Price : Low to High";
          let sortedList = [...currentFilter.filterList].sort((a, b) => a.price - b.price);
          renderProducts(sortedList);
      } 
      else if (span.textContent === "Sort By Price : High to Low") {
          text_Sort.textContent = "Sort By Price : High to Low";
          let sortedList = [...currentFilter.filterList].sort((a, b) => b.price - a.price);
          renderProducts(sortedList);
      }
  }

  sort_btns.forEach(span => span.addEventListener("click", handleSortClick));


  let shopListCategory = document.querySelectorAll(".main_shop--list-category > .item_shop--group input");
  let shopSize = document.querySelectorAll(".main_shop--list-size > .item_shop--group input");
  let shopBrands = document.querySelectorAll(".main_shop--list-brands > .item_shop--group input");

  function handleFilterChange(event, filterName) {
      event.stopPropagation();
      const value = event.target.getAttribute("value");
      renderProducts(shopList, value, filterName);
  }

  shopListCategory.forEach(item => item.addEventListener("click", (event) => handleFilterChange(event, "category_shop")));
  shopSize.forEach(item => item.addEventListener("click", (event) => handleFilterChange(event, "size")));
  shopBrands.forEach(item => item.addEventListener("click", (event) => handleFilterChange(event, "brand")));
});

renderProducts(shopList) ; 



let mainSort = document.querySelector(".main_shop--right-sort");
let clicked = false ; 

mainSort.addEventListener("mouseover", () => {
  mainSort.style.backgroundColor = "rgb(245, 131, 34)";
  mainSort.style.color = "rgb(255, 255, 255)";
  mainSort.style.fill = "#fff";
});

mainSort.addEventListener("mouseout", () => {
  if (!clicked) { 
    mainSort.style.backgroundColor = "";
    mainSort.style.color = "";
    mainSort.style.fill = "";
  }
});

mainSort.addEventListener("click" , (e) => {
  clicked = true;
  if(!sort_shop.classList.contains("visibility")) {
    sort_shop.classList.add("visibility");
  }
  else {
    clicked = !clicked;
    sort_shop.classList.remove("visibility");
  }
})




function viewProduct(productId) {
  window.location.href = `./product-details.html?id=${productId}`; 
}