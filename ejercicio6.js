function producto(arr)
{
	return arr.reduce(function(a,b){ return a*b});
}
console.log(producto([1,2,3,4]));