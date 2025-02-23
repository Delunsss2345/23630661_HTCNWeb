const blogList = [
    {
      id: 1,
      title: "How to Choose the Right Bully Stick for Your Dog",
      subtitle: "Why Pets Are the Best Companions for Kids",
      shortDescription:
        "Discover the amazing benefits of having pets in a family with kids.",
      mainDescription:
        "Raising dogs and cats not only teaches children to love animals but also enhances their mental and physical health...",
      image: "./assets/img/blog/chotrang.jpg",
      quote:
        "A pet is the only thing on earth that loves you more than it loves itself.",
      tags: ["Education"],
      createdDate: "January 13, 2025",
    },
    {
      id: 2,
      title: "Top 5 Healthy Treats for Your Dog",
      subtitle: "Nutritious and Easy-to-Make Meals for Your Furry Friend",
      shortDescription:
        "Learn how to prepare nutritious meals for your furry friends at home.",
      mainDescription:
        "Providing homemade food ensures your pet gets the best nutrients without harmful additives...",
      image: "./assets/img/blog/chocute.jpg",
      quote: "Let food be thy medicine and medicine be thy food.",
      tags: ["Head Food"],
      createdDate: "January 13, 2025",
    },
    {
      id: 3,
      title: "Best Chew Toys to Keep Your Dog Entertained",
      subtitle: "Tips for Busy Pet Owners to Manage Their Time",
      shortDescription:
        "Managing a busy life while giving your pets the love and care they need.",
      mainDescription:
        "Learn how to create a perfect balance between work and pet responsibilities...",
      image: "./assets/img/blog/chomatxe.jpg",
      quote: "Time spent with pets is never wasted.",
      tags: ["LifeStyles"],
      createdDate: "January 13, 2025",
    },
    {
      id: 4,
      title: "Essential Nutrients for a Healthy Pet Diet",
      subtitle: "The Key to Your Pet’s Long-Term Health",
      shortDescription:
        "Understand the key nutrients your pet needs for a balanced diet.",
      mainDescription:
        "A well-balanced diet is crucial for your pet’s health...",
      image: "./assets/img/blog/blog_4.png",
      quote: "You are what you eat, and so is your pet.",
      tags: ["Head Food"],
      createdDate: "January 13, 2025",
    },
    {
      id: 5,
      title: "Top 10 Tricks to Train Your Pet Effectively",
      subtitle: "Fun and Easy Training Techniques for Pets",
      shortDescription:
        "Simple yet effective tricks to train your pet in no time.",
      mainDescription: "Training your pet can be fun and rewarding...",
      image: "./assets/img/blog/blog_5.png",
      tags: ["Pet Tips"],
      createdDate: "January 13, 2025",
    },
    {
      id: 6,
      title: "How to Choose the Right Pet for Your Family",
      subtitle: "Finding a Pet That Matches Your Lifestyle",
      shortDescription:
        "Choosing the right pet is crucial for a happy and harmonious home.",
      mainDescription:
        "Different pets have different needs. Learn what factors to consider...",
      image: "./assets/img/blog/blog-6.jpg",
      tags: ["Education"],
      createdDate: "January 13, 2025",
    },
    {
      id: 7,
      title: "DIY Pet Toys: Fun and Affordable",
      subtitle: "Creative Toys You Can Make at Home",
      shortDescription:
        "Save money and keep your pets entertained with homemade toys.",
      mainDescription:
        "You don’t need expensive toys to make your pet happy...",
      image: "./assets/img/blog/blog-7.jpg",
      tags: ["Tip & Tricks"],
      createdDate: "January 13, 2025",
    },
    {
      id: 8,
      title: "The Science Behind Pet Emotions",
      subtitle: "Understanding How Your Pet Feels",
      shortDescription:
        "Pets have feelings too. Learn to recognize their emotions.",
      mainDescription:
        "Dogs, cats, and other pets communicate emotions in unique ways...",
      image: "./assets/img/blog/blog_8.png",
      tags: ["Education", "Pet Tips"],
      createdDate: "January 13, 2025",
    },
];


  
console.log("data") ; 
const listBlogsMain = document.querySelector("#main_blog--right");
const renderBlogMain = (blogList) => {
const getCategory = new URLSearchParams(window.location.search) ; 
console.log(getCategory.get("categories")) ;

  listBlogsMain.innerHTML = '';
  let blogDatas = "";

  blogList.forEach((data) => {
    let tagNameGr = '';
    tagNameGr += 
      data.tags.map(item => `<p class="blog-tagName">${item}</p>`).join('');

    if(!getCategory.get("categories")) {
        blogDatas += ` 
        <div class="blog_item--main">
            <figure>
                <img src="${data.image}" alt="${data.title}">
  
                <div class="blog--extra_tagName">
                  ${tagNameGr}
                </div>
  
            </figure>
            <span>${data.createdDate}</span>
  
            <h2>${data.title}</h2>
  
            <p>${data.shortDescription}</p>
  
           <button onClick="window.location.href='blog_details.html?id=${data.id}'">
                  <span>Read more</span>
            </button>
  
        </div>
        `; 
    }  
    else {
        if(data.tags.includes(getCategory.get("categories"))) {
            blogDatas += ` 
            <div class="blog_item--main">
                <figure>
                    <img src="${data.image}" alt="${data.title}">
      
                    <div class="blog--extra_tagName">
                      ${tagNameGr}
                    </div>
      
                </figure>
                <span>${data.createdDate}</span>
      
                <h2>${data.title}</h2>
      
                <p>${data.shortDescription}</p>
      
               <button onClick="window.location.href='blog_details.html?id=${data.id}'">
                      <span>Read more</span>
                </button>
      
            </div>
            `; 
        }
    }
  });
  console.log(listBlogsMain) ; 
  listBlogsMain.innerHTML = blogDatas; 
};

renderBlogMain(blogList);








