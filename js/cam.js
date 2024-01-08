const camInit = document.querySelector('[data-video-botao]');
const camField = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const takeShot = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const message = document.querySelector('[data-mensagem]');
const submitBTN = document.querySelector('[data-enviar]');
let imageURL = '';

camInit.addEventListener('click', async function () {
	const videoInit = await navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false,
	});
	camInit.style.display = 'none';
	camField.style.display = 'block';
	video.srcObject = videoInit;
});

takeShot.addEventListener('click', function () {
	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
	imageURL = canvas.toDataURL('image/jpeg');
	camField.style.display = 'none';
	message.style.display = 'block';
});

submitBTN.addEventListener('click', () => {
	const receiveData = localStorage.getItem('cadastro');
	const dataConverter = JSON.parse(receiveData);
	dataConverter.imagem = imageURL;
	localStorage.setItem('cadastro', JSON.stringify(dataConverter));
	window.location.href = './abrir-conta-form-3.html';
});
