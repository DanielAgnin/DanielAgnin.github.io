
const findBlockByAlias = (alias) => {
    return $(".reviews-display__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    });
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-id");
    //const itemToShow = findBlockByAlias(target);

    const allSlides = $(".reviews-display__item");

    Array.from(allSlides).forEach(slide => slide.classList.remove("active"));
    allSlides[target].classList.add("active");

    const currentItem = $this.closest(".rewiews-switcher__item");
    //itemToShow.addClass("active").siblings().removeClass("active");
    currentItem.addClass("active").siblings().removeClass("active");
});
