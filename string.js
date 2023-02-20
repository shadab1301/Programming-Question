// ===========================+++++++++++++++++========================
// Question 1. WAP to check wheather two string are anagram or not.
// ===========================+++++++++++++++++========================
// function anagram(str1,str2){
//     let isAnagram=true
//     if(str1.length !=str2.length ) return false;
//     let str1Occ= countOcc(str1)
//     let str2Occ= countOcc(str2)
//         for(let key in str1){
//             if(str1Occ.key != str2Occ.key){
//                 isAnagram=false
//             }
//         }
//         return isAnagram
// }
// function countOcc(str){
//     let result={}
//     let str1=str.toLowerCase();
//     for(let val of str1){
//         result[val]=result[val]?result[val]+1:1
//     }
//     return result
// }
// console.log(anagram("gram","argm"))


// ===========================+++++++++++++++++========================
// Question 2. WAP to check wheather string is Palindrome or not.
// ===========================+++++++++++++++++========================

// Method 1:
// function isPalindrom(s) {
//     let newStr = s.toLowerCase().replace(/[^0-9a-z]/g, "");
//     let i=0; let j=newStr.length -1 ;
//      while(j > i){
//          if(newStr[i] != newStr[j])
//          {
//              return false
//          }else{
//              i++;
//              j--;
//          }
//          return true;
//      }
//     }
// let output=isPalindrom("papap");
// console.log(output);


// Method 2:
// function isPalindrom(str) {
//     let newStr = str.toLowerCase().replace(/[^0-9a-z]/g, "");
//     if(newStr.split("").reverse().join("").toLowerCase()==newStr){
//         return true
//     }else{
//         return false
//     }
//   }
// let output=isPalindrom("redder");
// console.log(output);

// ===========================+++++++++++++++++========================
// Question 3. WAP to count character occourance in a string.
// ===========================+++++++++++++++++========================
// function countOcc(str){
//     let result={}
//     let str1=str.toLowerCase();
//     for(let val of str1){
//         result[val]=result[val]?result[val]+1:1
//     }
//     return result
// }
// console.log(countOcc("shadabAshraf"))

