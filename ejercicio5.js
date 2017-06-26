var assert = require('assert');
function grados(grado)
{
	return grado.map(function(grad){ return (grad * 1.8)+32});
}
 
describe('Conversion de grados',function(){ 
    it('Prueba de Conversion de grados [20,19,40,12]', function(){
         assert.deepEqual([68,66.2,104,53.6], grados([20,19,40,12]));
    });
});
