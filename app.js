// Almacenamos en la variable la funcionalidad del framework Express
var express = require("express");

// Asignamos a app la ejecución de express
var app = express();

/*  Aclaramos que vamos a recibir peticiones
    a la dirección "/" (puro dominio) mediante
    el método get.
*/
app.get("/", function(req, res){
  res.send("Hola en mi primera página web");
  //res.end("Hola desde app.js");
});

// Escuchamos en el puerto 4250
app.listen(4250);
