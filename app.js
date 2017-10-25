// Almacenamos en la variable la funcionalidad del framework Express
var express = require("express");
var cors = require("cors");
// Asignamos a app la ejecución de express
var app = express();

/*  Aclaramos que vamos a recibir peticiones
    a la dirección "/" (puro dominio) mediante
    el método get.
*/
app.get("/",cors(), function(req, res){
  var obj = [{
    "id": 1,
    "name": "Jacobo"
  },
  {
    "id": 2,
    "name": "Steffi"
  },
  {
    "id": 3,
    "name": "Pipo"
  }

  ];
  res.send(obj);
  //res.end("Hola desde app.js");
});

// Escuchamos en el puerto 4250
app.listen(4250);
