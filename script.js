
const data = {
    lifestyleshoes: [
        {
            id: "shoe1",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan1.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i><br><br><br>`,
            price: "₹159.00"
        },
        {
            id: "shoe2",
            name: `Air Jordan <br> Legacy 312 Low`  ,
            image: "./imgnew/jordan2.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "₹159.00"
        },
        {
            id: "shoe3",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan3.jpeg",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "₹159.00"
        },
        {
            id: "shoe4",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan4.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe5",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan5.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe6",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan6.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe7",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan7.jpeg",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe8",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan8.jpeg",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe9",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan9.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe10",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan10.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe11",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan11.jpeg",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe12",
            name: "Nike Air Max 270 React",
            image: "./imgnew/jordan12.jpeg",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>`,
            price: "$159.00"
        }
        
    ],
    runnigshoes: [
        {
            id: "shoe1",
            name: "Nike Air Max 270 React",
            image: "./image/shoes4.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe2",
            name: "Nike Air Max 270 React",
            image: "./image/shoes5.png",
            rating:``,
            price: "$159.00"
        }
        // Add more shoe objects as needed
    ],
    comicshoes: [
        {
            id: "shoe1",
            name: "Nike Air Max 270 React",
            image: "./image/shoes6.png",
            rating:` <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star-half-stroke"></i>`,
            price: "$159.00"
        },
        {
            id: "shoe2",
            name: "Nike Air Max 270 React",
            image: "./image/shoes7.png",
            rating:``,
            price: "$159.00"
        }
        // Add more shoe objects as needed
    ]
};

var cartItems = [];

function lifestyleShoeData() {
    const container = document.querySelector(".box");

    data.lifestyleshoes.forEach((shoe) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        const shoeImage = document.createElement("img");
        shoeImage.setAttribute("src", shoe.image);
        shoeImage.setAttribute("alt", shoe.name);
        imageDiv.appendChild(shoeImage);

        const productTextDiv = document.createElement("div");
        productTextDiv.classList.add("products_text");
        const shoeName = document.createElement("h2");
        shoeName.innerHTML = shoe.name;
        const shoePrice = document.createElement("h3");
        shoePrice.textContent = shoe.price;

        const productsStarDiv = document.createElement("div");
        productsStarDiv.classList.add("products_star");
        productsStarDiv.innerHTML = shoe.rating;
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add To Cart";
        addToCartButton.classList.add("btn", "add-to-cart");
        addToCartButton.addEventListener("click", () => {
            addToCart(shoe);
        });

        // Append elements to card
        productTextDiv.appendChild(shoeName);
        productTextDiv.appendChild(shoePrice);
        productTextDiv.appendChild(productsStarDiv);
        productTextDiv.appendChild(addToCartButton);
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(productTextDiv);

        container.appendChild(cardDiv);
    });
}

function addToCart(item) {
    const storedCartItems = localStorage.getItem('cartItems');
    cartItems = JSON.parse(storedCartItems);
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function runningShoeData() {
    const container = document.getElementById("box2");

    data.runnigshoes.forEach((shoe) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        const shoeImage = document.createElement("img");
        shoeImage.setAttribute("src", shoe.image);
        shoeImage.setAttribute("alt", shoe.name);
        imageDiv.appendChild(shoeImage);

        const productTextDiv = document.createElement("div");
        productTextDiv.classList.add("products_text");
        const shoeName = document.createElement("h2");
        shoeName.textContent = shoe.name;
        const shoePrice = document.createElement("h3");
        shoePrice.textContent = shoe.price;

        const productsStarDiv = document.createElement("div");
        productsStarDiv.classList.add("products_star");
        productsStarDiv.innerHTML = shoe.rating;
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add To Cart";
        addToCartButton.classList.add("btn", "add-to-cart");

        // Append elements to card
        productTextDiv.appendChild(shoeName);
        productTextDiv.appendChild(shoePrice);
        productTextDiv.appendChild(productsStarDiv);
        productTextDiv.appendChild(addToCartButton);
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(productTextDiv);

        // Append card to container
        container.appendChild(cardDiv);
    });
}

function comicShoesData() {
    const container = document.getElementById("box3");

    data.runnigshoes.forEach((shoe) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("image");
        const shoeImage = document.createElement("img");
        shoeImage.setAttribute("src", shoe.image);
        shoeImage.setAttribute("alt", shoe.name);
        imageDiv.appendChild(shoeImage);

        const productTextDiv = document.createElement("div");
        productTextDiv.classList.add("products_text");
        const shoeName = document.createElement("h2");
        shoeName.textContent = shoe.name;
        const shoePrice = document.createElement("h3");
        shoePrice.textContent = shoe.price;

        const productsStarDiv = document.createElement("div");
        productsStarDiv.classList.add("products_star");
        productsStarDiv.innerHTML = shoe.rating;
        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add To Cart";
        addToCartButton.classList.add("btn", "add-to-cart");

        // Append elements to card
        productTextDiv.appendChild(shoeName);
        productTextDiv.appendChild(shoePrice);
        productTextDiv.appendChild(productsStarDiv);
        productTextDiv.appendChild(addToCartButton);
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(productTextDiv);

        // Append card to container
        container.appendChild(cardDiv);
    });
}



function insertShoeData(){
    lifestyleShoeData();
    runningShoeData();
    comicShoesData();
}
// Call the function when the page loads
window.addEventListener("load", insertShoeData);