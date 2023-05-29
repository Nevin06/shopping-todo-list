var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	// Bonus
	var deleteButton = document.createElement("button");
  	deleteButton.classList.add("deleteButton");
  	deleteButton.textContent = "Delete";
  	li.appendChild(deleteButton);

	ul.appendChild(li);
	input.value = "";

	// Bonus
	// Attach a click event listener to the new list item
  	li.addEventListener("click", function() {
    this.classList.toggle("done");
  	});
  	// Attach a click event listener to the new delete button
  	deleteButton.addEventListener("click", function(event) {
    event.stopPropagation();

    var listItem = this.parentNode; // Get the parent <li> element
    listItem.remove(); // Remove the list item from the DOM
  	});
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// Get all the list items
var listItems = document.querySelectorAll('li');

// Attach a click event listener to each list item
listItems.forEach(function(item) {
  item.addEventListener('click', function() {
    // Toggle the .done class on the clicked list item
    this.classList.toggle('done');
  });
});

// Get all the delete buttons
var deleteButtons = document.querySelectorAll('.deleteButton');

// Attach a click event listener to each delete button
deleteButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the list item

    var listItem = this.parentNode; // Get the parent <li> element
    listItem.remove(); // Remove the list item from the DOM
  });
});

