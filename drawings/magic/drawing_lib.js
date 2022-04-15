const canvas = document.getElementsByTagName("canvas")[0]
const context = canvas.getContext("2d")

const mapX = (a) => {
  return ((a / 100 + 1) / 2) * canvas.width
}
const mapY = (a) => {
  return ((a / 100 + 1) / 2) * canvas.height
}
const map = (pos) => {
  return [mapX(pos[0]), mapY(pos[1])]
}

const line = (pt1, pt2) => {
  pt1 = map(pt1)
  pt2 = map(pt2)
  context.beginPath()
  context.moveTo(pt1[0], pt1[1])
  context.lineTo(pt2[0], pt2[1])
  context.stroke()
}

const redraw = () => {
  context.fillStyle = "black"
  context.fillRect(0, 0, window.innerWidth, window.innerHeight)
  context.strokeStyle = "white"
  context.lineWidth = "1.02"
  draw()
}

let turtle_position = [0, 0]
let turtle_direction = 0
const set_position = (pt) => {
  turtle_position = pt
}
const set_orientation = (angle_in_degrees) => {
  turtle_direction = (angle_in_degrees / 180) * Math.PI
}
const forward = (distance) => {
  const next_pos = [
    turtle_position[0] + distance * Math.cos(turtle_direction),
    turtle_position[1] + distance * Math.sin(turtle_direction),
  ]
  line(turtle_position, next_pos)
  turtle_position = next_pos
}
const turn = (angle_delta_in_degrees) => {
  turtle_direction -= (angle_delta_in_degrees / 180) * Math.PI
}

function initialize() {
  // Register an event listener to call the resizeCanvas() function
  // each time the window is resized.
  window.addEventListener("resize", resizeCanvas, false)
  // Draw canvas border for the first time.
  resizeCanvas()
}

// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
  const margin = 20
  const size = Math.min(window.innerHeight, window.innerWidth) - 2 * margin
  canvas.width = size
  canvas.height = size
  canvas.style.left = window.innerWidth / 2 - canvas.width / 2 + "px"
  canvas.style.top = window.innerHeight / 2 - canvas.height / 2 + "px"
  redraw(context)
}

initialize()
