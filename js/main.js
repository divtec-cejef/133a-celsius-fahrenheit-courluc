/**
 * Transformation de température
 * @author Lucien Courbat
 * @version 0.0.1
 * @since 2023-09-05
 */
"use strict";

let temperature = prompt("Température en celsius : ");

// Transforme temperature en float
temperature = parseFloat(temperature)

//Si temperature n'est pas un nombre => erreur
if (isNaN(temperature)){
    alert("Entrez un nombre !")
} else {
    //Affichage et calcul de la température
    alert (` ${temperature} °C =  ${(temperature * 9/5) + 32}°F`);
}
