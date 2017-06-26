var assert = require('assert');
function edad(edades)
{
	return edades.filter(function(edad){ return edad > 18}).map(function(ed){return 2017 - ed});
}

describe('Sabiendo el año de nacimiento',function(){ 
    it('Prueba año de nacimiento [20,16,89,6]', function(){
         assert.deepEqual([1997,1928], edad([20,16,89,6]));
    });
    it('Prueba año de nacimiento [22,"hola",34]', function(){
         assert.deepEqual([1995,1983], edad([22,"hola",34]));
    });
});