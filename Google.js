/*var monLogo = document.getElementById('contenu');
var monBouton= document.getElementById('bouton_central')


function afficherLeLogo(){
	monBouton.style.display = "none";
	monLogo.style.display = "flex";
}

if (monLogo.style.display==="none") {

	monBouton.onclick = function(){
		afficherLeLogo();
	}

}else{
	monBouton.style.display = "none"}*/

/*------------------------------------------------*/

/*var monBouton = document.getElementById('bouton_central')

function supprimerBouton() {
	monBouton.style.display = "none";
}

monBouton.onclick = function(){
		supprimerBouton();
}*/

/*------------------------------------------*/

let monLogo = document.getElementById('contenu');
let monBouton = document.getElementById('bouton_central');

let monBoutonRecherche = document.getElementById('bouton_recherche');

function afficherLogo() {
monBouton.style.display = "none";
monLogo.style.display = "flex";
}



if (monLogo.style.display!=="flex") {
	monBouton.onclick = function(){
		afficherLogo();}
	
}else{alert('Something went wrong')}


document.querySelector('body').onload = function() {
	popUp();
}


function popUp(){
	setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
}





function allerSurLien(){
	let maRecherche = document.getElementById('mysearch').value;
	window.location.href='https://www.google.fr/#q='+ maRecherche; }

if (monLogo.style.display!=="none") {
	monBoutonRecherche.onclick = function(){
		allerSurLien();}
	
}else{alert('Something went wrong')}














