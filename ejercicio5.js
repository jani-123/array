function grados(grado)
{
	return grado.map(function(grad){ return (grad * 1.8)+32});
}
console.log(grados([20,19,40,12]));