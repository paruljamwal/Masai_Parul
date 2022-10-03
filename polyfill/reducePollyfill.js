
Array.prototype.myreduce=function(cb,initVal){
 var accumulator=initVal;

 for(let i=0;i<this.length;i++){
    accumulator=accumulator ? cb(accumulator,this[i],i,this) : this[i];
 }
 return accumulator;
}


const numsred=[1,2,3,4,5,5];

const sum=numsred.myreduce((acc,crr,arr)=>{
    return acc+crr;
})


console.log(sum);