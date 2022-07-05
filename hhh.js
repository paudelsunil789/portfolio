// let arr=[1, 2, 3]
const  double =(arr)=> {
    let doublearr=[]
    for(let i=0; i<arr.length; i++){
        doublearr.push(arr[i]*12);
    }
    return doublearr
}
console.log('Double matrix:', double ([1, 2, 3]));
