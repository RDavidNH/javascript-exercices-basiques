const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

    const log_title = function (message) {
        console.log("%c ***** " + message + " *****", 'background: #222; color: #bada55; font-weight: bold');
    }


    log_title("Liste des entrepreneurs qui sont nés dans les années 70");
  
    entrepreneurs.forEach(function (person) {
        if (person.year > 1969 && person.year < 1980) {
            console.log(person.first + ' ' + person.last);
        }
    });


    log_title('Un tableau "array" qui contient le prénom et le nom des entrepreneurs');
    
    var entrepreneursNames = [];
    
    entrepreneurs.forEach(function (person) {
        entrepreneursNames.push(person.first + ' ' + person.last);
    });
    
    console.log(entrepreneursNames);


    log_title("Quel âge aurait chaque inventeur aujourd'hui ?");

    var currentDate = new Date();

    entrepreneurs.forEach(function (person) {
        let age = currentDate.getFullYear() - person.year;
        console.log(person.first + ' ' + person.last + ':' + age);
    });


    log_title("Trie les entrepreneurs par ordre alphabétique du nom de famille.")

    entrepreneurs.sort(function(a, b) {
        return a.last > b.last
    });

    console.log(entrepreneurs);

    