import { Client } from "./client.js";
import { SecondButton } from "./client.js";
let button = document.getElementById("id_1");
button.addEventListener("click", function () {
  let p = new Client();
  const a = p.promiseFetch;
  console.log(a);
  let div = document.getElementById("form-id");
  let d = document.createElement("div");
  d.id = "div-id";
  d.textContent = "success";
  div.appendChild(d);
  let cancel = document.createElement("button");
  cancel.type = "button";
  cancel.textContent = "Cancel";
  cancel.id = "cancel-id";
  div.appendChild(cancel);
});
let feedback_btn = document.getElementById("id_2");

feedback_btn.addEventListener("click", function () {
  let q = new SecondButton();
  const b = q.secondPromiseFetch;
  console.log(b);
  let div = document.getElementById("form-id");
  let form = document.createElement("form");
  form.id = "form";
  let textArea = document.createElement("textarea");
  textArea.rows = "4";
  textArea.cols = "50";
  textArea.placeholder = "Enter your feedback";

  let submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Submit";
  submit.id = "submit-id";
  form.appendChild(textArea);
  form.appendChild(submit);

  div.appendChild(form);
});
