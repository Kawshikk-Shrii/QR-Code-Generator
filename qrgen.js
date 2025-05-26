let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let generateBtn = document.querySelector("#generate");
let img = document.querySelector("#qr-img");
let downloadBtn = document.getElementById("download-btn");
let preInput;

generateBtn.onclick=function(){
    let input = qrInput.value.trim();
    if( !input || input === preInput) return;
    else{
        preInput = input;
        generateBtn.innerText = "Generating the QR code ...";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;
        img.onload=function(){
            container.classList.add("active");
            generateBtn.innerText = "Generate QR Code";
            downloadBtn.style.display = "block";
        }
    }
}
downloadBtn.onclick = function () {
    let link = document.createElement("a");
    link.href = img.src;
    link.download = "my-qr-code.png";
    link.click();
};
