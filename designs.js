//variables to get canvas element,height,width
const c = document.getElementById("pixel_canvas");
let heightIn = $("#height_input");
let widthIn = $("#width_input");

//An event listener that comes into action when Submit button is clicked .
$("#submit_input").click(function(e) {
	e.preventDefault();
	makeGrid();
});

let color = $("#colorPicker");

$("#submit_input").on("click", function() {
	var ele = document.getElementById("canavas");
	ele.scrollIntoView();
});

//To make the grid pattern makegrid is called whenever button is clicked.
function makeGrid() {
	c.innerHTML = "";
	let height = heightIn.val();
	let width = widthIn.val();

	//A function which fills color in the cell that was clicked and changes the color.
	let addEvent = function(cell) {
		cell.addEventListener("click", function() {
			function setRgb() {
				var red = document.querySelector(
					".rgb-picker .red-slider input"
				).value;
				var green = document.querySelector(
					".rgb-picker .green-slider input"
				).value;
				var blue = document.querySelector(
					".rgb-picker .blue-slider input"
				).value;
				var color = "rgb(" + red + "," + green + "," + blue + ")";
				document.querySelector(
					".rgb-picker .color-preview"
				).style.backgroundColor = color;
			}
			cell.style.backgroundColor = document.querySelector(
				".rgb-picker .color-preview"
			).style.backgroundColor;
		});
	};

	//An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
	for (let i = 0; i < height; i++) {
		let row = c.insertRow(i);
		for (let j = 0; j < width; j++) {
			let cell = row.insertCell(j);
			cell.addEventListener("click", addEvent(cell));
		}
	}
}

function setRgb() {
	var red = document.querySelector(".rgb-picker .red-slider input").value;
	var green = document.querySelector(".rgb-picker .green-slider input").value;
	var blue = document.querySelector(".rgb-picker .blue-slider input").value;
	var color = "rgb(" + red + "," + green + "," + blue + ")";
	document.querySelector(
		".rgb-picker .color-preview"
	).style.backgroundColor = color;
}
setRgb();
