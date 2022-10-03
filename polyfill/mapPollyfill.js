

Array.prototype.newMap=function(cb){
    let temp=[];  // map return new array its not change the given array....
    for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i],i,this))
        
    }
    return  temp;
}

const nums=[1,2,3,4];

const multiplyThree=nums.newMap((nums,i,temp)=>{
    return nums*3;
});

console.log(multiplyThree);



Array.prototype.customeMap=function(cb){
    let newMapArray=[];
    for(let i=0;i<this.length;i++){
        newMapArray.push(cb(this[i],i,this))
    }
    return newMapArray;
}



// example 

const example=[2,4,6];

const checkExample=example.customeMap((ex)=>{
    return ex * 2;
});

console.log(checkExample);