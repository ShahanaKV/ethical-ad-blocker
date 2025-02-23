console.log("Content script loaded!");

document.addEventListener("DOMContentLoaded", function () {
  let message = document.createElement("div");
  message.innerText = "This site may be tracking you! Stay safe.";
  message.style.position = "fixed";
  message.style.bottom = "10px";
  message.style.right = "10px";
  message.style.backgroundColor = "red";
  message.style.color = "white";
  message.style.padding = "10px";
  message.style.borderRadius = "5px";
  document.body.appendChild(message);

  setTimeout(() => message.remove(), 5000);
});
