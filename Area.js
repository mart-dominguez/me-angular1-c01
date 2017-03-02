function Area(pNombre){
	this.nombre=pNombre;
	this.empleados=[];
	this.expedientes = [];
}

Area.prototype.agregarEmpleado= function(emp){
	if(emp.area === undefined){
		this.empleados.push(emp);
		emp.asignarArea(this);
	}else{
		console.error("No se puede agregar un empleado que trabaja en otra área");
	}
}

Area.prototype.recibirExpte= function(e){
	// agrega el expediente a la lista de expedientes
	this.expedientes.push(e);
}

Area.prototype.pasarExpte= function(e){
	// quitar de la lista de expedientes el expediente
	// revisar el método de Array splice
}