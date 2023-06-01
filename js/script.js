const data = document.getElementsByClassName('data')[0];
const empty = document.getElementsByClassName('empty')[0];
const output = document.getElementById('output')
const password = {
	a: 'ai',
	e: 'enter',
	i: 'imes',
	o: 'ober',
	u: 'ufat',
};

window.onload = () => {
	data.style.display = 'none';
};

function encrypt() {
	let plaintext = document.getElementsByTagName('textarea')[0].value;

	plaintext = plaintext.replace(/a|e|i|o|u/gi, function (match) {
		return password[match];
	});

	empty.style.display = 'none';
    data.style.display = 'block';
    output.innerHTML = plaintext
}
