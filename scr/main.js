// CONSIGNA DEL TRABAJO

// 1 - Ingrese un usuario y contraseña para poder ingresar al catalogo de los juegos
// 2 - Seleccione un juego del catalogo
// 3 - Una vez seleccionado el juego se le informara el precio con impuestos y descuentos aplicados 

let usuario = prompt("Ingrese Usuario");
let contraseña = prompt("Ingresar Contraseña");
let precioJuego = 0;

if((usuario !="") && (usuario !="")){
    console.log("Su usuario es: "+usuario +"\nSu contraseña es: "+contraseña); 
}else{
    alert("Error: Ingresar nombre y apellido");
}

    do {juego = prompt(`
    Ingrese el juego que quiere comprar (ingrese el numero del juego)
    1.JUST CAUSE 3 PS4
    2.MARVEL'S SPIDER-MAN PS4
    3.FIFA 22 PS4
    4.DEMON SLAYER PS4
    5.HORIZON FORBIDDEN WEST PS4
    6.RESIDENT EVIL VILLAGE PS4
    7.MORTAL KOMBAT 11 ULTIMATE PS4
    8.GRAND THEFT AUTO PS4`);
    } while ((juego <= 0) || (juego > 8))

    
    if (juego == 1) {
        precioJuego = 1290;
        nombreJuego = "JUST CAUSE 3 PS4";
    } else if (juego == 2) {
        precioJuego = 2490;
        nombreJuego = "MARVEL'S SPIDER-MAN PS4";
    } else if (juego == 3) {
        precioJuego = 2990;
        nombreJuego = "FIFA 22 PS4";
    } else if (juego == 4) {
        precioJuego = 5990;
        nombreJuego = "DEMON SLAYER PS4";
    } else if (juego == 5) {
        precioJuego = 4990;
        nombreJuego = "HORIZON FORBIDDEN WEST PS4";
    } else if (juego == 6) {
        precioJuego = 2650;
        nombreJuego = "RESIDENT EVIL VILLAGE PS4";
    } else if (juego == 7) {
        precioJuego = 1550;
        nombreJuego = "MORTAL KOMBAT 11 ULTIMATE PS4";
    } else if (juego == 8) {
        precioJuego = 3250;
        nombreJuego = "GRAND THEFT AUTO PS4";
    } else {
        alert('Queres comprar un juego que no esta en el catalogo');
    }

const impuesto = 1.21;
const descuento = 1.1;

function calcularJuego() {
    const juegoConImpuesto = Math.round(precioJuego * impuesto);
    console.log(`El juego ${nombreJuego} tiene un valor con impuesto de $ ${juegoConImpuesto}`);
    alert(`El juego ${nombreJuego} tiene un valor con impuesto de $ ${juegoConImpuesto}`);

    const precioFinal = Math.round(juegoConImpuesto / descuento);
    console.log(`El juego ${nombreJuego} tiene un valor con descuentos aplicados de $ ${precioFinal}`);
    alert(`El juego ${nombreJuego} tiene un valor con descuentos aplicados de $ ${precioFinal}`);
}
calcularJuego();

// German Ariel Becerra