let prime = function(n)
{
    for(let i = 2; i * i <= n;i++)
    if(n % i == 0)
    return false;
return true;
}
function prime_range(start, end, a)
{
    for(let i = start; i<end ; i++){
    if(prime(a[i])){
    console.log(a[i] + " ");
    }
    }
    

}
function print(arr, n){
    prime_range(0, parseInt(n/2))
    console.log("<br>");

    prime_range(parseInt(n/2),n,arr);
    console.log("<br>");
    
}
let arr = [2,5,10,17,15,21,23]
let n = arr.length;

print(arr, n);