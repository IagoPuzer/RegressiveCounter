function starTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;

    setInterval(function () {
        days = parseInt(timer / 86400, 10)
        hours = parseInt(timer / 3600, 10) % 24
        minutes = parseInt(timer / 60, 10) % 60
        seconds = parseInt(timer % 60, 10)

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds

        if (--timer < 0) {
            timer = duration
        }

    }, 1000);
}

window.onload = function () {
    let duration = 86400 // Duração de 1 dia em segundos
    let display = document.querySelector('#counter') // elemento para exibir o timer
    starTimer(duration, display) // iniciar a função
}