//MAIL

// LISTA EMAIL DEGLI INVITATI
var listaInvitati = ["topolino@libero.it", "paperino@alice.it", "pippo@gmail.com", "mattia@libero.it"];
var form = document.getElementById("form");

invia.addEventListener("click",
	function() {
      // DICHIARAZIONE VARIABILI INTERNE (INPUT)
      var emailUtente = document.getElementById("emailUtente");
      var msgContainer = document.getElementById("msgContainer");
      var invia = document.getElementById("invia");
      var check = false;

      // CHECK EMAIL
      for (var i = 0; i < listaInvitati.length; i++) {
         listaInvitati[i];

         if (emailUtente === listaInvitati[i]) {
            check = true;
         }
      }

      if (check === true) {
         console.log("ammesso");
      } else {
         console.log("respinto");
      }









      // OUTPUT






      //DISPLAY FORM OFF
      form.className = "dNone";
      // DISPLAY MESSAGGIO RISULTATO ON
      msgContainer.className = "dBlock";
	}
);
