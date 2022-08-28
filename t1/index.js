// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]


// let nums=[2,7,11,15]
// let target=9;
// let sum=0;
// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//         sum=nums[i]+nums[j];
//         if(sum===target){
//             console.log(i,j);
//         }

//     }
// }


// let nums= [3,2,4]
// let target=6;
// let sum=0;

// function output(arr,target){
//     arr.sort((a,b)=>{
//       return a - b
//     })
//     console.log(arr,"arr");
//   let l=0;
//   let r=arr.length-1;
//     while(l<r){
//       let m=Math.floor((l+r)/2)
//       console.log(m,"mid")
//       let sum=arr[l]+arr[r];
//       console.log(sum,"sum");
//       if(sum==target){
//         return l+" "+r
//       }
//       else if(arr[m]>target){
//         r=m-1
       
//       }else{
//         l=m+1
//       }
//     }
    
//   }
//  let arr = [2,7,11,15] 
//  let target = 9
// //   let target=6;
//   let x=output(arr,target)
//   console.log(x,"x")


// let obj={};
// for(let i=0;i<nums.length;i++){
//     if(obj[nums[i]]===undefined){
//         obj=nums[i]
//     }
// }
// console.log(obj);

// nums.sort((a,b)=>a-b)
// // let sum=0;
// let s=nums.length-1;
// let l=0;
// let r=nums.length-1;
// // console.log(nums);
// while(l<r){
//     sum=nums[l]+nums[r]
//     if(sum===target){
//         console.log(l,r);
//         break;
//     }
//     else if(sum>target){
//         r--;
//     }
//     else{
//         l++;
//     }
// }


// let nums= [3,2,4]
// let target=6;
// let sum=0;

// nums.sort((a,b)=>a-b);
// let l=0;
// let r=nums.length-1;
// // console.log(nums);
// while(l<r){
//     let mid=nums[l]+nums[r];
//     if(mid===target){
//         console.log(l,r);
//         l++;
//         r--;  
//     }
//     else if(mid<target){
//         l++;
//     }
//     else if(mid>target){
//         r--;
//     }
//     // console.log(mid);
// }


let nums= [2,6,2] 
let target=8;

nums.sort((a,b)=>a-b)
console.log(nums);

function Pairs(nums,target){
    let l=0;
    let r=nums.length-1;
    while(l<r){
        let n=Math.floor(l+r)/2;
        if(nums[l]+nums[n]){
            console.log(l,n)
            return [l,n]
        }
        else if(nums[n]<target){
            r=n-1;
        }
        else{
            l=n+1;
        }
    }
}

let p=Pairs(nums,target)
console.log(p);