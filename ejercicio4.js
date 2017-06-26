var assert = require('assert');
function numeros(arr_num)
{
	return arr_num.map(function(arr){return arr*2}).map(function(ar){return ar+1});
}

describe('dobles de numeros',function(){ 
    it('Prueba dobles de numeros [2,5,7,2,3,8,10]', function(){
         assert.deepEqual([5,11,15,5,7,17,21], numeros([2,5,7,2,3,8,10]));
    });
    it('Prueba dobles de numeros [8,7,0,9]', function(){
         assert.deepEqual([17,15,1,19], numeros([8,7,0,9]));
    });
    
    
});
