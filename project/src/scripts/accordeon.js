
const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__desc");
    const textBlock = contentBlock.find(".team__desc-block");
    const reqHeight = textBlock.height();
    const arrow = container.find(".team__link");

    container.addClass("team__active");
    contentBlock.height(reqHeight);
    arrow.addClass("active");
};

const closeEveryItem = container => {
    const items = container.find(".team__desc");
    const itemContainer = container.find(".team__item");
    const arrow = container.find(".team__link");

    itemContainer.removeClass("team__active");
    items.height(0);
    arrow.removeClass("active");
};

$(".team__member").click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".team__list");
    const elemContainer = $this.closest(".team__item");

    if (elemContainer.hasClass("team__active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }
});
