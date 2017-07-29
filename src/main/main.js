'use strict';

function fizbuzzwhizz(a, b, c,numInput){
     var ra=numInput%a;
     var rb=numInput%b;
     var rc=numInput%c;
    if(numInput.toString().indexOf(a)!=-1)return 'fizz';
    if(!(ra||rb||rc)) return 'fizzbuzzwhizz'
    if(!(ra||rb)) return 'fizzbuzz'
    if(!(ra||rc)) return 'fizzwhizz'
    if(!(rb||rc)) return 'buzzwhizz'
    if(!ra) return        'fizz'
    if(!rb) return        'buzz'
    if(!rc) return        'whizz'
    return numInput.toString();

}