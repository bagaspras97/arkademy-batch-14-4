function sequence(x,y){
  var arr =[];
  
  if(x>y){

    var tmp = x;
    x = y; //3
    y = tmp; //5
    arr.push(x);
 
    for(i=1; i<x; y++){
       x = Math.pow(x, 2) % y;
      
          	arr.push(x); 
        }
      	console.log(arr);
      	console.log(arr.length);
      
    }
  

    else{
    console.log("Parameter x harus lebih besar dibanding y");
  }
  
}

sequence(5,3);
sequence(16,5);
sequence(3,5)