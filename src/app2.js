import $ from "jquery";
import "./app2.css";

const $tabBar = $("#app2 > .tab-bar");
const $tabContent = $("#app2 > .tab-content");

$tabBar.on("click", "li", (e) => {
  const $li = $(e.currentTarget); //e.currentTarget字符串
  $li.addClass("selected").siblings().removeClass("selected");
  const index = $li.index(); //查看在父元素中排老几
  $tabContent
    .children()
    .eq(index)
    .addClass("active")
    .siblings()
    .removeClass("active"); //eq就是选择第几个
});
