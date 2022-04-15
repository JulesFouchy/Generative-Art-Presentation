const canvas = document.getElementsByTagName("canvas")[0]
const context = canvas.getContext("2d")

const mapX = (a) => {
  return ((a / 100 + 1) / 2) * canvas.width
}
const mapY = (a) => {
  return ((a / 100 + 1) / 2) * canvas.height
}

const line = (pt1, pt2) => {
  context.moveTo(mapX(pt1[0]), mapY(pt1[1]))
  context.lineTo(mapX(pt2[0]), mapY(pt2[1]))
  context.stroke()
}

const line_forward = (distance, angle) => {}

const redraw = () => {
  context.fillStyle = "black"
  context.fillRect(0, 0, window.innerWidth, window.innerHeight)
  context.strokeStyle = "white"
  context.lineWidth = "0.02"
  draw()
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
