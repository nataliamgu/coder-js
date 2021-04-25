

var nombre = prompt("Ingresá tu nombre")
var saludoInicio = 'Hola'
alert(saludoInicio + ' ' + nombre)
var cant = prompt("Ingresá cantidad a comprar")
if (cant >=1000){
    alert(nombre + ' ' + 'estás comprando más de 1000 unidades')
}
else{
    alert(nombre + ' ' +'contactanos para compras menores')
}
var salida = confirm('confirmar para salir')
