 let card =   [
    {
    id: 4,
    title: "newTitle",
    price: 205,
    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    image_url: "https://live.staticflickr.com/3299/3265902775_15a1780c55_b.jpg"
    },
    {
    id: 7,
    title: "Ergonomic Wooden Tuna",
    price: 743,
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    image_url: "https://storage.needpix.com/rsynced_images/dark-2590141_1280.jpg"
    },
    {
    id: 9,
    title: "Electronic Bronze Chips",
    price: 808,
    description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    image_url: "https://storage.needpix.com/thumbs/lake-with-stars.jpg"
    },
    {
    id: 11,
    title: "Awesome Bronze Car",
    price: 382,
    description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    image_url: "https://static2.bigstockphoto.com/1/7/2/large1500/271571464.jpg"
    },
    {
    id: 12,
    title: "Recycled Rubber Cheese",
    price: 30,
    description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    image_url: "https://storage.needpix.com/rsynced_images/dark-2590141_1280.jpg"
    },
]


// console.log(card);


// const card1 = {
//    id : 1,
//    title:"newTitle",
//    price: 205,
//    description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
//    image_url: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
// }

//  const card2 ={
//     id: 7,
//     title: "Ergonomic Wooden Tuna",
//     price: 743,
//     description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
//     image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZIG7rVkxZNSk9ahTmjKCe1jfRPqRS0NyFtQy8BoLjw&s"
// }

// const card3 = {
//         id: 9,
//         title: "Electronic Bronze Chips",
//         price: 808,
//         description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
//         image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ilaBr4ZWR2xfry0d6qS0f0mLlQOjS_6GCZ04Rw3juwNpp9dZ8bwZblfWDfqCL1gFf7I&usqp=CAU"
// }

// const card4 = {
//     id: 11,
//     title: "Awesome Bronze Car",
//     price: 382,
//     description: "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
//     image_url: "https://img.freepik.com/premium-vector/landscape-sunset-vector-illustration_602454-1908.jpg"
//     }


// const card5 = {
//     id: 12,
//     title: "Recycled Rubber Cheese",
//     price: 30,
//     description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
//     image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAEvr-_mSmMRg-iJOSkPBsJr_dX_5HMBoUzZO7V0MYvr67WLPVR4a9k_3kobpgL5l9uFA&usqp=CAU"
//     }
     


   


    const html = document.getElementById("main")
    

 card.forEach((student)=>{

      const {
        id:id_card,
        title:title_card,
        price:price_card,
        description:description_card,
        image_url:image_url_card,
      } = student
         
        html.innerHTML += `<div class="card d-inline-block " style="width: 17rem;">
        <img src="${image_url_card}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${id_card}</h5>
          <h5 class="card-title">${title_card}</h5>
          <h5 class="card-title">${price_card}</h5>
          <p class="card-text">${description_card}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
           
    })