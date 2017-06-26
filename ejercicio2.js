function recorrerNumero(num_cel,num_fijo)
{
	return num_cel.filter(function(num){
	     if(num.toString().substring(0,3) == num_fijo || num.toString().substr(-3) == num_fijo)
	     {
            return num
	     }
	});
}

/*function recorrerNumero(num_cel,filtro)
{
	return num_cel.filter(function(num){
		 var primeras = num.toString().substring(0,3);
		 var ultimas = num.toString().substr(-3); 
	     return (primeras == filtro || ultimas == filtro);
	});
}*/
console.log(recorrerNumero( [784123123,355676784,342335554] , 784));



