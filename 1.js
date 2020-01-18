function myBiodata(nama,angka){

var biodata =
{
"name" : nama,
"age"  : angka,
"address" : "Bantar Peuteuy Rt01/04 No.8 Tajur, Bogor Timur",
"hobbies" : ["Running", "Badminton", "Swimming", "Playing Guitar"],
"is_married" : false,
"list_school":
[
  {
   "name"    : "SMK Informatika Pesat",
   "year_in" : "2012",
   "year_out": "2015",
   "major"   : "TKJ"
  },
  {
   "name"    : "Universitas Gunadarma",
   "year_in" : "2015",
   "year_out": "2019",
   "major"   : "Sistem Komputer"
  }
],  
"skills" : 
[
  {
   "name" : "Computer Networking",
   "level": "beginner" 
  },
  {
   "name" : "Database", 
   "level": "beginner" 
  },
  {
   "name" : "Web Programming",
   "level": "beginner" 
  }
  
],

"interest_in_coding" : true
  
};
return biodata
}
console.log(myBiodata('bagas prasetyadi', 22))

