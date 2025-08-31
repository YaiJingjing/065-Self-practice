// name: Khaniti Hatsanee
// id: 67130500065


/*1. write a script to print the factorial of 1 to n.
print "ERROR" if n is not an integer or n is less than 0;
print 0 1 if n is 0 (because 0! = 1)
e.g.,
1 1
2 2
3 6
4 24
...
n n!*/
var n = '4'
if (!Number.isInteger(n)){
    console.log('error')
}
else if (n < 0){
    console.log("error")
}
else if (n===0){
    console.log("0 1")
}
else{
    let factorial = 1;
    for(let i =1; i <= n ; i++){
        factorial *= i;
        console.log(i,factorial)
    }
}
// loop to print i and i! until i==n
/*

2. count (and print) the number of vowels (i.e., a,e,i,o,u) in a string <s>.
if <s> is not a string, print "ERROR".
*/
var s = "APPLE"
let count = 0;

if(typeof(s) !== "string"){
    console.log('error')
}
else for (let i = 0; i <= s.length; i++){
    s = s.toUpperCase();
    let char = s[i]
    switch(char){
        case 'A':
            count++;
        break;
        case 'E':
            count++;
        break;
        case 'I':
            count++;
        break;
        case 'O':
            count++;
        break;
        case 'U':
            count++;
        break
    }
}
console.log(s,count)
/* 
3. check if n is a prime number.
print YES if n is a prime number. Otherwise, print NO.
the followings are not prime numbers:
"string", "2", NaN, Infinity, -3, null, ...

A prime number is a positive integer (> 1) 
that is divisible only by 1 and itself.
*/