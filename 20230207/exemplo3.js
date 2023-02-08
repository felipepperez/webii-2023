let arr = [1,2,3,4,5,6,7,8,9,10];

console.time('foreach');
arr.forEach(each=>{
    console.log(each);
})
console.timeEnd('foreach');

console.time('forof');
for(let each of arr){
    console.log(each);
}
console.timeEnd('forof');

console.time('forin');
for(let index in arr){
    console.log(arr[index]);
}
console.timeEnd('forin');