
// var x = function(num1,num2){
// 	console.log(num1+num2);
// }
//  x(1,2);

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



// function authenticateLogin(){
// 	var username = document.querySelector('.username');
// 	console.log(username.value);
// 	if (username.value == "angelica"){
// 		var pass = document.querySelector('.pass');
// 		console.log(pass.value);
// 		if(pass.value == "anjing123"){
// 			alert("anda berhasil masuk");
// 		} else {
// 			alert("password salah");
// 		}
// 	} else {
// 		alert("username tidak ada");
// 	}
// }


// operan = "*";
// var i=0;
// var len = a.length;
// while(i<len){
// 		x=a[i];
// 		if(x=="*" || x=="+" || x=="-" || x=="/"){
// 			operan=x;
// 			break;
// 		} 
// 		i++;
// 	}

// 	in = a.split(operan);

// xx = tambah(in[0], in[1], operan);
// alert (xx);