friends = ['Fereve','Avs','Mic','Ags','Shet']
friends.forEach(names => {
    console.log(names + ':')
    for(let a = 99 ; a>0 ; a--) {
        if (a==1) {
            console.log(`${a} line of code in the file, ${a} line of code; ${names} strikes one out, clears it all out, no more line of code in the file `)
        } else {
            console.log(`${a} lines of code in the file, ${a} line of code; ${names} strikes one out, clears it all out, ${a-1} lines of code in the file`)
        }
    }
});