function validation() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let message = document.getElementById("message").value;
	let error_message = document.getElementById("error_message");
	let text;
		
	if (name.length < 2) {
		text = 'Please Enter Valid Name';
		error_message.innerHTML = text;
		return false;
	}
	if (email.indexOf('@') == -1 || email.length < 6){
		text = 'Please Enter Valid Email';
		error_message.innerHTML = text;
		return false;
	}
	if (message.length <= 10){
		text = 'Please Enter More Than 10 Characters';
		error_message.innerHTML = text;
		return false;
	}
	alert('Form Submitted Successfully!')
	return true;
}