

var checklist = document.getElementById("Checklist");

var items = checklist.querySelectorAll("li");
var input = checklist.querySelectorAll("input");



for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("click", editItem);
    input[i].addEventListener("blur", updateInput);
    input[i].addEventListener("keypress", keyoressEnter);

}

function editItem() {
    this.className = "edit";
    var input = this.querySelector('input');
    console.log(input.value);
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateInput() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}
function keyoressEnter(event) {
    if (event.which === 13) {
        updateInput.call(this);
    }
}


