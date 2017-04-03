function addNumbers(a, b){
  return new Promise(function(resolve,reject){
    if((typeof a ==='number' && a>0) && (typeof b ==='number' && b>0)){
      setTimeout(function(){
              resolve(a+b);
      }, 2000)
    }else{
      reject('Not enough arguments');
    }
  })
}

addNumbers(1,4).then(function(sum){
  console.log('success', sum);
},function(err){
  console.log('error', err);
})
