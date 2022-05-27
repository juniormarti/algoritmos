function saludo(){
    alert("HOLA MUNDO ESTO ES JS")
}

function suma(){
    var A;
    var B;
    var SUMA;

    alert("este sistema realiza la suma de dos numeros");

    A = parseInt(prompt("INGRESE EL PRIMER VALOR"));
    B = parseInt(prompt("INGRESE EL SEGUNDO VALOR"));

    SUMA = A + B;

    alert("EL RESULTADO DE LA SUMA ES: " + SUMA )

}

function operacines(){
    var num1;
    var num2;
    var SUMA;
    var RESTA;
    var MULTI;
    var DIVI;

    alert("este sistema realiza las operaciones basicas con dos numeros");

    num1 = parseInt(prompt("INGRESE EL PRIMER VALOR"));
    num2 = parseInt(prompt("INGRESE EL SEGUNDO VALOR"));

    SUMA = num1 + num2;
    RESTA = num1 - num2;
    MULTI = num1 * num2;
    DIVI = num1 / num2;

    alert("EL RESULTADO DE LA SUMA ES: " + SUMA )
    alert("EL RESULTADO DE LA RESTA ES: " + RESTA )
    alert("EL RESULTADO DE LA MULTIPLICACION ES: " + MULTI )
    alert("EL RESULTADO DE LA DIVISION ES: " + DIVI )


}

function numeroMayor(){
    var num1;
    var num2;

    alert("Este sistema determina el numero mayor de dos numeros");

    num1 = parseInt(prompt("INGRESE EL PRIMER VALOR"));
    num2 = parseInt(prompt("INGRESE EL SEGUNDO VALOR"));

    if (num1 > num2){
        alert("El numero mayor es: " + num1);
    } 
    else {
        if (num2 > num1){
            alert("El numero mayor es: " + num2);    
        }
        else {
            alert("Los numeros son iguales");
        }
    }
}


function numeroMenor(){
    var num1;
    var num2;
    var num3;

    alert("Este sistema determina el numero mayor de dos numeros");

    num1 = parseInt(prompt("INGRESE EL PRIMER VALOR"));
    num2 = parseInt(prompt("INGRESE EL SEGUNDO VALOR"));
    num3 = parseInt(prompt("INGRESE EL TERCER VALOR"));

  if ((num1 < num2) && (num1 < num3)){
      alert("El numero menor es: " + num1);
  }
  else {
      if ((num2 < num1) && (num2 < num3)){
          alert("El numero menor es: " + num2);
      }
      else{
          if((num3 < num1) && (num3 < num2)){
              alert("El numero menor es: " + num3)
          }
          else{
              alert("Todos los numeros son iguales")
          }
      }
  }
}


function numeroPar(){
    var num;

    alert("Este sistema determina si un numero es par o impar");

    num = parseInt(prompt("INGRESE EL NUMERO"));    

    if ((num % 2) ==0){
        alert("El numero: "+ num + " es par");
    }
    else{
        alert("El numero: "+ num + " es impar");
    }


}



function numeroCuadrado(){
    var num;
    var cuadrado;

    alert("Este sistema determina el cuadrado de un numero");

    num = parseInt(prompt("INGRESE EL NUMERO"));   

    cuadrado = num * num;

    alert("El cuadrado del numero: " + num + " es igual a: "+ cuadrado)

}


function areaTriangulo(){
    var B;
    var H;
    var A;

    alert("Este sistema calcula el area de un triangulo");

    B = parseInt(prompt("INGRESE LA BASE DEL TRIANGULO"));
    H = parseInt(prompt("INGRESE LA ALTURA DEL TRIANGULO"));

    A = (B * H)/2;

    alert("La altura del triangulo es igual a: " + A)

}

function convertirValor(){
    var M;
    var CM;

    alert("Este sistema convierte los metros en centimetros");

    M = parseInt(prompt("INGRESE EL VALOR EN METROS"));

    CM = M * 100;

    alert("El valor " + M + " convertido a centimetros es igual a " + CM)
}

function añoNacimiento(){
    var edad;
    var año;

    alert("Este sistema determina el año en que nacio el usuario");

    edad = parseInt(prompt("INGRESE SU EDAD"));

    año = 2022 - edad;

    alert("El usuario nacio en el año: " + año )
}



function invertirCapital(){
    var c;
    var a;
    var g;
    var ga;
    var gt;

    alert("Este sistema calcula cuanto gana el usuario al invertir su capital");

    c = parseInt(prompt("INGRESE LA CANTIDAD A INVERTIR"));
    a = parseInt(prompt("INGRESE EL NUMERO DE AÑOS"));

    ga = (c * 0.02) * 12,
    g = ga * a;
    gt = g + c;

    alert("La cantidad a ganar en " + a + " años es igual a: "+ g);
    alert("La suma de las ganacias mas el capital invertido es igual a: " + gt);

}


function promedioAlumno(){
    var n1;
    var n2;
    var n3;
    var n4;
    var n5;
    var prom;

    alert("Este sistema calcula el promedio de un estudiante en la clase de ingles");

    n1 = parseInt(prompt("INGRESE LA PRIMER NOTA"));   
    n2 = parseInt(prompt("INGRESE LA SEGUNDA NOTA"));   
    n3 = parseInt(prompt("INGRESE LA TERCER NOTA"));   
    n4 = parseInt(prompt("INGRESE LA CUARTA NOTA"));   
    n5 = parseInt(prompt("INGRESE LA QUINTA NOTA"));
    
    prom = (n1 + n2 + n3 + n4 + n5) / 5;

    if (prom <= 29){
        alert("El estudiante reprobo con: " + prom);
    }
    else{
        alert("El estudiante aprobo con: " + prom)
    }

}


function fruteria(){
    var kilo;
    var desc;
    var precio;
    var total;

    alert("Este sistema calcula cuanto debe pagar uun cliente por su compra");

    kilo = parseInt(prompt("INGRESE LA CANTIDAD DE KILOS COMPRADOS")); 

    precio = kilo * 4500;

    if (kilo <= 2){
        desc = precio * 0.0;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
    else if (kilo <= 5){
        desc = precio * 0.10;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
    else if (kilo <= 10){
        desc = precio * 0.15;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
    else{
        desc = precio * 0.20;
        total = precio - desc;
        alert("Su compra tiene un descuento de: " + desc);
        alert("El total a pagar es un valor de: " + total);
    }
}