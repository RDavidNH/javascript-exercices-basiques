const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];


log_title('Est-ce que tous les livres ont été au moins empruntés une fois ?');

var answer = 'Oui';

for (let i = 0; i < books.length; i++) {
    if (books[i].rented == 0) {
        answer = 'Non';
        break;
    }
}

console.log(answer);

log_title('Quel est livre le plus emprunté ?');

books.sort(function (a, b) {
    return a.rented < b.rented;
});

console.log(books[0]);


log_title('Quel est le livre le moins emprunté ?');

books.sort(function (a, b) {
    return a.rented > b.rented;
});

console.log(books[0]);


log_title("Trouve le livre avec l'ID: 873495");

for (let i = 0; i < books.length; i++) {
    if (books[i].id == 873495) {
        console.log(books[i]);
        break;
    }
}

log_title("Supprime le livre avec l'ID: 133712");

for (let i = 0; i < books.length; i++) {
    if (books[i].id == 133712) {
        var x = books.splice(i, 1);
        console.log(books);
        break;
    }
}

console.log('** Le livre supprimé **');
console.log(x);

log_title("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)");

books.sort(function (a, b) {
    return a.title > b.title;
});

console.log(books);
