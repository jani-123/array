function ejercicio1(num,arr)
{
	return arr.reduce(function(a,b){ return (a*b)})*num;


}
console.log(ejercicio1(9,[4,4,5,12]));
/*
var assert = require('assert');
function ejercicio1(arr,num)
{

	var res = arr.reduce(function(a,b){ return (a*b)});
	if(!isNaN(num))// sino es un numero
	{
        res = res*num;
	}
	return res;
}

describe('multiplicacion',function(){ 
    it('Prueba de 10 , [2,3]', function(){
         assert.equal(60, ejercicio1([2,3],10));
    });
    it('Prueba de "hola" , [2,3]', function(){
         assert.equal(6, ejercicio1([2,3],"hola"));
    });
    it('Prueba de nada , [2,3]', function(){
         assert.equal(6, ejercicio1([2,3]));
    });
});
*/