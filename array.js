

// Question 1. WAP to find to count total number of Blank value and sum of all values (Integer).
// ===========================+++++++++++++++++========================

// function getScore(Arr){
//     let blankCount=0
//     let totalSum=0;
//     if(Arr.length > 0)
//     {
//         for(let val of Arr)
//         {
//             if(val)
//             {
//                 totalSum +=val
//             }else{

//                 blankCount++
//             }
//         }
//     }
//     return {balnkCount:blankCount,totalSum:totalSum}
// }

// document.write(`<h1>Array is ["",0,-2,"",'',-2,9]</h1>`)
// let output=getScore(["",0,-2,"","",-2,9])
// console.log("Output is : ", output)


// ===========================+++++++++++++++++========================
// Question 2. WAP to find  Maximum number from an Array.
// ===========================+++++++++++++++++========================

// function MaximumNumberfromAnArray(Arr){
//     let MaxNumber=-100000000;
//     for(let i =0; i<Arr.length; i++){
//                 if(Arr[i]>MaxNumber )
//                 {
//                     MaxNumber=Arr[i]
//                 }
//     }
//     return MaxNumber;
// }
// let output=MaximumNumberfromAnArray([-2,-10,-2,-1,0,10])
// console.log(`Maximum number is :  ${output}`)

// ===========================+++++++++++++++++========================
// Question 3. WAP to find  missing and duplicate number from an array.whose element are 1 to n
// ===========================+++++++++++++++++========================






// ===========================+++++++++++++++++========================
// Question 4. Flatten array
// ===========================+++++++++++++++++========================
// function flattenArray(arr,k){
//     var result=[]
//     function flatten(arr){
//         for(let i=0;i<arr.length;i++){
//             if(Array.isArray(arr[i])){
//                 flatten(arr[i])
//             }else{
//                 result.push(arr[i])
//             }
//         }
//     }
//     flatten(arr)
//     return result
// }
// console.log(flattenArray([1,2,3,4,[5,[6,7,[78,98]]],8,9,10]))

// ===========================+++++++++++++++++========================
// Question 5. Flatten array with k times deep
// ===========================+++++++++++++++++========================
// function flattenArray(arr,k){
//     var result=[]
//     function flatten(arr,k){
//             for(let i=0;i<arr.length;i++){
//                 if(Array.isArray(arr[i])){
//                     if(k>0){
//                          flatten(arr[i],  --k)
//                     }else{
//                          result.push(arr[i])
//                     }
//                 }else{
//                     result.push(arr[i])
//                 }
//             }
//     }
//     flatten(arr,k)
//     return result
// }
// console.log(flattenArray([1,2,3,4,[5,[6,7,[78,98]]],8,9,10],1))

// ===========================+++++++++++++++++========================
// Question 5. Flatten a deeply nested Object
// ===========================+++++++++++++++++========================
// function objectflatten(obj,parentkey){
//     let result={}
//   function flatten(obj,parentkey){
//       for(let key in obj){
//          let newkey=parentkey+key
//         if(typeof(obj[key])=="object"){
//             flatten(obj[key],newkey+".")
//         }else{
//             result[newkey]=obj[key]
//         }
//       }
//   }
// flatten(obj,"")
// return result
// }

// let objtest = {
//     a:{
//         name:"mark",
//         age:"26"
//     },
//     b:{
//         abc:"yyy",
//         abc2:"zzz"
//     },
//     c:{
//         d:'g',
//         e:'a',
//         d:{
//             F:{
//                 G:'k',
//                 Y:'ddd'
//             }
//         }
//     },
//   }
// let output=objectflatten(objtest)
// console.log(output)

// ===========================+++++++++++++++++========================
// Question 6. WAP to sort an array
// ===========================+++++++++++++++++========================

// function sorting(arr){
//     for(let i=0; i < arr.length; i++){
//         for(let j=i+1 ; j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 [arr[i],arr[j]]=[arr[j],arr[i]]
//             }
//         }
//     }
//     return arr
// }
// console.log(sorting([1,2,4,10,18,2,1,5]))

// ===========================+++++++++++++++++========================
// Question 7. WAP to Find maximum sum of consecutive subarray of size k
// ===========================+++++++++++++++++========================

// function maximumSumofConSubArray(arr,k){
//     let i=0, j=0;
//     let length=arr.length;
//     let sum=0;
//     let max=-99999999;
//     while(j<length){
//         sum +=arr[j]
//         if(j-i + 1==k){
//             max=Math.max(max,sum);
//             sum -=arr[i]
//             j++;
//             i++;
//         }
//         j++
//     }
// }
// ===========================+++++++++++++++++========================
// Question 7. Two Sum
// ===========================+++++++++++++++++========================
// function twoSum(arr,target){
//     let result=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==target){
//                 result.push([i,j])
//             }
//         }
//     }
//     return result
// }
// let output=twoSum([1,5,2,3,2,1,4,6],5)
// console.log(output)

// ===========================+++++++++++++++++========================
// Question 7. Three Sum
// ===========================+++++++++++++++++========================

// function threeSum(arr,target){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             for(let k=j+1;k<arr.length;k++){
//                 if(arr[i]+arr[j]+arr[k]==target){
//                     result.push([i,j,k])
//                 }
//             }
//         }
//     }
//     return result
// }
// let output=threeSum([1,5,2,3,2,1,4,6],5)
// console.log(output)

// ===========================+++++++++++++++++========================
// Question 8. Least frequent element in an Array
// ===========================+++++++++++++++++========================
// function leastCount(arr){
//     let min_freq=Number.POSITIVE_INFINITY;
//     let least_count_number
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++
//             }
//         }
//         if(min_freq>count){
//             min_freq=Math.min(min_freq ,count)
//             least_count_number=arr[i]
//         }
//     }
//     return least_count_number
//   }
//   console.log(leastCount([1,2,1,3,2,1,3,7,5,5,65,65,29,29]))

// ===========================+++++++++++++++++========================
// Question 9. Most frequent element in an Array
// ===========================+++++++++++++++++========================
// function leastCount(arr){
//     let max_freq=Number.NEGATIVE_INFINITY;
//     let most_count_number
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count++
//             }
//         }
//         if(max_freq<count){
//             max_freq=Math.max(max_freq ,count)
//             most_count_number=arr[i]
//         }
//     }
//     return most_count_number
//   }
//   console.log(leastCount([1,2,1,3,2,1,3,7,5,5,65,65,29,29,29,29]))

// ===========================+++++++++++++++++========================
// Question 9. Invert Key Value of Object
// ===========================+++++++++++++++++========================
// function invertkeyvalue(obj){
//     let result={}
//     for(let key in obj){
//         result[obj[key]]=key
//     }
//     return result
// }
// console.log(invertkeyvalue({a:20,b:30,c:40,d:50}))

// ===========================+++++++++++++++++========================
// Question 11. Generate random Number between two number
// ===========================+++++++++++++++++========================
// function generateRandomNumberinBetween(n1,n2){
    
//     let random=(n1 + Math.random()*(n2-n1)).toFixed(0)
//     return random
// }
// console.log(generateRandomNumberinBetween(10,20))
// ===========================+++++++++++++++++========================
// Question 12. Object sorting
// ===========================+++++++++++++++++========================
let obj = {
    "test1": {
        "name": "sunil",
        "age": 24
    },
    "test2": {
        "name": "anil",
        "age": 21
    },
    "test3": {
        "name": "amit",
        "age": 29
    },
    "test4": {
        "name": "robin",
        "age": 25
    }
}
function objectSorting(obj){
    let result={}
    let sortedArr= Object.entries(obj).sort((a,b)=>{
       return a[1].age - b[1].age 
    })
    for(let key of sortedArr){
        result[key[0]]=key[1]
    }
    
    return result
}

console.log(objectSorting(obj))


// Missing Number
// function findDuplicate(nums) {
//     let i = 0;
//     let duplicate = [];
//         while(i < nums.length ){
//         if(nums[i]==i+1)
//         {
//             i++
//         }
//         else if(nums[i] == nums[nums[i]-1])
//         {
//             return nums[i]
//             // duplicate.push(nums[i]);
//         }
//         else if(nums[i] != nums[nums[i]-1])
//         {
//             // [nums[i],nums[nums[i]-1]]=[nums[nums[i]-1],nums[i]]
//             let temp=nums[nums[i]-1];
//             nums[nums[i]-1]=nums[i]
//             nums[i]=temp
//         }

//     }
   
//     // return duplicate
// };


// let output = findDuplicate([1, 3, 4, 2, 2])
// console.log(output)


// let arr=[1,2,3,4,3,6,1]
// let i=0;
// let duplicateNumber=[];
// let missingNumber=[];
// while(i<arr.length)
// {
//     if(arr[i]==i+1)
//     {
//         i++;
//     }else if(arr[i]==arr[arr[i]-1])
//     {
//         duplicateNumber.push(arr[i])
//         missingNumber.push(i+1)
//         i++
//     }else if(arr[i] != arr[arr[i]-1]){
//         // [arr[i],arr[arr[i]-1]]= [arr[arr[i]-1],arr[i]]
//         let temp=arr[i]
//         arr[i]=arr[arr[i]-1]
//         arr[arr[i]-1]=temp
//     }
// }
// console.log("Missing Number are : ",missingNumber);
// console.log("Duplicate Number are : ",duplicateNumber);






// Method chainning 
// add(10).multi(20).divide(10).subs(2)

// const chainning={
//     total:0,
//     add:function (val){
//         this.total += val
//         return this
//     }, 
//     multi:function (val){
//         this.total *= val
//         return this
//     },
//     division:function (val){
//         this.total = this.total/val
//         return this
//     },
// }
// let {total}=chainning.add(10).multi(20).division(20)
// console.log(total)










// Sliding Window(Find maximum sum sum of consecutive subarray of size 3)

// Brutal Force Method
// function maxSumofSubArray(arr,k){
//     let l=arr.length;
//     let maxSum=-1000000;
//     for(let i=0;i<=l-k;i++){
//         let sum=0;
//         for(let j=i;j<i+k;j++){
//             sum=sum+arr[j]
//         }
//         maxSum=Math.max(maxSum,sum)
//     }
//     return maxSum
// }
// console.log(maxSumofSubArray([100, 2, 3, 4, 5, 61, 1, 1, 3], 3))
// By using Sliding window
// function maxSumofSubArray(arr, k) {
//     let l = arr.length;
//     let i = 0,
//       j = 0;
//     let sum = 0;
//     let maxSum = -100000;
//     let totalSubArray=0;
//     while (j < arr.length) {
//       sum = sum + arr[j];
//       if (j - i + 1 == k) {
//         totalSubArray++;
//         maxSum = Math.max(sum, maxSum);
//         sum = sum - arr[i];
//         i++;
//         j++;
//       }else{
//         j++
//       }
//     }
//     return {maxSum:maxSum,totalSubArray:totalSubArray};
//   }
//   let res = maxSumofSubArray([1, 2, 3, 4, 5, 61, 1, 1, 3], 3);
//   console.log( res);


// First Negative Number in consecutive subarray of size k
// function fistNegativeNumber(arr,k){
//     let l=arr.length

// }





// function sumzeroproblem(arr){
//     let start=0;let end=arr.length-1;
//     let result=[];
//     while(start < end){
        
//         if(arr[start]+arr[end]>0){
//             end=end-1
//         }else if(arr[start]+arr[end]<0){
//             start = start+1
//         }else{
//             let tempArr=[arr[start],arr[end]];
//             result.push(tempArr)
//             break
//             // start++;
//             // end--
//         }
//     }
    
//     return result
// }

// console.log(sumzeroproblem([-5,-4,-3,-2,0,1,2,4,6,8]))


// let arr=[10,8,2,9,4,5]
// function sorting(arr){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=arr[i]
//             }
//         }
//     }
    
//     return arr
// }
// console.log(sorting(arr))

// function tagetSum({arr,target}){
//     let outPut=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if((arr[i] !=arr[j]) && (arr[i]+arr[j]==target)){
//                 outPut.push([arr[i],arr[j]])
//             }
//         }
//     }
//     return outPut
// }
// console.log(tagetSum([1,3,4,2,4,5,6,2]))

