let cantProducto=parseInt(prompt("Ingrese la cantidad de productos"));
for(let i=1; i<=cantProducto; i++){
    let precio=parseInt(prompt("Ingrese el precio del producto "+i));
    let cuotas=parseInt(prompt("¿Con cuántas cuotas desea pagar?"));
    let interes=calcularInteres(precio, cuotas);
    console.log(calcularCuota(i, precio, cuotas, interes));
}

function calcularCuota(i, precio, cuotas, interes){
    if(interes!=-1){
        let valorCuota=precio/cuotas;
        let interesCuota=valorCuota*interes/100;
        let precioFinal=interesCuota+valorCuota;
        return "El precio de cada cuota del producto " + i + " es " + precioFinal + "$.";
    }else{
        return "La cantidad de cuotas seleccionada para el producto " + i + " no esta disponible";
    }
}

function calcularInteres(precio, cuotas){
    switch(cuotas){
        case 1:
            return 0;
        case 3:
            if(precio<=15000){
                return 8;
            }else if(precio<=75000){
                return 5;
            }else if(precio<=150000){
                return 3;
            }else{
                return 2;
            }
        case 6:
            if(precio<=15000){
                return 12;
            }else if(precio<=75000){
                return 8;
            }else if(precio<=150000){
                return 5;
            }else{
                return 3;
            }
        case 12:
            if(precio<=15000){
                return 15;
            }else if(precio<=75000){
                return 12;
            }else if(precio<=150000){
                return 8;
            }else{
                return 5;
            }
        case 18:
            if(precio<=15000){
                return 20;
            }else if(precio<=75000){
                return 15;
            }else if(precio<=150000){
                return 12;
            }else{
                return 8;
            }
        case 24:
            if(precio<=15000){
                return 30;
            }else if(precio<=75000){
                return 20;
            }else if(precio<=150000){
                return 15;
            }else{
                return 12;
            }
        default:
            return -1;
    }
}