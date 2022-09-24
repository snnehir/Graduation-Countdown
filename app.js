// const area
const monthsInTR = {1: "Ocak", 2: "Şubat", 3: "Mart", 4: "Nisan", 5: "Mayıs", 6: "Haziran", 7:"Temmuz", 8: "Ağustos", 9:"Eylül", 10:"Ekim", 11:"Kasım", 12: "Aralık"}
const startDate = new Date('09/26/2022')
const finishDate = new Date('06/14/2023')
const totalDays = Math.ceil(Math.abs(finishDate - startDate)/(1000*60*60*24))
const progressBarWidth = 300

window.onload = muz

function muz(){
    // calculations
    let currentDate = new Date()
    console.log(currentDate)
    let progressDone = Math.ceil((currentDate-startDate)/(1000*60*60*24)) 
    let progressPercentage = progressDone / totalDays;

    // display of progress amount
    const progressDoneElement = document.getElementById("progressDone")
    if(progressDone <= 0){
        progressDoneElement.style.width = "0px";
        progressDoneElement.textContent = "0%"
        document.getElementById("remainingDays").innerHTML = `Mezuniyete tam ${totalDays-progressDone} gün kaldı! <br> (Okul henüz başlamadı.)`
    }
    else if(progressDone >= totalDays){
        progressDoneElement.style.width = `${progressBarWidth}px`;
        progressDoneElement.textContent = "100%"
        document.getElementById("remainingDays").textContent = `Tebrikler simülasyon başarıyla tamamlandı!`
    }
    else{
        progressDoneElement.style.width = `${Math.ceil(progressBarWidth * progressPercentage)}px`; 
        progressDoneElement.textContent = `${(progressPercentage*100).toFixed(1)}%`
        document.getElementById("remainingDays").textContent = `Mezuniyete tam ${totalDays-progressDone} gün kaldı!`
    }
    // display of main progress bar
    document.getElementById("progress").style.width = `${progressBarWidth}px`; 
    // display current date and time
    const dateArr =  currentDate.toLocaleDateString().split('.') // format exp: 13.12.2000
    document.getElementById("date").textContent = `${dateArr[0]} ${monthsInTR[parseInt(dateArr[1])]} ${dateArr[2]} - ${currentDate.toLocaleTimeString()}` 
    
}
// muz function will repeat every 1 sec.
setInterval(muz, 1000);
