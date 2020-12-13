// Select color input
const colorPicker = document.getElementById('colorPicker');
// Select size input
const rowsNum = document.getElementById('inputHeight');
const cellsNum = document.getElementById('inputWidth');
const myForm = document.getElementById('sizePicker');
const pixCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
myForm.addEventListener('submit',function(event){
	pixCanvas.innerHTML = '';
event.preventDefault();
 makeGrid();
});

pixCanvas.addEventListener('click', function(event){
	if(event.target.nodeName === 'TD'){
		event.target.style.backgroundColor = colorPicker.value;
	}
});
function makeGrid() {
  for(let i = 0; i < rowsNum.value; i++){
    const myRow =  pixCanvas.insertRow(0);
    for(let c = 0; c< cellsNum.value; c++){
    	myRow.insertCell(0);
    }
  
  };
}
