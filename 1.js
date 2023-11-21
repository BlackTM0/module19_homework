const obj = { 
 name : 'Petr', 
 surname: ' Petrov',
}
function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
        }
    }
}
printOwnProperties(obj);