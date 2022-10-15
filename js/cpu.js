const firstPlayer = document.getElementById("first");
const secondPlayer = document.getElementById("second");
const cpu = document.getElementById("CPU");
const playerVsPlayer = document.getElementById("Player");

firstPlayer.addEventListener("change", () =>{
    sessionStorage.setItem("firstPlayer", firstPlayer.value)
})
secondPlayer.addEventListener("change", () =>{
    sessionStorage.setItem("secondPlayer", secondPlayer.value)
})

cpu.addEventListener("click",() =>{
    sessionStorage.setItem("cpu",true)
})
playerVsPlayer.addEventListener("click",() =>{
    sessionStorage.setItem("cpu",false)
})


