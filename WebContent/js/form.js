
function showFocus() {
	document.forms[0].firstName.select();
}
function validateForm() {
	
	/*
	 * variable declaration
	 */
	var firstName = document.forms[0].firstName.value;
	var lastName = document.forms[0].lastName.value;
	var age = document.forms[0].age.value;
	var gender = document.forms[0].rad;
	var country = document.forms[0].country;
	var errors = '';
	
	// firstName validation
	if (firstName === '' || firstName === null) {
		errors += '\nFirst Name Required';
	}
	
	// lastName validation
	if (lastName === '' || lastName === null) {
		errors += '\nLast Name Required';
	}
	
	// age validation
	if (age === '' || age === null) {
		errors += '\nAge Required';
	}
	if (age !== '' && age!== null && parseInt(age) < 18) {
		errors += "\nAge must be > 18";
	}
	
	// gender validation
	var radioCheckFlag = false;
	for ( var g = 0; g < gender.length; g++) {
		if (document.forms[0].rad[g].checked === true) {
			radioCheckFlag = true;
			break;
		}
	}
	
	if (radioCheckFlag === false) {
		errors += "\nSelect your gender";
	}
	
	// country validation
	var countryFlag = false;
	for ( var c = 0; c < country.length; c++) {
		if (document.forms[0].country[c].selected === true) {
			countryFlag = true;
			break;
		}
	}
	
	if (countryFlag === false) {
		errors += "\n Select your country";
	}
	
	//show errors if any, or submit the form
	if (errors !== '') {
		var errorDiv = document.getElementById("errorDiv");
		errorDiv.className = "show";
		errorDiv.innerHTML = errors;
	} else {
		document.forms[0].submit();
	}
}

function clearFields() {
	//document.forms[0]
	document.forms[0].reset();
}

function check() {
	//document.forms[0]
	/*var index = document.forms[0].country.selectedIndex;
	alert(document.forms[0].country[index].text);*/
	for ( var i = 0; i < document.forms[0].country.length; i++) {
		if (document.forms[0].country[i].selected === true) {
			alert(document.forms[0].country[i].text);
		}
	}
}

function validate() {
	
	var fName = document.forms[0].firstName.value;
	var lName = document.forms[0].lastName.value;
	var age = document.forms[0].age.value;
	var gender = document.forms[0].rad;
	var hobbies = document.forms[0].hobbies;
	var country = document.forms[0].country;
	if (fName === '' || fName === null) {
		alert("First name required");
	}
	if (lName === '' || lName === null) {
		alert("Last name required");
	}
	if (age === '' || age === null) {
		alert("Age required")
	}
	if (age !== '' && age !== null && parseInt(age) < 18) {
		alert("\nAge must be > 18");
	}
	// gender validation
	var radioCheckFlag = false;
	for (var g = 0; g < gender.length; g++) {
		if (document.forms[0].rad[g].checked === true) {
			radioCheckFlag = true;
			break;
		}
	}
	
	if (radioCheckFlag === false) {
		alert("Select your gender");
	}
	// hobbies validation
	var hobbiesFlag = false;
	for (var g = 0; g < hobbies.length; g++) {
		if (document.forms[0].hobbies[g].checked === true) {
			hobbiesFlag = true;
			break;
		}
	}
	
	if (hobbiesFlag === false) {
		alert("Select your hobbies");
	}
	
	// country validation
	var countryFlag = false;
	for ( var c = 0; c < country.length; c++) {
		if (document.forms[0].country[c].selected === true) {
			countryFlag = true;
			break;
		}
	}
	
	if (countryFlag === false) {
		alert("Select your country");
	}
	document.forms[0].submit();
}