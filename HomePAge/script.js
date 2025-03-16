const products = [{
        img: "../images/camera.png",
        numbering: "Product 1",
        grade: 5,
        name: "Camera"
    },
    {
        img: "../images/writer.png",
        numbering: "Product 2",
        grade: 5,
        name: "Type Writer"
    },
    {
        img: "../images/flashCamera.png",
        numbering: "Product 3",
        grade: 5,
        name: "Flash camera"
    },
    {
        img: "../images/writer.png",
        numbering: "Product 4",
        grade: 3,
        name: "Type Writer"
    },
    {
        img: "../images/camera.png",
        numbering: "Product 5",
        grade: 4,
        name: "Camera"
    },
    {
        img: "../images/flashCamera.png",
        numbering: "Product 6",
        grade: 5,
        name: "Flash camera"
    },
    {
        img: "../images/writer.png",
        numbering: "Product 7",
        grade: 3,
        name: "Type Writer"
    }
]

const reviews = [
    {
        name: "Jake Williams",
        img: "../images/client1.png",
        review: "Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore mag",
        grade: 5
    },
    {
        name: "Sofia Martinez",
        img: "../images/client2.png",
        review: "Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore mag",
        grade: 4
    },
    {
        name: "Liam Johnson",
        img: "../images/client3.png",
        review: "Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore mag",
        grade: 5
    },
    {
        name: "Olga Petrova",
        img: "../images/client4.png",
        review: "Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur eiusmod tempor incididunt ut labore et dolore mag",
        grade: 3
    },
    {
        name: "Kairat Nurtas",
        img: "../images/client5.png",
        review: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        grade: 5
    },
    {
        name: "Emily Chen",
        img: "../images/client6.png",
        review: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
        grade: 4
    },
    {
        name: "Akira Tanaka",
        img: "../images/client7.png",
        review: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.",
        grade: 5
    }
];

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.top <= window.innerHeight &&
        rect.right >= 0 &&
        rect.left <= window.innerWidth
    );
}

function animateScrollingElements() {
    const elements = document.querySelectorAll('.element-to-animate');
    elements.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.add('animated');
        }
    });
    const carWrap = document.querySelector('.carWrap');
        if (isElementInViewport(carWrap)) {
            carWrap.classList.add('carWrap-animated');
        }
}

document.addEventListener('DOMContentLoaded', ()=>{
    animateScrollingElements()
    showSection()
});
window.addEventListener('scroll', animateScrollingElements);

let width = 400
let count = 3
let block = document.querySelector(".featuredProducts__items_wrapper");
const gap = 90
let move = 0


for (let i = 0; i < products.length; i++) {
    let featuredProductsItem = document.createElement("div");
    featuredProductsItem.classList.add("featuredProducts__item");

    let imgWrapper = document.createElement("div");
    imgWrapper.classList.add("featuredProducts__item_imageWrapper");

    const img = document.createElement('img');
    img.classList.add("featuredProducts__item_image");
    img.src = products[i].img;
    img.alt = products[i].name;

    let blockBottom = document.createElement("div");
    blockBottom.classList.add("featuredProducts__item_bottom");

    let bottomFlexWrap = document.createElement("div");
    bottomFlexWrap.classList.add("featuredProducts__item_bottomFlexWrap");

    let numbering = document.createElement("span");
    numbering.classList.add("featuredProducts__item_numbering");
    numbering.textContent = products[i].numbering;

    let gradeWrap = document.createElement("div");
    gradeWrap.classList.add("featuredProducts__item_gradeWrap");

    getStarRating(products,"featuredProducts__item_gradeImg", gradeWrap, i)

    let productName = document.createElement("p");
    productName.classList.add("featuredProducts__item_name");
    productName.textContent = products[i].name;

    block.appendChild(featuredProductsItem);
    featuredProductsItem.appendChild(imgWrapper);
    imgWrapper.appendChild(img);

    featuredProductsItem.appendChild(blockBottom);
    blockBottom.appendChild(bottomFlexWrap);
    blockBottom.appendChild(productName);
    bottomFlexWrap.appendChild(numbering);
    bottomFlexWrap.appendChild(gradeWrap);
}

let reviewsBlockTitle = document.querySelector(".reviewsBlock__content_left_title")
let reviewsBlockText = document.querySelector(".reviewsBlock__content_left_text")


document.querySelector(".leftBtn").addEventListener('click', (event) => {
    event.preventDefault();
    move += ((width + gap) * count);
    move = Math.min(move, 0);
    block.style.marginLeft = move + 'px';
});

document.querySelector(".rightBtn").addEventListener('click', (event) => {
    event.preventDefault();
    move -= (width + gap) * count
    move = Math.max(move, -((width + gap) * (block.childElementCount - count)))
    block.style.marginLeft = move + 'px';
})

let reviewsTitle = document.querySelector(".reviewsBlock__content_left_title")
let reviewsText = document.querySelector(".reviewsBlock__content_left_text")
let reviewsImg = document.querySelector(".reviewsBlock__content_right_img")
let reviewsGrades = document.querySelector(".reviewsBlock__content_left_grades")

function showSection (){
    let i = 0
    reviewsTitle.innerHTML = reviews[i].name
    reviewsText.innerHTML = reviews[i].review
    reviewsImg.src = reviews[i].img
    getStarRating(reviews,"reviewsBlock__content_left_gradeImg",reviewsGrades,i)
}

function getStarRating(array, className, parent, i) {
    for (let gradeI = 0; gradeI < array[i].grade; gradeI++) {
        let gradeImg = document.createElement('img');
        gradeImg.classList.add(className);
        gradeImg.src = "../images/star.svg";
        gradeImg.alt = "Star";
        parent.appendChild(gradeImg);
    }
}
















// function getAverageColor(imgElement) {
//     let canvas = document.createElement("canvas");
//     let context = canvas.getContext("2d");

//     canvas.width = imgElement.naturalWidth;
//     canvas.height = imgElement.naturalHeight;
//     context.drawImage(imgElement, 0, 0, canvas.width, canvas.height);

//     let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
//     let r = 0, g = 0, b = 0, count = 0;

//     for (let i = 0; i < imageData.length; i += 4) {
//         let alpha = imageData[i + 3]; // Альфа-канал (прозрачность)
//         if (alpha > 0) { // Учитываем только непрозрачные пиксели
//             r += imageData[i];
//             g += imageData[i + 1];
//             b += imageData[i + 2];
//             count++;
//         }
//     }

//     r = Math.floor(r / count);
//     g = Math.floor(g / count);
//     b = Math.floor(b / count);

//     return `rgb(${r}, ${g}, ${b})`;
// }

// document.querySelectorAll(".featuredProducts__item_image").forEach(img => {
//     img.onload = function () {
//         let avgColor = getAverageColor(img);
//         img.parentElement.style.backgroundColor = avgColor; // Применяем цвет к обертке
//     };
// });