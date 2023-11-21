const obj = { 
    name: 'Petr', 
    surname: 'Petrov',
};

const propertyName = 'asa';

const hasProperty = checkProperty(propertyName, obj);
console.log(hasProperty);

function checkProperty(str, obj) {
    return obj.hasOwnProperty(str);
}

checkProperty()