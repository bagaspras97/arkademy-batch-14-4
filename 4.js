function cetak_gambar(number){
  var reg = /[0-9]/;
  var dua = 2;
  var satu = 1;
  if (reg.test(number) && number%dua === 1){
    var panjang = number;
      console.log("--- panjang ---");
     for(i=1; i<=panjang; i++){
       for(dua; i<=dua; i++){
         console.log("*  =   =   =  *");
//          console.log(i)
       }for(satu; satu+2>=i; i++){
        console.log("*  *   *   *  *");
//         console.log(i);
       }for(dua; dua+3>=i; i++){
         console.log("*  =   =   =  *");
//          console.log(i)
       }
     }
  }else{
    console.log("parameter harus angka ganjil");
  }
 
}

cetak_gambar(5);
