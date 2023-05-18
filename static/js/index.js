// 2page setting

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight * 0.95 || document.documentElement.clientHeight * 0.95) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight * 0.95 || document.documentElement.clientHeight * 0.95)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.75)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

//3page setting

const scrollElements3px = document.querySelectorAll(".js-scroll3p");

const elementInView3px = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight * 1.1  || document.documentElement.clientHeight * 1.1 ) / dividend
    );
};

const elementOutofView3px = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight * 1.1  || document.documentElement.clientHeight * 1.1 )
    );
};


const displayScrollElement3px = (element) => {
    element.classList.add("scrolled3p");
};

const hideScrollElement3px = (element) => {
    element.classList.remove("scrolled3p");
};

const handleScrollAnimation3px = () => {
    scrollElements3px.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement3px(el);
        } else if (elementOutofView(el)) {
            hideScrollElement3px(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
    handleScrollAnimation3px();
});
