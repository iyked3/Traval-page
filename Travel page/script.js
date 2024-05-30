const slidImgs = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.png", "img5.jpg", "img6.jpg"];
let slidImage = document.querySelector('.background-image');
let slidGrids = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(() => {
    changeSliderImage();
}, 5000);

const changeSliderImage = () => {
    slidGrids.map((gridItem, index) => {
        setTimeout(() => {
            gridItem.classList.remove('hide');

            setTimeout(() => {

                if(index == slidGrids.length - 1){
                    if(currentImage >= slidImgs.length - 1){
                        currentImage = 0;
                    } else{
                        currentImage++;
                    }

                    slidImage.src = `img/${slidImgs[currentImage]}`;

                    slidGrids.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add('hide')
                        }, i * 100);
                    })

                }

            }, 100);

        }, index * 100);
    })
}

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 188){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg')
    }
})              