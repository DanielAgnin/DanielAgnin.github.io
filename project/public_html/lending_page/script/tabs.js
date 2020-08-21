
const findBlockByAlias = (alias) => {
    return $(".reviews-display__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;
    });
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const currentItem = $this.closest(".rewiews-switcher__item");

    itemToShow.addClass("active").siblings().removeClass("active");
    currentItem.addClass("active").siblings().removeClass("active");
});
