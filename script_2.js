var input = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorielle(num)
{
    if (num === 0)
    { 
        return 1; 
    }
    else
    { 
        return num * factorielle( num - 1 ); 
    }
}

console.log(`Le résultat est : ${factorielle(input)}`);
