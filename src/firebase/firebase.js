import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAG-l238C0VlqatM0nUet0Sl6ZWqA_qzMs",
    authDomain: "expensify-96e42.firebaseapp.com",
    databaseURL: "https://expensify-96e42-default-rtdb.firebaseio.com",
    projectId: "expensify-96e42",
    storageBucket: "expensify-96e42.appspot.com",
    messagingSenderId: "754498964536",
    appId: "1:754498964536:web:2b2060cfa688118b16aacd",
    measurementId: "G-CFW0R6CF9S"
};

firebase.initializeApp(config);

const database = firebase.database();

//child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot)=>{
//             expenses.push({
//                 id:childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });



database.ref('expenses').push({
    description:'Rent',
    note:'',
    amount:24555,
    createdAt:0
});

// database.ref('notes/-N33MhvdeHaGSkszmKqw').update({
//     body:'buy food'
// });

// database.ref('notes').push({
//     title: 'Course topics',
//     body:'React, Node, CSS'
// });

// const firebaseNotes = {
//     notes:{
//         fcgfcgcg:{
//             title: 'First note',
//             body:'This is my note'
//         },
//         ahjsjsjcvewfefaf:{
//             title: 'Another note',
//             body:'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body:'This is my note'
// },{
//     id: '761ase',
//     title: 'Another note',
//     body:'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });

// setTimeout(() => {
//     database.ref('job/title').set('Manager');
// }, 2500);

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data.', e)
//     });

// database.ref().set({
//     name: 'Lenny W',
//     age: 26,
//     stressLever: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Liberec',
//         country: 'Czech Republic'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//   stressLever: 9,
//   'job/company':'Amazon',
//   'location/city':'Seattle'
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed!')
//     }).catch((e) => {
//         console.log('Did not remove.', e)
//     });
