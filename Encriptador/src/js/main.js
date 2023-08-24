//Obteniendo los elementos
const body = document.querySelector('body');
const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const btnEncrypt = document.querySelector('#btn-encrypt');
const btnDecrypt = document.querySelector('#btn-decrypt');
const btnClear = document.querySelector('#btn-clear');
const btnCopy = document.querySelector('#btn-copy');
const alerts = document.querySelector('#alerts');
const themeSwitch = document.querySelector('#theme')


//Diccionario
const dictionary = {
    a: '%&/',
    e: '#$',
    i: '&$#',
    o: '#$%&',
    u: '&%$',
    p: '//&$',
    y: '/7#$%'
}


//Seprando el diccionario para poder iterarlo y operarlo
const dictionaryKeys = Object.keys(dictionary)
const dictionaryValues = Object.values(dictionary)

//Funcion encriptar
const encrypt = text => {
    const textArr = text.split('')
    let encryptedText = ''
    let found = false
    textArr.map(char => {
        found = false
        dictionaryKeys.map(key => {
            if(char === key) {
                encryptedText = encryptedText + dictionaryValues[dictionaryKeys.indexOf(key)]
                found = true
            } 
        })
        if(!found) {
            encryptedText = encryptedText + char
        }
    })
    return encryptedText
}

//Funcion desencriptar
const decrypt = text => {
    dictionaryValues.map(value => {
        while(text.includes(value)) {
            text = text.replace(value, dictionaryKeys[dictionaryValues.indexOf(value)])
        }
    })
    return text
}

//Mostrar el resultado
const setResult = result => {
    outputText.value = result
}

//Función para mostrar alertas
const setAlert = (type, message) => {
    alerts.innerHTML = `<div class="alert ${type}" id="alert">${message}</div>`
    alerts.classList.remove('d-none')
}

//Función para remover alertas
const removeAlerts = () => {
    setTimeout(() => {
        alerts.innerHTML = ''
        alerts.classList.add('d-none')
    }, 2000);
}

//Cambiando el tema
themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark')
    if(themeSwitch.textContent ==='Ligth') {
        themeSwitch.textContent ='Dark'
    } else {
        themeSwitch.textContent = 'Ligth'
    }
    themeSwitch.classList.toggle('ligth-btn')
})

//Evitando que el usuario introduzca mayusculas
inputText.addEventListener('input', e => {
    e.target.value = e.target.value.toLowerCase();
})

//Encriptar
btnEncrypt.addEventListener('click', () => {
    if(inputText.value === '') {
        setAlert('error', 'Por favor introduce algun texto')
    } else {
        setResult(encrypt(inputText.value.toLowerCase()))
        setAlert('success', '¡Texto encriptado con exito!')
    }
    removeAlerts();
})

//Desencriptar
btnDecrypt.addEventListener('click', () => {
    if(inputText.value === '') {
        setAlert('error', 'Por favor introduce algun texto')
    } else {
        setResult(decrypt(inputText.value.toLowerCase()))
        setAlert('success', '¡Texto desencriptado con exito!')
    }
    removeAlerts();
})

//Limpiar
btnClear.addEventListener('click', () => {
    inputText.value = '';
    inputText.focus()
})

//Copiar
btnCopy.addEventListener('click', () => {
    if(inputText.value === '') {
        setAlert('error', 'No hay nada para copiar')
    } else {
        navigator.clipboard.writeText(outputText.value)
        setAlert('success', '¡Texto copiado con exito!')
    }
    removeAlerts();
})

