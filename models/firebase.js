const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./mapa.json');

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://mapa-sanca.firebaseio.com",
});

let dbRef = firebaseAdmin.database().ref();

function all(){
  return new Promise((resolve, reject) => {
    dbRef.once("value")
      .then((snapshot) => {
        let results = [];
        snapshot.forEach(function(childSnap) {
          results.push(childSnap.val());
        });
        resolve(results);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function save(coordinate){
   return dbRef.push(coordinate);
}

module.exports.all = all;
module.exports.save = save;
