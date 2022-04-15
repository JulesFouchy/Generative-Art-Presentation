const order = ["_intro", "snowflake", "after"]

const predecessor = (url) => {
  const idx = order.indexOf(url)
  return order[Math.min(Math.max(idx - 1, 0), order.length - 1)]
}

const successor = (url) => {
  const idx = order.indexOf(url)
  return order[Math.min(Math.max(idx + 1, 0), order.length - 1)]
}

const current_file = () => {
  const url = window.location.pathname
  return url.substring(url.lastIndexOf("/") + 1, url.lastIndexOf("."))
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    window.open(`./${predecessor(current_file())}.html`, "_self")
  }
  if (e.key === "ArrowRight") {
    window.open(`./${successor(current_file())}.html`, "_self")
  }
  redraw()
})
