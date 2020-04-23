// Scrivi un programma che stampi i numeri da 1 a 100, con le seguenti regole:
// - al posto dei multipli di 3 stampi "Fizz"
// - al posto dei multipli di 5 stampi "Buzz"
// - al posto dei multipli sia di 3 che di 5 stampi "FizzBuzz"


for (var i = 1; i <= 100; i++) {

    // var resto_3 = i % 3;
    // var resto_5 = i % 5;
    // var resto_15 = i % 15;

    if(i % 3 == 0 && i % 5 == 0) { // equivalente a: i % 15 == 0
        // il numero è multiplo di 3 ed è multiplo di 5 => stampo fizzbuzz
        console.log('fizzbuzz');
    } else if (i % 5 == 0) {
        // il resto della divisione per 5 è 0 => è multiplo di 5 => stampo buzz
        console.log('buzz');
    } else if(i % 3 == 0){
        // il resto della divisione per 3 è 0 => è multiplo di 3 => stampo fizz
        console.log('fizz');
    } else {
        // il numero non è multiplo di 3 e non è multiplo di 5 => stampo il numero
        console.log(i);
    }
}
