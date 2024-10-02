
const arr=[2,3,4,5,6,7,8,11,1,1,];

function transform(i){
    return i*2;
}

function filterLogic(n){
    if(n%2==0) return true;
    else return false;
}
// const ans= arr.map(transform);
const ans= arr.map((i)=>{
    return i*2;
});

// const ans2=arr.filter(filterLogic)
const ans2=arr.filter((n)=>{
    if(n%2) return false;
    else return true;
})

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(function (result, item) {
    console.log("result",result)
    console.log("item",item)
  return result +item;
}, 0);
const multi = numbers.reduce(function (result, item) {
    console.log("result",result)
    console.log("item",item);

  return result* item;
}, 1);

console.log("Sum is" ,sum);
console.log("Multiplication is" ,multi);


// console.log(ans);
// console.log(ans2);