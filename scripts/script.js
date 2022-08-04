const startBtn = document.querySelector(".down-btn");
const timeOut = document.querySelector(".timeOut");
const modal = document.querySelector(".modal");
const inputNumber = document.querySelector(".number");

window.addEventListener("load" , () => {
    if(navigator.onLine) {
console.log("Online");
startBtn.addEventListener("click" , () => {
    if(inputNumber.value === "" || inputNumber.lenght < 12) {
        alert("لطفا از صحت شماره ی وارد شده اطمینان حاصل کنید.");
    } else {


    startBtn.classList.add("editing");
    modal.classList.add("show");
    timeOut.classList.add("showing");
var contentTime = 0;
    setInterval(() => {
        contentTime++;
        timeOut.value = contentTime;
    } , 1000);
}
})
    }else{
        console.log("offline");
        alert("اینترنت قطع شد ، لطفا اتصال به اینترنت خود را بررسی کنید.")
    }
})