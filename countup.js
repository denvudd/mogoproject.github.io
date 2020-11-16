document.addEventListener('load', count())

function count() {
    document.querySelectorAll('.data-number').forEach((e) => {
        var currentNumber = 0
        var finalNumber = e.getAttribute('data-number')
        finalNumber = parseInt(finalNumber)
        var delay

        switch (true) {
            case (finalNumber < 30):
                delay = 100
                break
            case (finalNumber < 100):
                delay = 40
                break
            case (finalNumber < 300):
                delay = 10
                break
            default:
                delay = 50
                break
        }

        var increment = setInterval(() => {
            e.innerHTML = currentNumber
            if (currentNumber < finalNumber) {
                if (finalNumber > 1000) {
                    currentNumber += 100
                } else {
                    currentNumber++
                }
            } else {
                clearInterval(increment)
            }
        }, delay)
        increment
    })
}