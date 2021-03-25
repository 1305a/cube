const cube1 = document.querySelector('.cube1')
const cube2 = document.querySelector('.cube2')
const cube3 = document.querySelector('.cube3')
const cube4 = document.querySelector('.cube4')
const cube5 = document.querySelector('.cube5')
const cube6 = document.querySelector('.cube6')

function moveCube (cube,direction) {
    const cubeList = []
    cubeList[0] = {order: parseInt(cube1.style.order), cube: cube1}
    cubeList[1] = {order: parseInt(cube2.style.order), cube: cube2}
    cubeList[2] = {order: parseInt(cube3.style.order), cube: cube3}
    cubeList[3] = {order: parseInt(cube4.style.order), cube: cube4}
    cubeList[4] = {order: parseInt(cube5.style.order), cube: cube5}
    cubeList[5] = {order: parseInt(cube6.style.order), cube: cube6}
    
    console.log (cubeList)
    cubeList.sort (function(a,b) {
        //console.log (a.order-b.order)
        return a.order-b.order
    })
    console.log (cubeList)

    const index = cubeList.findIndex (function (cubes) {
        return cubes.cube === cube
    })
    
    if (direction === 'right')
        if (index < cubeList.length-1) {
            buf = cubeList[index]
            cubeList[index] = cubeList[index+1]
            cubeList[index+1] = buf

            cubeList.forEach (function(item, i, arr) {
                item.cube.style.order = i
            })
        }
    else if (direction === 'left')
        console.log(index)
        if (index > 0) {
            buf = cubeList[index]
            cubeList[index] = cubeList[index-1]
            cubeList[index-1] = buf

            cubeList.forEach (function(item, i, arr) {
                item.cube.style.order = i
            })
        }

}


cube1.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube (cube1,'right')
    // const cubeList = []
    // cubeList[0] = {order: parseInt(cube1.style.order), cube: cube1}
    // cubeList[1] = {order: parseInt(cube2.style.order), cube: cube2}
    // cubeList[2] = {order: parseInt(cube3.style.order), cube: cube3}
    // cubeList[3] = {order: parseInt(cube4.style.order), cube: cube4}
    // cubeList[4] = {order: parseInt(cube5.style.order), cube: cube5}
    // cubeList[5] = {order: parseInt(cube6.style.order), cube: cube6}
    
    // cubeList.sort(function(a,b) {
    //     return a.order-b.order
    // })

    // const index = cubeList.findIndex (function (cubes) {
    //     return cubes.cube === cube1
    // })
    
    // if (index < cubeList.length-1) {
    // buf = cubeList[index]
    // cubeList[index] = cubeList[index+1]
    // cubeList[index+1] = buf

    // cubeList.forEach (function(item, i, arr) {
    //     //console.log(item.cube)
    //     item.cube.style.order = i
    // })
    // }
})

cube1.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube (cube1,'left')
})

cube2.addEventListener ('click', (event) => {
    event.preventDefault()

})