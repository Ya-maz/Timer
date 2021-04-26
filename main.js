let deadline = '2021-11-21'

getTimerRemaining = (endTime) => {
    let total = Date.parse(endTime) - Date.parse(new Date()), 
        seconds = Math.floor((total/1000) % 60),
        minutes = Math.floor((total/1000/60) % 60),
        hours = Math.floor((total/1000/60/60) % 24),
        days = Math.floor((total/1000/60/60/ 24))

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    }
}

setClock = (id, endTime) => {
    let timer = document.getElementById(id),
        days = document.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        clock = setInterval(updateClock, 1000)

    function updateClock() {
        let t = getTimerRemaining(endTime)
        days.textContent = t.days
        hours.textContent = t.hours
        minutes.textContent = t.minutes
        seconds.textContent = t.seconds

        if(t.total <= 0){
            clearInterval(clock)
        }
    }
    
       
        

    
}

setClock('timer', deadline)