

Array.prototype.polyFilter=function(cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    if(cb(this[i],i,this)){
        temp.push(this[i]);
    }
  }
  return temp;
}


const dummy=[1,2,3,4];

let FillAns= dummy.polyFilter((e)=>{
    return e %2===0 
})

console.log(FillAns);