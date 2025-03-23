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
  

const dataBlogs = [
    {
      id: 1,
      title: "How to Choose the Right Bully Stick for Your Dog",
      creator: "John Doe",
      date: "02-05-2025",
      desc: "Choosing the right bully stick for your dog depends on factors like size, chewing habits, and ingredients. This guide will help you make the best choice.",
      img: "./assets/img/blog/chotrang.jpg"
    },
    {
      id: 2,
      title: "Top 5 Healthy Treats for Your Dog",
      creator: "Emma Smith",
      date: "01-30-2025",
      desc: "Looking for healthy treats for your furry friend? Here are five nutritious and delicious treats your dog will love!",
      img: "./assets/img/blog/chocute.jpg"
    },
    {
      id: 3,
      title: "Best Chew Toys to Keep Your Dog Entertained",
      creator: "Michael Brown",
      date: "01-25-2025",
      desc: "Dogs love to chew! Find out which chew toys are safest and most engaging for your pup.",
     img: "./assets/img/blog/chomatxe.jpg"
    }
  ];
  


const renderBlog = (datas) => {
  const blogContainer = document.querySelector("#main_content--blog-list .row") ; 
 
  let blogData = "" ;
  datas.forEach((data) => {
      blogData += ` 
         <div class="col-xl-4">
                  <div class="main_content--blog-item">
                    <a href="./blog_details.html?id=${data.id}">
                      <img
                        src="${data.img}"
                        alt="blog-img"
                      />
                    </a>

                    <div class="main_content--blog-item-info">
                      <div class="user_upload">
                        <div class="creator">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                            <path
                              d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"
                            />
                          </svg>
                          <span>By ${data.creator}</span>
                        </div>
                        <div class="calendar">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                            <path
                              d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L64 64C28.7 64 0 92.7 0 128l0 16 0 48L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-256 0-48 0-16c0-35.3-28.7-64-64-64l-40 0 0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40L152 64l0-40zM48 192l352 0 0 256c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256z"
                            />
                          </svg>
                          <span>June 3</span>
                        </div>
                      </div>

                      <h2 class="sora-bold">
                          ${data.title}
                      </h2>
                      <p>
                          ${data.desc}
                      </p>
                    </div>
                  </div>
                </div>
      `;
  }) ;
  blogContainer.innerHTML = blogData ; 
}

renderBlog(dataBlogs) ; 




