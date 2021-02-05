var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function switchToggle(element){
	element.target.classList.toggle("done");
}

function refreshList(){
	liArray = document.querySelectorAll("li");
	liArray.forEach(element => {
		element.addEventListener("click", switchToggle)
	});
	var images = document.querySelectorAll("img");
	images.forEach(element => {
		element.addEventListener("click", deleteElement);
	});
}
refreshList();

function deleteElement(element){
	element.target.parentElement.style.display = "none";
}

function createListElement() {
	var li = document.createElement("li");
	var img = document.createElement("img");
	li.appendChild(document.createTextNode(input.value));
	img.setAttribute("src", "x.png");
	ul.appendChild(li);
	li.appendChild(img);
	console.log(img);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		refreshList();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
		refreshList();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);