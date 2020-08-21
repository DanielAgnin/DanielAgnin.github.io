
const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__desc");
    const textBlock = contentBlock.find(".team__desc-block");
    const reqHeight = textBlock.height();

    container.addClass("team__active");
    contentBlock.height(reqHeight);
};

const closeEveryItem = container => {
    const items = container.find(".team__desc");
    const itemContainer = container.find(".team__item");

    itemContainer.removeClass("team__active");
    items.height(0);
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