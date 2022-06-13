const biodata ={
    firstName : "Denny",
    secondName : "Mario",
    Umur : 50,
    favFood :"Bakso",
    fullName : function(){
        return this.firstName+" "+this.secondName;
        
    }
}
nama = biodata.fullName();
console.log(nama);

document.getElementById("intro").textContent = nama;