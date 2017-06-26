function numeros(arr_num)
{
	return arr_num.map(function(arr){return arr*2}).map(function(ar){return ar+1});
}
console.log(numeros([2,5,7,2,3,8,10]));