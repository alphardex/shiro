CSS.registerProperty({
  name: '--cube-width',
  syntax: '<length>',
  initialValue: 0,
  inherits: true
})

CSS.registerProperty({
  name: '--cube-height',
  syntax: '<length>',
  initialValue: 0,
  inherits: true
})

CSS.registerProperty({
  name: '--cube-depth',
  syntax: '<length>',
  initialValue: 0,
  inherits: true
})

const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
const sleep = time => new Promise((resolve) => setTimeout(resolve, time));

const pressCube = async (i, j) => {
  const cubeId = i * row + j
  const cube = cubes[cubeId]
  if (cube && !cube.classList.contains('active')) {
    cube.classList.add('active')
    await sleep(100)
    pressCube(i - 1, j)
    pressCube(i + 1, j)
    pressCube(i, j - 1)
    pressCube(i, j + 1)
    await sleep(600)
    cube.classList.add('active-2')
    await sleep(100)
    cube.className = 'cube'
  }
}

const row = 8
const col = 8
const cubes = document.querySelectorAll('.cube')
const cubeIds = initialize2DArray(row, col)
cubeIds.forEach((cols, i) => {
  cols.forEach((n, j) => {
    const cubeId = i * row + j
    const cube = cubes[cubeId]
    cube.addEventListener('click', async () => {
      pressCube(i, j)
    })
  })
})