function cek_kata(string){
  var reg = /[a-zA-Z]/;
  var regN = /[0-9]/;
  var hasil = ['/']; 
  
  if(reg.test(string)){
  var a = string.split(" ");
//     console.log(a);
  var b = a.length;
//     console.log(b);
  hasil += b;
//     console.log(hasil); 
    
    for(i=0; i<a.length; i++){
      if(regN.test(a)){
        var buang = a.shift();
        var jmlStr1 = a.length;
        hasil = jmlStr1+hasil
        return hasil;
        break;
      }else if(reg.test(a)){
        var jmlStr2 = a.length;
        hasil = jmlStr2+hasil
        return hasil;
        break;
      }
    }
  }else{
    var salah = "parameter harus string";
    return salah
  }
  
}
console.log(cek_kata("ini adalah sebuah kata"));
console.log(cek_kata("2 pasang sandal hilang"));
console.log(cek_kata(33));



