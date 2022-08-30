let intervalTimeIncrements=200;
let changeInRotation=['|', '/ ', '- ', '\\','|', '/ ', '- ', '\\']  


for(let i=0;i<changeInRotation.length;i++){
setTimeout(() => {
    process.stdout.write(`\r${changeInRotation[i]}   `);
  }, intervalTimeIncrements)
  intervalTimeIncrements+=200;
};

setTimeout(()=>{
    console.log('\n')
 },intervalTimeIncrements)
  
  