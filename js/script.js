const data = document.getElementsByClassName('data')[0];
const empty = document.getElementsByClassName('empty')[0];
const input = document.getElementsByTagName('textarea')[0];
const output = document.getElementById('output');
const copyButon = document.getElementsByClassName('button__3')[0];
const password = {
	a: 'ai',
	e: 'enter',
	i: 'imes',
	o: 'ober',
	u: 'ufat',
};

input.addEventListener('keypress', function (event) {
	let key = event.key;
	let regex = new RegExp('^[a-zA-Z0-9s ]+$');

	if (!regex.test(key)) {
		event.preventDefault();
		return false;
	}
});

function showResult(text) {
	if (text === '') {
		data.style.transition = 'opacity 0.5s';
		data.style.opacity = 0;
		setTimeout(() => {
			data.classList.add('hide');
			empty.style.transition = 'opacity 0.5s';
			empty.style.opacity = 1;
			empty.classList.remove('hide');
		}, 250);
	} else {
		empty.style.transition = 'opacity 0.5s';
		empty.style.opacity = 0;
		setTimeout(() => {
			empty.classList.add('hide');
			data.style.transition = 'opacity 0.5s';
			data.style.opacity = 1;
			data.classList.remove('hide');
		}, 250);
	}
}

function encrypt() {
	let plaintext = document.getElementsByTagName('textarea')[0].value;
	plaintext = plaintext.toLowerCase();
	showResult(plaintext);

	plaintext = plaintext.replace(/a|e|i|o|u/gi, function (match) {
		return password[match];
	});

	output.innerHTML = plaintext;
}

function decrypt() {
	let plaintext = document.getElementsByTagName('textarea')[0].value;
	plaintext = plaintext.toLowerCase();
	showResult(plaintext);

	const reversedPassword = {};
	Object.entries(password).forEach(([key, value]) => {
		reversedPassword[value] = key;
	});

	plaintext = plaintext.replace(
		/ai|enter|imes|ober|ufat/gi,
		function (match) {
			return reversedPassword[match];
		}
	);

	if (plaintext !== document.getElementsByTagName('textarea')[0].value) {
		output.innerHTML = plaintext;
	} else {
		showResult('');
	}
}

async function copy() {
	await navigator.clipboard.writeText(output.innerHTML);
	copyButon.innerHTML = 'Mensagem Copiada';
	copyButon.classList.remove('button__3');
	copyButon.classList.add('copied');
	setTimeout(() => {
		copyButon.innerHTML = 'Copiar';
		copyButon.classList.remove('copied');
		copyButon.classList.add('button__3');
	}, 1500);
}
