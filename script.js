//inputs
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')

//values
const value1 = document.getElementById('val1')
const value2 = document.getElementById('val2')

//buttons
const button1 = document.getElementById('copy1')
const button2 = document.getElementById('copy2')


function onChange() {
    const val1 = Number(input1.value)
    const val2 = Number(input2.value)
    const val3 = Number(input3.value)

    const result1 = val1 / val2
    const result2 = val1 / val3

    value1.innerText = result1.toFixed(2) + 'vw'
    value2.innerText = result2.toFixed() + 'px'
}


input1.addEventListener('input', onChange)
input2.addEventListener('input', onChange)
input3.addEventListener('input', onChange)


button1.addEventListener('click', () => {
    navigator.clipboard.writeText(value1.innerText);
})

button2.addEventListener('click', () => {
    navigator.clipboard.writeText(value2.innerText);
    
})
