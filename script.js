
// "use strict";
// window.addEventListener("DOMContentLoaded", (event) => {
//     /* MENU */
//     const liste = document.getElementById("LeMenu");
//     const logo = document.getElementById("logo123");
//     const CmdMenu = document.getElementById("CmdMenu");
//     CmdMenu.addEventListener('click', function () {
//         liste.style.display = (liste.style.display == 'none') ? '' : 'none';
//         logo.style.display = (logo.style.display == 'none') ? '' : 'none';
//     });
//     // au chargement de la page
//     window.onload = function () {
//         // on teste la largeur de la fenêtre quand la page est entierement chargé initailement
//         var ww = window.innerWidth; // en pixels
//         liste.style.display = (ww > 768) ? '' : 'none';
//         CmdMenu.style.display = (ww > 768) ? 'none' : '';
//     };
//     // au redimensionnement de la fenêtre a chaque redimensionnement de la page
//     window.onresize = function () {
//         // on teste la largeur de la fenêtre
//         var ww = window.innerWidth; // en pixels
//         liste.style.display = (ww > 768) ? '' : 'none';
//         CmdMenu.style.display = (ww > 768) ? 'none' : '';
//     };
// });
const myButton = document.querySelector('#CmdMenu');
const myMenu = document.querySelector("#LeMenu");

myButton.addEventListener('click', () => {
    if(myMenu.style.display === "none"){
        myMenu.style.display = "block";
    }else {
        myMenu.style.display = "none"
    }
    
});