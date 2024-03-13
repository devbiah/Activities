/*
decimal para binario
contar o número de palavras em uma frase.
*/
function soma(x,y){
    var um = x;
    var dois = y;
    var total = um + dois;
    return("Resultado da soma: " + total);
}
console.log (soma(1,2))

function subtrair(x,y){
    var um = x;
    var dois = y;
    var total = um - dois;
    return("Resultado da subtração: " + total);
}
console.log (subtrair(1,2))

function multiplica(x,y){
    var um = x;
    var dois = y;
    var total = um * dois;
    return("Resultado da multiplicação: " + total);
}
console.log (multiplica(1,2))

function divisao(x,y){
    var um = x;
    var dois = y;
    var total = um / dois;
    return("Resultado da divisão: " + total);
}
console.log (divisao(2,2))

function media(x,y,z){
    var um = x;
    var dois = y;
    var tres = z;
    var total = (um + dois + tres)/ 3 ;
    return("Resultado da média: " + total);
}
console.log (media(2,2,2))

function parimpar(x){
    var n = x
    if(n%2==0)
    return("O número é par!")
    else
    return("O número é ímpar!")
}
console.log (parimpar(1))

function simbolo(x){
    var n = x
    if(n > 0)
    return("O número é positivo")
    else if(n < 0)
    return("O número é negativo")
    else(n===0)
    return("O número é neutro *zero*")
}
console.log (simbolo(-0.1))

function fatorial(x){
    if(x === 0 || x === 1)
    return(1)
    else
    return(x*fatorial(x-1))
}
console.log (fatorial(5))

function primo(n) {
    if (n <= 1) 
        return (n + " não é primo");

    for (var i = 2; i < n; i++) {
        if (n % i === 0) 
            return (n + " não é primo")}
        
        return (n + " é primo")}

console.log(primo(2))

function maior(n1,n2,n3){
    if(n2 > n1 && n2 > n3)
     console.log(n2+ " é maior")
    else if(n3 > n1 && n3 > n2)
     console.log(n3 + " é maior")
    else
     console.log(n1 + " é maior")
}
    maior(4,5,3)
   
function inverterNumero(n) {
    var nString = n.toString()
    var Invertido = ""
    // Converta o número em uma string

    for (var i = nString.length - 1; i >= 0; i--) {
    // Adicione o caractere atual à nova string vazia
    // String.length (descobre quantos caracteres existem na string.) - 1: Encontra a posição do último caractere na string.
    // var i = String.length - 1: Inicializa uma variável i com a posição do último caractere.
    // i >= 0: Define a condição para continuar o loop enquanto i for maior ou igual a zero, ou seja, enquanto houver caracteres na string.
    // i--: Após cada iteração, i é decrementado, movendo para o caractere anterior na string.

    Invertido += nString[i]
    // Converte a string invertida de volta para um número
}
    return ("O número invertido ficaria: "+parseInt(Invertido))
}
    
console.log(inverterNumero(987654321));

function somaDigitos(numero) {
    var soma = 0;
    var nString = numero.toString();
    
    for (var i = 0; i < nString.length; i++) {
        soma += parseInt(nString[i]);
    }
    return ("A soma de todos os dígitos é: "+soma);
}

console.log(somaDigitos(1111))
    
    // Inicializamos a soma como zero. 
    // Converte o número em uma string para poder percorrer cada dígito.
    // Executa um loop repetidamente sobre cada dígito da string convertida.
    // Converte cada dígito de volta para um número, adicionamos à soma.
    // Retorna a soma dos dígitos. (Entendi +/-)


function potencia(x,y){
    var total = x ** y
    return ("O resultado da potência é " + total)
}
    console.log(potencia(3,2))

function Fahrenheit(c){
    var f = (9*c/5) + 32 
    return ("A temperatura em Fahrenheit é de " + f)
}
    console.log(Fahrenheit(4))

function bissexto(y){
    if ((y % 4 === 0 && y/100 !== 0 ) || y % 400 === 0) //principios do que é necessário para o ano ser bissexto!
    return("O ano é bissexto!")
    else
    return("Não é bissexto!")
}
    console.log(bissexto(2020)) 



function binario(dec){
    return "O núnero decimal para binário é: "+(dec >>> 0).toString(2)
}
console.log(binario(256))

function mdc(a, b) {
    while (b !== 0) {
    var r = a % b;
    a = b;
    b = r;
    }
    return ("O MDC é: "+ a);
}
    console.log(mdc(18,18))

function mmc(n1,n2){
    var resto, a, b
    a = n1
    b = n2
    while(resto!=0){
    resto = a % b
    a = b
    b = resto
    }
return ("O MMC é: "+(n1*n2)/a)
}
console.log(mmc(2,4))

function palindromo(n){
    var rev = n.split("").reverse("").join("")
    if (rev == n){
    console.log("Ele é um palindromo")
}    else{
    console.log("Ele não é um palindromo")
}}
palindromo("biscoito")

function maxmin(array) {
    var max = Math.max(...array);
    console.log("O máximo é:", max);

    var min = Math.min(...array);
    console.log("O mínimo é:", min);
}

maxmin([3, 1, 9, 5, 2])

function arraycresc(){
    var n = [5,2,6,7,8]
    n.sort()
    console.log ("O array crescente será: "+(n))
}
arraycresc()

function raiz(x){
    var resultado = Math.sqrt(x)
    return ("A raíz desse número é: " + resultado)
}
console.log(raiz(4))

function vogais(n){
    arr2 = n.split("")
    Num = arr2.length
    soma = 0
    for(i = 0; i <= Num; i++)
    if( arr2[i] == "a" ||  arr2[i] == "e" || arr2[i] == "i" || arr2[i] == "o" || arr2[i] == "u"){
        soma ++
    }
    console.log("A quantidade de vogais na palavra "+n+" é: "+soma)
}
vogais("paralelepipedo")

function palavrasfrase(p){
    var frase = p.split(" ");
    var quant = frase.length
    console.log ("A quantidade de palavras na frase é: "+quant)
}
palavrasfrase("A atividade tá triste")

function restodiv(x,y){
    var a = x;
    var b = y; 
    var c = a / b
    if (c % 1 === 0)
    return "O resto da divisão do inteiro será: "+c
    else 
    return "O resto da divisão quebrada será de: "+ (c - Math.floor(c)) * b
}
console.log(restodiv(4,2))

function verificastring(n){
    return /^\d+$/.test(n)
    }
    console.log(verificastring(5)) //true
    console.log(verificastring("10")) //true
    console.log(verificastring(true)) //false


function anagrama(a, b) {
    // Remover espaços em branco e converter para letras minúsculas
    a = a.toLowerCase().replace(/\s/g, '');
    b = b.toLowerCase().replace(/\s/g, '');
    
    // Ordenar as letras das palavras
    a = a.split('').sort().join('');
    b = b.split('').sort().join('');
    
    // Verificar se as palavras são iguais após a ordenação
    return a === b;
    }
    var palavra1 = "perda";
    var palavra2 = "padre";
    
    if (anagrama(palavra1, palavra2)) {
        console.log(`${palavra1} e ${palavra2} são anagramas.`);
    } else {
        console.log(`${palavra1} e ${palavra2} não são anagramas.`);
    }
    
 
function triangulo (b,h){
    var r = (b*h) / 2 
    return("Resultado da área do triângulo: "+ r)
}
console.log (triangulo(2,4))

function circulo(pi,r){
    var n = (pi * (r * r))
return ("Resultado da área do círculo: " + n)}
console.log(circulo(3.14,8))

function retangulo(l,a,d,o){
    var lado = l + a + d + o
    return ("Resultado do perímetro: " + lado)
}
console.log(retangulo(2,2,2,2))
