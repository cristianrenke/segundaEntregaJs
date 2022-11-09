     
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
         
}
}
const productos = [];
productos.push(new Producto("guitarra", "85000"));
productos.push(new Producto("bajo", "70000"));
productos.push(new Producto("bateria", "50000"));
productos.push(new Producto("teclado", "65000"));

for (const producto of productos) {
    console.log("PRODUCTO: ",producto.nombre + "  el precio es:  " + producto.precio);
}

let compra, cantidad1=0, cantidad2=0, cantidad3=0,cantidad4=0;
let n=prompt("cuantos productos desea comprar?");
for (let i= 0; i < n; i++){
compra = parseInt(prompt("Que desea comprar? \n Los productos son: \n presione el numero segun corresponda:\n 1)Guitarra \n 2) Bajo \n 3) Bateria \n 4) Teclado "));

if (compra==1){
         
      cantidad1++;
    }

else if (compra==2){
    cantidad2++;
    }
else if (compra==3){
    cantidad3++;
    }
    
    else if (compra==4){
    cantidad4++;
    }
}
{
    console.log("compraste :" + cantidad1, "guitarra");
    console.log("compraste :" + cantidad2, "Bajo");
    console.log("compraste :" + cantidad3, "Bateria");
    console.log("compraste :" + cantidad4, "Teclado");
   }

   const calcularTotalCompra = () => {
    let total = 0;
   total=(cantidad1*85000+cantidad2*70000+cantidad3*50000+cantidad4*65000);
       console.log("El monto total a pagar es :" + total);
  };

  calcularTotalCompra()





/*
}
const calcularTotalCompra = () => {
    let total = 0;
    arrayProd.forEach((producto) => {
      total += producto.precio * 1;
    });
   console.log(total)
  };

  calcularTotalCompra()
*/
