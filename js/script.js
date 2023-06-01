const data = document.getElementsByClassName('data')[0];
const empty = document.getElementsByClassName('empty')[0];
const output = document.getElementById('output');
const password = {
	a: 'ai',
	e: 'enter',
	i: 'imes',
	o: 'ober',
	u: 'ufat',
};

function showResult(text) {
	if (text !== '') {
		empty.classList.remove('fade-in');
		empty.classList.add('fade-out', 'animated');
		data.classList.remove('fade-out');
		data.classList.add('fade-in', 'animated');
		data.classList.remove('hide');
		empty.classList.add('hide');
	} else {
		data.classList.remove('fade-in');
		data.classList.add('fade-out', 'animated');
		empty.classList.remove('fade-out');
		empty.classList.add('fade-in', 'animated');
		empty.classList.remove('hide');
		data.classList.add('hide');
	}
}

function encrypt() {
	let plaintext = document.getElementsByTagName('textarea')[0].value;

	showResult(plaintext)

	plaintext = plaintext.replace(/a|e|i|o|u/gi, function (match) {
		return password[match];
	});

	output.innerHTML = plaintext;
}

function decrypt() {
	let plaintext = document.getElementsByTagName('textarea')[0].value;

	showResult(plaintext)

	const reversedPassword = {};
	Object.entries(password).forEach(([key, value]) => {
		reversedPassword[value] = key;
	});

	plaintext = plaintext.replace(/ai|enter|imes|ober|ufat/gi, function (match) {
		return reversedPassword[match];
	});

	output.innerHTML = plaintext;
}
