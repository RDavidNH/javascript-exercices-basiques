var cmd = prompt("...");

function action(_cmd) {

    switch (true) {
        case /\?$/.test(_cmd):
            console.log('Ouais Ouais...');
            break;
        case /^[A-Z]+$/.test(_cmd):
            console.log('Pwa, calme-toi...');
            break;
        case /.*fortnite.*/i.test(_cmd):
            console.log("On s'fait une partie soum-soum ?");
            break;
        case _cmd == "":
            console.log("t'es en PLS ?");
            break;
        default:
            console.log("balek.");
            break;
    }
}

while(cmd != 'stop') {

    action(cmd);

    cmd = prompt("...");
}