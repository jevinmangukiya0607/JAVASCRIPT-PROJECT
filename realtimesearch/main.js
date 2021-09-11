const wrapper = document.querySelector(".wrapper input");

wrapper.addEventListener("keyup", (e)=>{
    let search = document.querySelector("#text-search").value;
    let para = document.querySelector("#para");

    search = search.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");

    let pattern = new RegExp(`${search}`, "gi");

    para.innerHTML = para.textContent.replace(pattern, match => `<mark>${match}</mark>`);
});