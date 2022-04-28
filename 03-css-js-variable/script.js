
const inputs = document.querySelectorAll('input')

function inputListener(){
    const filter = this.name
    const suffix = this.dataset.unit
    const value = this.value
    console.log(value)
    document.body.style.setProperty(`--${filter}`,`${value}${suffix?suffix:''}`)
}
inputs.forEach((input)=>{
    input.addEventListener('change',inputListener)
    input.addEventListener('mousemove',inputListener)
})