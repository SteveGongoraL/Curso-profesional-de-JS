// for => (Instrucción inicial, Condición, Instrucción después de cada iteración)

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// while => (condición){}
let s = 0;
let continuar = true;

while(continuar){
    console.log("Hello");
    s++;
    console.log(s);
    if(s === 3){
        console.log("Fin");
        continuar = false;
    }
}
