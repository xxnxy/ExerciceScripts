/*var prompt = require('prompt')
prompt.start();
 prompt.get(['username', 'email'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
  })
  */

const prompt = require('prompt-sync')();
//var nombre = prompt('how many more times? ');
//console.log(nombre);

class menuItem{
    constructor(codigo, precio){
        this.codigo = codigo
        this. precio = precio
    }
}

var chocolate = new menuItem("xc23", 12.50)
var paleta = new menuItem("c4f2", 5.75)
var chichle = new menuItem("gt74", 4.25)
var galleta = new menuItem("l3k8", 9.10)

//console.log(chocolate.codigo);

function getCandy() {
    //console.log(codigo);
    if (codigo === "xc23") {
        console.log("You selected Choloclate- Price:", chocolate.precio);
        priceCheck();
    }
    else if (codigo === paleta.codigo) {
        console.log("You selected Paleta- Price:", paleta.precio);
        priceCheck();
    }    
    else if (codigo === chichle.codigo) {
        console.log("You selected Chicle- Price:", chichle.precio);
        priceCheck();
    } 
    else if (codigo === galleta.codigo) {
        console.log("You selected Galleta- Price:", galleta.precio);
        priceCheck();
    }
    else {
        console.log("err g-C");
        console.log(codigo);
    }
}

function itemCheck() {
    if (codigo === chocolate.codigo) {
        var itemPrice = chocolate.precio;
        return itemPrice;
    } 
    if (codigo === paleta.codigo) {
        var itemPrice = paleta.precio
        return itemPrice;
    }
    if (codigo === chichle.codigo) {
        var itemPrice= chichle.precio
        return itemPrice;
    }
    if (codigo === galleta.codigo) {
        var itemPrice = galleta.precio
        return itemPrice;
    }
}

function priceCheck() {
    var precio = prompt("Your money: ");
    precio = parseFloat(precio);

    if (precio === itemPrice) {
        console.log("Purchase successful. Thank you for your time");
        //console.log("precio", precio);
        //console.log("itemPrice", itemPrice);
    } 
    if (precio > itemPrice) {
        console.log("Purchase successful. Your change is:", precio - itemPrice);
        //console.log("precio", precio);
        //console.log("itemPrice", itemPrice);
    }
    if (precio < itemPrice) {
        console.log("Insufficient funds");
        //console.log("precio", precio);
        //console.log("itemPrice", itemPrice);
    }
    else {
        console.log("err - p-C");
    }
}

var codigo = prompt("Insert Item Code: ");
var itemPrice = itemCheck();
getCandy();