var assert = require('assert');
function producto(arr)
{
	return arr.reduce(function(a,b){ return a*b});
}

describe('el producto de un array',function(){ 
    it('Prueba producto de un array [1,2,3,4]', function(){
         assert.deepEqual(24, producto([1,2,3,4]));
    });
    it('Prueba producto de un array [8,10,2]', function(){
         assert.deepEqual(160, producto([8,10,2]));
    });
});
