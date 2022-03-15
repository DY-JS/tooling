import _ from "lodash";
import hello from "./hello";

function test() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Hello", "Jedis"], " ");
  return element;
}

document.body.appendChild(test());
hello();
