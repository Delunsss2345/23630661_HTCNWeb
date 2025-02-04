// const listBanner = document.querySelector('.main_content--list_banner') ; 
// const banners = document.querySelectorAll('.main_content--banner');
// const listChoice = document.querySelector('.list__banner--show') ;
// const choices = document.querySelectorAll('.list__banner--show ul li');

// console.log(choices);
// let i = 0; 
// const lengthBanner = banners.length; 

// // setInterval(() => {
// //     i++; 
// //     if (i === lengthBanner) { 
// //         i = 0; 
// //     }
// //     const width = banners[0].offsetWidth;
// //     listBanner.style.transform = `translateX(${-width * i}px)`; 
// //     listBanner.style.transition = 'transform 0.5s ease-in-out'; 
// //     // choices[i].classList.add('active');
// // }, 1000);
const listBtn = document.querySelectorAll('.deal-item-desc') ; 
console.log() ; 


const clickButton = (btn) => {
    const deals = document.querySelectorAll('.main_content--todays-deal-list') ; 
    for(let i = 0 ; i < listBtn.length ; i++) {
        listBtn[i].classList.remove('click-deal-desc'); 
    }
    
    if(!listBtn[btn - 1].classList.contains('click-deal-desc')) {
        listBtn[btn -1].classList.add('click-deal-desc'); 
        deals[btn - 1].classList.remove('display_none');
    } 


    for(let i = 0 ; i < listBtn.length ; i++) {
        if(i != (btn - 1) && !deals[i].classList.contains('display_none')) {
            deals[i].classList.add('display_none') ; 
        }
    }
}

const dealItems = [
     // Latest Product
     {
        id: 10,
        category: "Latest Product",
        name: "Spot Holiday Gingerbread Catnip",
        price: "470.79",
        image: "./assets/img/SpotHolidayGingerbreadCatnip.jpg",
      },
      {
        id: 11,
        category: "Latest Product",
        name: "Spot Holiday Summer Catnip Toys",
        price: "345.99",
        image: "./assets/img/SpotHolidaySummerCatnipToys.jpg",
      },
      {
        id: 12,
        category: "Latest Product",
        name: "Kaytee Iglgoo Giant Hideout For Small Animals",
        price: "435.21",
        image: "./assets/img/pro-8-600x720.jpg",
      },
      {
        id: 13,
        category: "Latest Product",
        name: "Natural Balance Limited Ingredient Grain Free Sweet",
        price: "158.59",
        image: "./assets/img/pro-30-600x720.jpg",
      },

      // Top Rating
      {
        id: 14,
        category: "Top Rating",
        name: "Supper Fruit Cocktail Bird Treat Flavor Treat",
        price: "472.60",
        image: "./assets/img/pro-31-2-600x720.jpg",
      },
      {
        id: 15,
        category: "Top Rating",
        name: "Messy Mutts Pet Hair & Lint Rollers Travel Size",
        price: "298.92",
        image: "./assets/img/pro-35-600x720.jpg",
      },
      {
        id: 16,
        category: "Top Rating",
        name: "Tetra Whisper Bio Bag Disposable Filter Cartridges",
        price: "380.88",
        image: "./assets/img/pro-38-600x720.jpg",
      },
      {
        id: 17,
        category: "Top Rating",
        name: "Exotic Environment Sunken Orb Floral Aquarium Ornament",
        price: "435.78",
        image: "./assets/img/pro-18-1-600x720.jpg",
      },

      // Best Seller
      {
        id: 18,
        category: "Best Seller",
        name: "Zunkel Schawarz Hill'S Science Diet Adult Perfect Digestion",
        price: "481.80",
        image: "./assets/img/pro-24-600x720.jpg",
      },
      {
        id: 19,
        category: "Best Seller",
        name: "Earth Animal No Hide Rawhide Alternative Dog Treat Chew",
        price: "374.99",
        image: "./assets/img/pro-28-600x720.jpg",
      },
      {
        id: 20,
        category: "Best Seller",
        name: "Natural Balance Limited Ingredient Grain Free Sweet",
        price: "107.61",
        image: "./assets/img/pro-13-1-600x720.jpg",
      },
      {
        id: 21,
        category: "Best Seller",
        name: "American Cat Club Buffalo Plaid Holiday Cat Scratchers",
        price: "244.35",
        image: "./assets/img/pro-14-1-600x720.jpg",
      },

      // Featured Products
      {
        id: 22,
        category: "Featured Products",
        name: "A&E Cage Happy Beaks Ball Thing Bird Toy",
        price: "429.19",
        image: "./assets/img/pro-2-600x720.jpg",
      },
      {
        id: 23,
        category: "Featured Products",
        name: "Brown'S Encore Farm Fresh Fixins Flaked Cereal Treat",
        price: "227.05",
        image: "./assets/img/product-600x720.jpg",
      },
      {
        id: 24,
        category: "Featured Products",
        name: "Maplestick Chew Toy Durable Dog Chew Toy Bacon",
        price: "395.99",
        image: "./assets/img/pro-34-600x720.jpg",
      },
      {
        id: 25,
        category: "Featured Products",
        name: "Zoo Med Front Opening Terrarium Reptile Enclosure",
        price: "332.62",
        image: "./assets/img/pro-22-600x720.jpg",
      },

      // All Items
      {
        id: 26,
        category: "All Items",
        name: "Tetrapro Tropical Crisps Animal Food",
        price: "199.99",
        image: "./assets/img/smart_dish.jpg",
      },
      {
        id: 27,
        category: "All Items",
        name: "Dried Soldierworms 2.2 Oz Reptile Food",
        price: "299.49",
        image: "./assets/img/pro-13-1-600x720.jpg",
      },
      {
        id: 28,
        category: "All Items",
        name: "Maplestick Chew Toy Durable Dog Chew Toy Bacon",
        price: "359.99",
        image: "./assets/img/pro-34-600x720.jpg",
      },
      {
        id: 29,
        category: "All Items",
        name: "American Cat Club Buffalo Plaid Holiday Cat Scratchers",
        price: "489.00",
        image: "./assets/img/pro-14-1-600x720.jpg",
      }
];



document.addEventListener("DOMContentLoaded", function () {
    const categoryMap = {
      "Latest Product": "latest_product",
      "Top Rating": "top_rating",
      "Best Seller": "best_seller",
      "Featured Products": "feature_products",
      "All Items" : "all_items"
    };
  
    dealItems.forEach(item => {
      
      const parentClass = categoryMap[item.category];
      if (!parentClass) return; 
  
     
      const rowElement = document.querySelector(`.${parentClass} .row`);
      if (!rowElement) return; 
  
      let starsHTML = "";
      for (let i = 0; i < item.stars; i++) {
          starsHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="gold">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14l-5-4.87 6.91-1.01z"/>
                        </svg>`;
      }
      const productHTML = `
      <div class="col-xl-3">
       <div class="main_content--product-item deals-group-child">
           <a class="main_content--product-figure" href="./product-details.html?id=${item.id}">
               <img src="${item.image}" alt="${item.name}">
           </a>
           <div class="product-item_info">
             

               <div class="product-item_name">
                    <p class="sora-normal">${item.name}</p>
               </div>
                <div class="product-item_price sora-bold-x2">
                   <span>${item.price.toLocaleString()} vnd</span>
               </div>
           </div>
   
           <div class="product-item_btn-group">
               <button onClick="viewProduct(${item.id})" class="product-item_btn">
                   <span class="sora-bold">View product</span>
                   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/></svg>
               </button>
           </div>
       </div>
     </div>
   `;
  
      rowElement.innerHTML += productHTML;
    });
  });
  


