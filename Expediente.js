var NRO_EXPEDIENTE = 1000;

var Expediente =function(pTipo,pTitulo,pFechaInicio,pPrioridad,pIniciador){
	fechaAux = moment(pFechaInicio, "DD/MM/YYYY");
	if(fechaAux.isValid()){
		this.fechaInicio =fechaAux.toDate();
	}else{
		console.error("la fecha "+pFechaInicio+ " es invalida");
		this.esInvalido=true;
	}
	this.nro=NRO_EXPEDIENTE++;
	this.iniciador=pIniciador;
	this.tipo=pTipo;
	this.titulo=pTitulo;

	this.archivado = false;
	this.pases = [];
}

Expediente.prototype.pasar= function(fojas,destino){
	if(!this.archivado) {
		this.pases.push(new Pase(fojas,destino,this));
		destino.recibirExpte(this); //double dispatch
	}
	else{
		console.error("No se puede pasar un expediente ya archivado");
	}
}

Expediente.prototype.archivar= function(){
	this.archivado = true;
	console.log("archivado");
}

Expediente.prototype.ficha= function(){
	// mostrar datos del expediente y quien es el poseedor actual y desde que fecha
}

Expediente.prototype.pases= function(){
	// mostrar historial de pases
}