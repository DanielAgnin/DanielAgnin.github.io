
const measureWidth = (item) => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".bars-menu__list");
    const titlesBlocks = container.find(".bars-menu__title");
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find(".bars-menu__text");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 500;
    };

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    };
};

const closeEveryItemInContainer = (container) => {
    const items = container.find(".bars-menu__item");
    const content = container.find(".bars-menu__text-block");

    items.removeClass("active");
    content.width(0);
};

const openAccordeon = (item) => {
    const hiddenContent = item.find(".bars-menu__text-block");
    const reqWidth = measureWidth(item);
    const textBlock = item.find(".bars-menu__text");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);
};

$(".bars-menu__title").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const item = $this.closest(".bars-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".bars-menu__list");

    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container);
        openAccordeon(item);
    };
});