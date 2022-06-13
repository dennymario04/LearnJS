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

//Accessors(Getter and Setter)

const infoTambahan={
    lulusan : "",
    kelas : "IK 1801",
    pekerjaaan : "EDP OPS",
    hobby : "Renang",
    get pekerjaaan(){
        return this.pekerjaaan;
    },
    set info(lulusan){
        this.lulusan = lulusan;
    },
    printAll : function(){
        return "Asal Kampus : "+this.lulusan+",\n Kelas: "+this.kelas;
    }
}
infoTambahan.info ="LP3I Binjai";
cekData = infoTambahan.printAll();
console.log(cekData)
