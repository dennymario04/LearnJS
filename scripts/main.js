/*
function MyIntro(){
    let Nama = "Denny Mario";
    document.getElementById("intro").innerHTML = Nama;
}
*/
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

function passCheck2(){
    let checking = document.forms["PassChecker2"]["myPass"].value;
    let checkLength = checking.length;
    if(checkLength <=7){
        document.getElementById("p2").textContent = "Too Weak!";
        document.getElementById("p2").style.color = "red";
        return false;
    }else if(checkLength == 8){
        document.getElementById("p2").textContent = "Its Oke!";
        document.getElementById("p2").style.color = "yellow";
        return false;
    }else if(checkLength > 10){
        document.getElementById("p2").textContent = "So Strong!!";
        document.getElementById("p2").style.color = "green";
        return false;
    }else{
        document.getElementById("p2").textContent = "Input Password";
        document.getElementById("p2").style.color = "black";
        return false;
    }
}

function passCheck3(){
    let ketik = document.forms["myForm3"]["password3"].value;
    let cekKetikan = ketik.length;

    if(cekKetikan <= 7){
        document.getElementById("p3").textContent = "Too Weak!";
        document.getElementById("p3").style.color = "red";
        return false;
    }else if(cekKetikan == 8){
        document.getElementById("p3").textContent = "ITS OK!";
        document.getElementById("p3").style.color = "yellow";
        return false;
    }else if(cekKetikan>=14){
        document.getElementById("p3").textContent = "So Strong!";
        document.getElementById("p3").style.color = "green";
        return false;
    }else{
        return false;
    }
}
