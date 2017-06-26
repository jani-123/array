
function multiplos(arr,num)
{
	var array =[];
	arr.forEach(
        function(ar){
        	if(ar % num == 0)
        	{
        		array.push(ar);
        	}
        }
	);
	return array

}

console.log(multiplos([7,21,44,80,77,35],7));






