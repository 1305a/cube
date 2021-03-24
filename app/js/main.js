const cube1 = document.querySelector('.cube1')
const cube2 = document.querySelector('.cube2')
const cube3 = document.querySelector('.cube3')
const cube4 = document.querySelector('.cube4')
const cube5 = document.querySelector('.cube5')
const cube6 = document.querySelector('.cube6')


cube1.addEventListener ('click', (event) => {
    event.preventDefault()
    //cube1.style.color = 'red'
    //const cube1Align = cube1.getAttribute('align')
    //const cube1Class = cube1.getAttribute('class')
    //console.log('привет', cube1Order)
    //console.log(cube1.attributes)
    //cube1.style.order = '3'
    const cube1Style = cube1.getAttribute('style')
    console.log(cube1Style)
})

cube2.addEventListener ('click', (event) => {
    event.preventDefault()
    const cube1Class = cube2.getAttribute('class')
    const tableStyle = getComputedStyle(cube2,null)
    console.log(tableStyle.order)
})