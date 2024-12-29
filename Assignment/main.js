
const initSlider = () => {
    const imageList = document.querySelector(".slide-wrapper .image-box");
    const slideButton = document.querySelectorAll(".slide-wrapper .slide-button");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


    slideButton.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
        });
    });
    const handleSlideButton = () => {
        slideButton[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButton[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

    imageList.addEventListener("scroll", () =>{
        handleSlideButton();
    });
}
window.addEventListener("load", initSlider);