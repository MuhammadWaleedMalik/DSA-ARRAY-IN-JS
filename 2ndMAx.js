let arr = [12,23,34,45,67,78]
let max=Math.max(arr[0],arr[1])
let sndmax =Math.min(arr[0],arr[1])


for(let i=1;i<arr.length ; i++){
if(arr[i]>max){
    sndmax=max
    max=arr[i]
}
if(arr[i]>sndmax && arr[i]!=max){
    sndmax=arr[i]
}

}


console.log("The second max is",sndmax)
console.log("The max is",max)