document.querySelectorAll(".pdp-product-extra-info-container").forEach(element => {
    if(element.querySelector('.pdp-text-content').clientHeight > 200) {
       console.log("height", element.querySelector('.pdp-text-content').clientHeight);
       element.querySelector('.pdp-product-extra-info-main').classList.remove("over-content");
       element.querySelector(".btn-read-more").classList.remove("disabled");
    }else {
        element.classList.remove("over-content");
    }

    element.querySelector('.btn-read-more').addEventListener('click', function(event) {
        event.preventDefault();
        this.classList.add('disabled');
        element.classList.add("side-hidden");
        element.querySelector('.pdp-product-extra-info-main').style.maxHeight = (element.querySelector('.pdp-text-content').clientHeight + 60) + "px";
    });

    document.addEventListener('resize', function () {
        console.log(element.querySelector('.btn-read-more').classList.contains('disabled'));
        if (!element.querySelector('.btn-read-more').classList.contains('disabled')){
            if(element.querySelector('.pdp-text-content').clientHeight <= 200){
                element.querySelector('.btn-read-more').classList.add('disabled');
            }else {
                element.querySelector('.btn-read-more').classList.remove('disabled');
            }
        }
    });
})