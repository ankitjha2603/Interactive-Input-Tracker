let obj = {};
let state = 0;
let specialSpecial = {
  " ": "Space",
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
};
//////////////////////////////////////
//SECTION init
var showPress = document.createElement("div");
showPress.className = "show-press";
showPress.style.cssText =
  "width: fit-content;max-width: 200px;overflow: hidden;padding: 10px 20px;font-weight: 800;font-size: 1em;font-family: cursive;position: fixed;bottom: 10px;color: white;background-color: black;z-index:10000000";
showPress.hidden = true;
document.querySelector("body").appendChild(showPress);
//////////////////////////////////////

//////////////////////////////////////
//SECTION function
const getChar = (key) => {
  if (specialSpecial[key] != undefined) return specialSpecial[key];
  return key;
};
const update = (i) => {
  console.log(i, obj);
  showPress.innerHTML = Object.keys(obj).join(" + ");
  console.log(showPress.innerHTML);

  setTimeout(() => {
    if (i === state) showPress.hidden = true;
  }, 2500);
};
//////////////////////////////////////

//////////////////////////////////////
//SECTION addEventListener
window.addEventListener("keydown", (e) => {
  obj[getChar(e.key)] = 1;
  showPress.hidden = false;
  state++;
  update(state);
});
window.addEventListener("keyup", (e) => {
  delete obj[getChar(e.key)];
});
const mouseClick = (name) => {
  showPress.hidden = false;
  obj[name] = 1;
  state++;
  update(state);
  console.log("do", state);
  delete obj[name];
};
document.addEventListener("contextmenu", () => mouseClick("RMB"));
document.addEventListener("click", () => mouseClick("LMB"));
//////////////////////////////////////
