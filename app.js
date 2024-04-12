const myclass = document.querySelector('.header .nav-bar .nav-list .myclass');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const form = document.querySelector("#contact_form");

myclass.addEventListener('click', () => {
	myclass.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 70) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		myclass.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	const nameRegex1 = /[a-zA-Z]{5}/;
	const nameRegex2 = /^[a-zA-Z]+$/;
	const numberRegex = /^[0-9]{10}$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const name = form.elements["name"];
	const number = form.elements["phnum"];
	const email = form.elements["email"];

	const nameError = document.getElementById("nameError")
	const numberError = document.getElementById("numberError")
	const emailError = document.getElementById("emailError")

	const success = document.getElementById("formSuccess")

	let flag = 0;

	if (!name.value.match(nameRegex1)) {
		nameError.innerHTML = "Name should have minimum of 5 characters";
		flag = 1;
	} else if (!name.value.match(nameRegex2)) {
		nameError.innerHTML = "Name should have only alphabets"
		flag = 1;
	} else {
		nameError.innerHTML = ""
	}

	if (!number.value.match(numberRegex)) {
		numberError.innerHTML = "Number should have 10 digits"
		flag = 1;
	} else {
		numberError.innerHTML = ""
	}

	if (!email.value.match(emailRegex)) {
		emailError.innerHTML = "Invalid Email"
		flag = 1;
	} else {
		emailError.innerHTML = ""
	}

	console.log(flag)

	if (flag == 0) {
		name.value = ""
		email.value = ""
		number.value = ""
		success.innerHTML = "Form Submitted!"
		setTimeout(() => {
			success.innerHTML = ""
		}, 2000)
	}
})