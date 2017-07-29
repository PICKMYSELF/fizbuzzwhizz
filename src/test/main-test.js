'use strict';

describe('fizbuzzwhizz', () => {

  it('输入带a的数字返回fizz', () => {
    let a=2;
    let b=3;
    let c=5;

    let numInput=12;
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('fizz');
  });
it('输入三者倍数的数字返回fizzbuzzwhizz', () => {
    let a=2;
    let b=3;
    let c=5;
let numInput=30;
expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('fizzbuzzwhizz');
});
it('输入a和b倍数的数字返回fizzbuzz', () => {
    let a=2;
     let b=3;
    let c=5;
let numInput=6;
expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('fizzbuzz');
});
it('输入b和c倍数的数字返回buzzwhizz', () => {
    let a=2;
let b=3;
let c=5;
let numInput=15;
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('buzzwhizz');
});
it('输入a和c倍数的数字返回fizzwhizz', () => {
    let a=2;
let b=3;
let c=5;
let numInput=10;
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('fizzwhizz');
});

it('输入a倍数的数字返回fizz', () => {
    let a=2;
let b=3;
let c=5;
let numInput=4;
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('fizz');
});
it('输入b倍数的数字返回buzz', () => {
    let a=2;
let b=3;
let c=5;
let numInput=9;
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('buzz');
});
it('输入c倍数的数字返回whizz', () => {
    let a=2;
let b=3;
let c=5;
let numInput=35;
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('whizz');
});
it('输入都不是倍数的数字返回自身', () => {
    let a=2;
let b=3;
let c=5;
let numInput=11
    expect(fizbuzzwhizz(a, b, c,numInput)).toEqual('11');
});
});
