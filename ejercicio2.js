var assert = require('assert');
function recorrerNumero(num_cel,num_fijo)
{
	if(!isNaN(num_fijo))
	{
		return num_cel.filter(function(num){
	     if(num.toString().substring(0,3) == num_fijo || num.toString().substr(-3) == num_fijo)
	     {
            return num
	     }
	    });
	}
	else 
	{
    	return num_cel
    }
	
}
describe('# de celular',function(){ 
    it('Prueba de numeros , [123987567,987435123,437295012] , 123', function(){
         assert.deepEqual([123987567,987435123], recorrerNumero([123987567,987435123,437295012],123));
    });
    it('Prueba de numeros , [123987567] , hola', function(){
    	assert.deepEqual([123987567], recorrerNumero([123987567], "hola"));
    });
    
});




 
