var obj = {
    name:'sonia',
    age: 20
}

var arr=[1,2,3,4];

console.log(obj.hasOwnProperty('name'));

// for (a in arr){
//     console.log(a);
//     console.log(arr[a]);
// }

arr.forEach((i,ind) =>{
    console.log("item: ",i);
    console.log("index: ",ind);
})

arr.map(i => {
    return i*3;
})

console.log(arr);