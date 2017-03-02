console.log("inicio prueba de aplicación");

var emp1 = new Empleado("E1","e1@mail.com","123","202223334441","1000.10");
var emp2 = new Empleado("E2","e2@mail.com","123","272223336669","1030.10");
var emp3 = new Empleado("E3","e3@mail.com","123","274423334441","1500.99");
var emp4 = new Empleado("E4","e4@mail.com","123","201123338881","1000.10");
var emp5 = new Empleado("E5","e5@mail.com","123","202223335551","2050.10");

console.log(emp1);
console.log("e1 : "+emp1);

var area1 = new Area("area 1");
var area2 = new Area("area 2");
var area3 = new Area("area 3");

area1.agregarEmpleado(emp1);
area1.agregarEmpleado(emp2);
area2.agregarEmpleado(emp3);
area2.agregarEmpleado(emp4);
area3.agregarEmpleado(emp5);

//tipos de expedientes
var tipoLicitacion = {id:1,tipo:"Licitacion"};
var tipoPagos = {id:2,tipo:"Pagos"};
var tipoConcursos = {id:3,tipo:"Concursos"};

// crear 6 expedientes
var expediente1 = new Expediente(tipoLicitacion,"licitar pliego x","20/01/2017",3,emp5);
var expediente2 = new Expediente(tipoConcursos,"Ingresar personas x","23/01/2017",1,emp2);
var expediente3 = new Expediente(tipoPagos,"licitar pliego x","18/01/2017",5,emp3);
var expediente4 = new Expediente(tipoPagos,"licitar pliego x","04/01/2017",2,emp2);
var expediente5 = new Expediente(tipoConcursos,"Concurso jefe x","29/01/2017",4,emp4);
var expediente6 = new Expediente(tipoLicitacion,"licitar pliego x","32/01/2017",1,emp1);

var listaExpedientes = [expediente1,expediente2,expediente3,expediente4,expediente5,expediente6];
console.log(listaExpedientes);

listaExpedientes.forEach(
	function(e,i,a){
		if(e.esInvalido) e.fechaInicio = new Date();
		return e;
	});

console.log(listaExpedientes);  

expediente1.pasar(99,area1);
expediente2.pasar(88,area3);
expediente3.pasar(44,area3);
expediente4.pasar(31,area2);
expediente5.pasar(9,area1);
expediente6.pasar(6,area2);
//verificar cuantos expedientes hay en cada área
console.log(area1);
console.log(area2);
console.log(area3);

expediente1.pasar(100,area2);
expediente2.pasar(89,area1);
expediente3.pasar(54,area2);
expediente5.pasar(19,area2);
//verificar cuantos expedientes hay en cada área
console.log(area1);
console.log(area2);
console.log(area3);
console.log( "archivar ");
expediente5.archivar();
expediente5.pasar(19,area3);
// verificar que el pase no se ejecutó porque el pase está en archivo
console.log(area2);
console.log(area3);

