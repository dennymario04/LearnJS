function MyIntro(){
    let Nama = "Denny Mario";
    document.getElementById("intro").innerHTML = Nama;
}
console.log(MyIntro());

function myMainTitle(){
    const mainTitle = "JS Pass Checker";
    document.getElementById("title").textContent = mainTitle;
}
console.log(myMainTitle());

function passCheck(){
    let check = document.forms["myForm"]["password"].value;
    let hitungCek = check.length;
    if(hitungCek < 8){
        alert("Password anda harus lebih dari 8 Huruf !!");
        return false;
    }else{
        alert("OK!");
        return false;
    }
}