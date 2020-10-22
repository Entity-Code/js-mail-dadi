//MAIL

// LISTA EMAIL DEGLI INVITATI
var listaInvitati = ["topolino@libero.it", "paperino@alice.it", "pippo@gmail.com", "mattia@libero.it"];
var form = document.getElementById("form");

var invia = document.getElementById("invia");
invia.addEventListener("click",
	function() {
      // DICHIARAZIONE VARIABILI INTERNE (INPUT)
      var emailUtente = document.getElementById("emailUtente");
      var msgContainer = document.getElementById("msgContainer");
      var msgRisultato = document.getElementById("msgRisultato");
      var check = 0;

      // CHECK EMAIL
      for (i = 0; i < listaInvitati.length; i++) {
         listaInvitati[i];
         if (emailUtente.value === listaInvitati[i]) {
         check++;
         }
      }

      // OUTPUT
      if (check > 0) {
         document.getElementById("msgRisultato").innerHTML = ("Sei tra gli invitati, benvenuto !");
      } else{ 
         document.getElementById("msgRisultato").innerHTML = ("Mi dispiace, ma non sei stato invitato");
      }

      //DISPLAY FORM OFF
      form.className = "dNone";
      // DISPLAY MESSAGGIO RISULTATO ON
      msgContainer.className = "dBlock";
	}
);
