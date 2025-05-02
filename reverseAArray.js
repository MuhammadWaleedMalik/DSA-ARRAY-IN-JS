let arr=[1,2,3,4,5]
let revArr=[]
for(let i=0;i<arr.length;i++){
    revArr[arr.length-1-i]=arr[i]
}

console.log("the reverse arr is " ,revArr)