import { generate } from '../verse-generator/src/generate.ts';

function handleClick() {
  const output = document.getElementById("output");
  if (output) output.textContent = "Button was clicked!";
}   

const button = document.getElementById("myButton");
if (button) button.addEventListener("click", handleClick);
