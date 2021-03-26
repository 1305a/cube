const cube1 = document.querySelector('.cube1')
const cube2 = document.querySelector('.cube2')
const cube3 = document.querySelector('.cube3')
const cube4 = document.querySelector('.cube4')
const cube5 = document.querySelector('.cube5')
const cube6 = document.querySelector('.cube6')
const rnd = document.querySelector('.button-random')

function moveCube(cube, direction) {
    
    const mapPositions = new Map()
    mapPositions.set(parseInt(cube1.style.order), cube1)
    mapPositions.set(parseInt(cube2.style.order), cube2)
    mapPositions.set(parseInt(cube3.style.order), cube3)
    mapPositions.set(parseInt(cube4.style.order), cube4)
    mapPositions.set(parseInt(cube5.style.order), cube5)
    mapPositions.set(parseInt(cube6.style.order), cube6)

    if (direction === 'right') {
        if (parseInt(cube.style.order) < 5) {
            const next = mapPositions.get((parseInt(cube.style.order)+1))
            cube.style.order = parseInt(cube.style.order) + 1
            next.style.order = parseInt(next.style.order) - 1
        }
    }
    else if (direction === 'left') {
        if (parseInt(cube.style.order) > 0) {
            const previous = mapPositions.get((parseInt(cube.style.order)-1))
            cube.style.order = parseInt(cube.style.order) - 1
            previous.style.order = parseInt(previous.style.order) + 1
        }
    }
}

cube1.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube(cube1,'left')
})

cube1.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube(cube1,'right')
})

cube2.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube(cube2,'left')
})

cube2.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube(cube2,'right')
})
cube3.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube(cube3,'left')
})

cube3.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube(cube3,'right')
})
cube4.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube(cube4,'left')
})

cube4.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube(cube4,'right')
})
cube5.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube(cube5,'left')
})

cube5.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube(cube5,'right')
})
cube6.addEventListener ('click', (event) => {
    event.preventDefault()
    moveCube(cube6,'left')
})

cube6.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    moveCube(cube6,'right')
})

rnd.addEventListener ('click', (event) => {
    event.preventDefault()
    const randomArray=[1, 2, 3, 4, 5, 6]
    randomArray.sort(function(){ 
    return 0.5 - Math.random()
    })
    cube1.style.order = randomArray[0]
    cube2.style.order = randomArray[1]
    cube3.style.order = randomArray[2]
    cube4.style.order = randomArray[3]
    cube5.style.order = randomArray[4]
    cube6.style.order = randomArray[5]
})




/*function moveCube (cube,direction) {
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
    //moveCube (cube1,'right')
    const cubeList = []
    cubeList[0] = {order: parseInt(cube1.style.order), cube: cube1}
    cubeList[1] = {order: parseInt(cube2.style.order), cube: cube2}
    cubeList[2] = {order: parseInt(cube3.style.order), cube: cube3}
    cubeList[3] = {order: parseInt(cube4.style.order), cube: cube4}
    cubeList[4] = {order: parseInt(cube5.style.order), cube: cube5}
    cubeList[5] = {order: parseInt(cube6.style.order), cube: cube6}
    
    console.log(cubeList)
    cubeList.sort(function(a,b) {
        return a.order-b.order
    })
    console.log(cubeList)

    const index = cubeList.findIndex (function (cubes) {
        return cubes.cube === cube1
    })
    
    if (index < cubeList.length-1) {
    buf = cubeList[index]
    cubeList[index] = cubeList[index+1]
    cubeList[index+1] = buf

    cubeList.forEach (function(item, i, arr) {
        //console.log(item.cube)
        item.cube.style.order = i
    })
    }
    cubeList.length = 0
})

cube1.addEventListener ('contextmenu', (event) => {
    event.preventDefault()
    //moveCube (cube1,'left')
})*/