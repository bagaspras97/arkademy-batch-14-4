//bagian 1
function usernameValidity(){
var user = prompt("masukkan nama user :")
var reg = /^[a-z][a-zA-Z1-9_]{5,12}[a-zA-Z1-9]$/
if (reg.test(user)){
  alert(true)
  console.log(user)
}else{
  alert(false)
  console.log("nama user yang anda masukkan tidak sesuai")
}
}

usernameValidity()

//bagian 2
function passwordValidity(){
var pass = prompt("masukkan password :")
var regP = /^[1-9][A-Z]{5}[\W]$/
if (regP.test(pass)){
  alert(true)
  console.log(pass)
}else{
  alert(false)
  console.log("password yang anda masukkan tidak sesuai")
}
}

passwordValidity()