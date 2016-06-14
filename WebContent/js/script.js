function doDateManipulations() {
	
	var today = new Date();
	var year = today.getFullYear();
	var nextYear = new Date((year+1), 0, 1);
	var remDays = (nextYear-today)/(24*60*60*1000);
	document.write(Math.ceil(remDays));
}

function sayHello() {
	document.write("Hello");
}

function checkAccountNo() {
	var accNo = document.forms[0].accNo.value;
	if (accNo.length === 0) {
		alert("Enter a valid account no");
	}
}


function changeColor() {
	alert("in funct");
	var div = document.getElementById("div1");
	alert(div);
	div.className = "changedDiv";
}

function toggleDivs() {
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var value = document.getElementById("inp").value;
	if (value === '2') {
		div1.className = "hidden";
		div2.className = "show";
	} else if (value === '1') {
		div2.className = "hidden";
		div1.className = "show";
	}
}

function printBalance() {
	var div = document.getElementById("div1");
	document.title = "Demo";
	var string = document.title;
	div.innerHTML = document.URL;
}
function showDetails() {
	var footer = document.getElementById("footer");
	var browserString = navigator.userAgent;
	footer.innerHTML = "<h3 style = 'align:cener;'>"+browserString+"</h3>";
}
function history1() {
	history.back();
}
function goBack() {
	history.go(-2);
}

function reload() {
	alert(location.protocol);
}
function open() {
	window.open("http://www.google.com");
}
