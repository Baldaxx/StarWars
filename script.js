
"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
    /* MENU */
    const liste = document.getElementById("LeMenu");
    const CmdMenu = document.getElementById("CmdMenu");
    CmdMenu.addEventListener('click', function () {
        liste.style.display = (liste.style.display == 'none') ? '' : 'none';
    });
    // au chargement de la page
    window.onload = function () {
        // on teste la largeur de la fenêtre
        var ww = window.innerWidth; // en pixels
        liste.style.display = (ww > 768) ? '' : 'none';
        CmdMenu.style.display = (ww > 768) ? 'none' : '';
    };
    // au redimensionnement de la fenêtre
    window.onresize = function () {
        // on teste la largeur de la fenêtre
        var ww = window.innerWidth; // en pixels
        liste.style.display = (ww > 768) ? '' : 'none';
        CmdMenu.style.display = (ww > 768) ? 'none' : '';
    };
});