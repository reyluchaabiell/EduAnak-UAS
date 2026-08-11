function pesan(teks){

document.getElementById("popup").style.display="block";

document.getElementById("isiPesan").innerHTML=teks;

}

function tutupPopup(){

document.getElementById("popup").style.display="none";

}

// Menutup popup jika klik di luar

window.onclick=function(event){

let popup=document.getElementById("popup");

if(event.target==popup){

popup.style.display="none";

}

}

// Animasi muncul card

const card=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

card.forEach((item)=>{

const posisi=item.getBoundingClientRect().top;

if(posisi<window.innerHeight-100){

item.style.opacity="1";
item.style.transform="translateY(0)";

}

});

});
