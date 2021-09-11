const dropArea = document.querySelector(".drag-area");
const dragText = document.querySelector("header");
const buttonClick = document.querySelector("button");
const inputClick = document.querySelector("input");


let file;

dropArea.addEventListener("dragover" , (e)=>{
    e.preventDefault();
    dragText.textContent = "Release to Upload File";
});

dropArea.addEventListener("dragleave" , ()=>{
    dragText.textContent = "Drag & Drop to Upload File";
});

dropArea.addEventListener("drop" , (e)=>{
    e.preventDefault();
    file = e.dataTransfer.files[0];
    fileShow();
});

function fileShow(){
    
    let fileType = file.type;

    let validExtensiond = ["image/jpeg","image/jpg","image/png" ];
    if(validExtensiond.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = () =>{
            let fileURL = fileReader.result;
            let imgTag = `<img src="${fileURL}">`
            dropArea.innerHTML = imgTag;
        }
        fileReader.readAsDataURL(file);
    }
    else{
        alert("This File is not Image Type");
        dropArea.classList.remove("active");
    }
}

buttonClick.onclick = ()=>{
    buttonClick.style.color = "#ebf5fc";
    buttonClick.style.background = "#000";
    inputClick.click();
}

inputClick.addEventListener("change" , function(){
    file = this.files[0];
    fileShow();
})