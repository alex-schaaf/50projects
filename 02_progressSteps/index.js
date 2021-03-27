const nNodes = 4
const activeColor = "cornflowerblue"
const inactiveColor = "lightgray"

let currentNode = 1

btnPrev = document.getElementById("prev")
btnNext = document.getElementById("next")
toggleButtons()

getCurrentNode(currentNode).style.border = `2px solid ${activeColor}`

function next() {
  if (currentNode < nNodes) {
    currentNode++

    let node = getCurrentNode(currentNode)
    node.style.border = `2px solid ${activeColor}`

    let edge = getCurrentEdge(currentNode)
    edge.style.backgroundSize = "300% 100%"
    edge.style.backgroundPosition = "left bottom"
  }
  toggleButtons()
}

function prev() {
  if (currentNode > 1) {
    let edge = getCurrentEdge(currentNode)
    edge.style.backgroundSize = "300% 100%"
    edge.style.backgroundPosition = "right bottom"

    let node = getCurrentNode(currentNode)
    node.style.border = `2px solid ${inactiveColor}`

    currentNode--
  }
  toggleButtons()
}


function toggleButtons() {
  if (currentNode === 1) {
    btnPrev.style.background = "lightgray"
  } else {
    btnPrev.style.background = "cornflowerblue"
  }
  if (currentNode === nNodes) {
    btnNext.style.background = "lightgray"
  } else {
    btnNext.style.background = "cornflowerblue"
  }
}

function getCurrentNode(node) {
  return document.getElementById(`node-${node}`)
}

function getCurrentEdge(node) {
  return document.getElementById(`edge-${node - 1}`)
}