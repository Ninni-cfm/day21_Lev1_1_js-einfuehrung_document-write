/*
    Schreibe mit Hilfe des Befehls document.write() folgendes in dein HTML-Dokument:
    h1 - Hello World!
    p - Have a nice day!
    Deklariere die Variable mytext und fülle sie mit “Hello again”. Schreibe die Variable anschließend in dein Dokument.
    Deklariere Variablen: name, nachname und fülle sie mit deinem Namen. Schreibe sie anschließend in dein Dokument.
*/
document.write("<h1>Hello World!</h1>");
document.write("<p>Have a nice day!</p>");

let myText = "Hello again";
document.write("<p> " + myText + "</p>");


let name = "Klaus";
let nachName = "Nienhaus";
document.write("Name: " + name); // name wird durchgestrichen, weil es ein reserviertes Wort ist!!!
document.write("<br>Nachname: " + nachName);
