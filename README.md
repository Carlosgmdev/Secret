# Encriptador/Desencriptador de textos.

Hola, sobre mi encriptador, considero que no es el mas atractivo en cuanto a diseño, mas sin embargo,
lo realize de una manera que considero que es interesante, ya que tiene la capacidad de cambiar su
diccionario, a continuación muestro como se podria hacer esto:

En el archivo src/js/main.js, esta declarada una constante llamada dictionary, la cual se trata de un
objeto, el cual se puede cambiar, extender o reducir.

Diccionario original, de acuerdo a los requerimientos del proyecto.

const dictionary = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

Podrias sustituir dicho diccionario por cualquier otro, es decir:

const dictionary = {
    a: '$%/',
    e: '&$\',
    i: '!"#',
    o: '%$&',
    u: '!#%&$',
    p: '#$!',
    q: '=?$,
    ...
}

Y este seguiria funcionando.

-El proyecto previene automaticamente el ingreso de mayusculas.
-Mensajes emergentes.
-Dark mode.

<a href="https://carlosgmdev.github.io/Secret/">Visualiza mi repositorio</a>
<img src="assets/qr.png" width="200px">