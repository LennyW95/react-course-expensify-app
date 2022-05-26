/* const person = {
    //name: 'Lenny',
    age: 27,
    location: {
        city: 'Liberec',
        temp: 10
    }
};

const {name: firstName = 'Anonymous', age} = person;
console.log(`${firstName} is ${age}.`)

const {city, temp: temperature} = person.location;
if(city && temperature){
console.log(`It's ${temperature} degrees in ${city}`)
} */

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (iced)', '$2.00', '$3.50', '$2.75'];
const [menuItem, , medium] = item;
console.log(`A medium ${menuItem} costs ${medium}`)