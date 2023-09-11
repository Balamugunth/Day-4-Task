let isPalindrome= function(s)
{
    let a = s;
    s = s.split('').reverse().join('');
    return s == a;
}
function PalindromicStrings(arr, N)
{
    let ans = [];
    for(let i=0; i<N; i++){
        if(isPalindrome(arr[i])){
            ans.push(arr[i]);
        } 
    }
    return ans;
}
let arr = ["abc", "car", "ada", "racecar", "cool"];
let N = arr.length; 
let s = PalindromicStrings(arr , N);
if(s.length == 0){
    console.log("-1");
}
for(let st of s){
    console.log(st," ");
}
