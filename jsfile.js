function showChanges(total){
	console.log(total);
	document.getElementById("answer").innerHTML = total;

}


	
function kalkulasi(){
	
	var nilai1 = Number(document.querySelector("#nilai1").value);
	var nilai2 = Number(document.querySelector("#nilai2").value);
	var select = document.getElementById("operator");
	var value = select.options[select.selectedIndex].value;
	var total;
	if(value=="add"){
		total = nilai1 + nilai2
	} else if(value=="substract"){
		total = nilai1 - nilai2
	} else if(value=="divide"){
		total = nilai1 / nilai2
	} else if(value=="multiply"){
		total = nilai1 * nilai2
	}

	showChanges(total);

}