function edad(edades)
{
	return edades.filter(function(edad){ return edad > 18}).map(function(ed){return 2017 - ed});
}
console.log(edad([20,16,89,6]));
