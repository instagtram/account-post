var nAccessi;
function recupera(){
  const dbRef = firebase.database().ref();
    dbRef.child("/Accessi/NumeroAccessi").get().then((snapshot) => {
      if (snapshot.exists()) {
        pubblica(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
function pubblica(numero){
  firebase.database().ref('Accessi').set({NumeroAccessi:numero+1});}
recupera();
