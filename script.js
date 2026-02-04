const params = new URLSearchParams(window.location.search);
const to = params.get("to") || "You";

document.getElementById("text").innerText =
`${to}, will you be my valentine?`;

const no = document.getElementById("no");

no.addEventListener("mouseover", () => {
no.style.left = Math.random()*80 + "%";
no.style.top = Math.random()*80 + "%";
});
