var assert = require('assert');
function multiplos(arr,num)
{
   var array =[];
   arr.forEach(
   function(ar){
        if(ar % num == 0)
        {
              array.push(ar);
        }
    });
    return array    


}
describe('multiplos',function(){ 
    it('Prueba de multiplos [7,81,77,11,21] , 7', function(){
         assert.deepEqual([7,77,21], multiplos([7,81,77,11,21],7));
    });
    it('Prueba de multiplos [10,34,20,87,15] , 5', function(){
         assert.deepEqual([10,20,15], multiplos([10,34,20,87,15],5));
    });
    it('Prueba de multiplos [10,34,"hola",87,15] , 5', function(){
         assert.deepEqual([10,15], multiplos([10,34,"hola",87,15],5));
    });
    
});








