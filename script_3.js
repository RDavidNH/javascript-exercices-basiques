// reverse pyramid

var number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

for (let i = 1; i <= number; i++) {
    var row = '';

    for (let ii = 0; ii < number - i; ii++) {
        row += ' ';
    }

    for (let ii = 0; ii < i; ii++) {
        row += '#';
    }

    console.log(row);    
}