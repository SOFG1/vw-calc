//inputs
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')

//values
const value1 = document.getElementById('val1')
const value2 = document.getElementById('val2')
const value3 = document.getElementById('val3')

//buttons
const button1 = document.getElementById('copy1')
const button2 = document.getElementById('copy2')
const button3 = document.getElementById('copy3')


function onChange() {
    const val1 = Number(input1.value)
    const val2 = Number(input2.value)
    const val3 = Number(input3.value)

    const result1 = val1 / val2
    const result2 = val1 / val3
    let result3 = `clamp(${result2.toFixed()}px, ${result1.toFixed(2)}vw, ${val1.toFixed()}px)`
    if(val1 < 0) {
        result3 = `clamp(${val1.toFixed()}px, ${result1.toFixed(2)}vw, ${result2.toFixed()}px)`
    }

    value1.innerText = result1.toFixed(2) + 'vw'
    value2.innerText = result2.toFixed() + 'px'
    value3.innerText = result3
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


button3.addEventListener('click', () => {
    navigator.clipboard.writeText(value3.innerText);
})
