export default function legalAge(campo) {
	const birthDate = new Date(campo.value);
    if(!validateAge(birthDate)){
        campo.setCustomValidity("O usuário não é maior de idade!");
    }
	
    console.log(validateAge(birthDate));
}

function validateAge(data) {
	const currentDate = new Date();
	const dateLegalAge = new Date(
		data.getUTCFullYear() + 18,
		data.getUTCMonth(),
		data.getUTCDate()
	);
	return currentDate >= dateLegalAge;
}
