const validation = (userData, errors, setErrors) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userData.email) {
        setErrors({
            ...errors,
            email: "Este campo es obligatorio"
        });
    } else if (userData.email.length > 35) {
        setErrors({
            ...errors,
            email: "Este campo tiene un maximo de 35 caracteres"
        })
    } else if (!emailRegex.test(userData.email)) {
        setErrors({
            ...errors,
            email: "Este campo tiene que ser tipo Email"
        })
    } else {
        setErrors({
            ...errors,
            email: ""
        })
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        setErrors({
            ...errors,
            password: "Este tiene un rango de 6-10 caracteres"
        })
    } else if (!/\d/.test(userData.password)) {
        setErrors({
            ...errors,
            password: "Debes colocar al menos un numero"
        })
    } else {
        setErrors({
            ...errors,
            password: ""
        })
    }
}

export default validation;