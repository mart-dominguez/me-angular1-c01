// usar moment

function Expediente(nro,iniciador){
	this.nro=nro;
	this.iniciador=iniciador;
	this.archivado = false;
	this.pases = [];
}

Expediente.prototype.pasar= function(pase){
	if(!this.archivado) {
		this.pases.push(pase);
		pase.destino.recibir(this); //double dispatch
	}
	console.error("No se puede pasar un expediente ya archivado")
}

Expediente.prototype.archivar= function(){
	this.archivado = true;
}

Expediente.prototype.ficha= function(){
	// mostrar datos del expediente y quien es el poseedor actual y desde que fecha
}

Expediente.prototype.pases= function(){
	// mostrar historial de pases
}

function Pase(fecha,destino){
	this.fecha=fecha;
	this.destino=destino;	
}

function Area(nombre){
	this.nombre=nombre;
	this.empleados=[];
	this.expedientes = [];
}

Area.prototype.addEmpleado= function(usr){
	this.empleados.push(usr);
	usr.area=this;
}

Area.prototype.recibir= function(e){
	this.expedientes.push(e);
}

Area.prototype.pasar= function(e){
	//quitar de la lista de expedientes el expediente
}

function Usuario(nombre,mail){
	this.nombre=nombre;
	this.mail=mail;
	this.area=undefined;
}


var expediente1 = new Expediente(123,"martin");
var expediente2 = new Expediente(456,"pepe");

console.log(expediente1);
console.log(expediente2);

var area1 = new Area("area 1","area1@mail.com");
var area2 = new Area("area 2","area2@mail.com");
var area3 = new Area("area 3","area3@mail.com");

expediente1.pasar(new Pase(new Date(),area1));
console.log(expediente1);
expediente1.pasar(new Pase(new Date(),area2));
console.log(expediente1);
expediente1.pasar(new Pase(new Date(),area3));
console.log(expediente1);