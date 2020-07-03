import $ from "jquery";
import "./app4.css";

const $circle = $("#app4 > .circle");

$circle
  .on("mouseenter", () => {
    $circle.addClass("active"); //有这个类就删掉，没有就加上
  })
  .on("mouseleave", () => {
    $circle.removeClass("active");
  });
