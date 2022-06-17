const images = new Object()

images.map = new Image()
images.map.src = './img/Map.png'

images.boundary = new Image()
images.boundary.src = './img/boundary.png'

images.playerDown = new Image()
images.playerDown.src = './img/playerDown.png'

images.playerUp = new Image()
images.playerUp.src = './img/playerUp.png'

images.playerRight = new Image()
images.playerRight.src = './img/playerRight.png'

images.playerLeft = new Image()
images.playerLeft.src = './img/playerLeft.png'

images.catDown = new Image()
images.catDown.src = './img/catDown.png'

images.centerImage = function centerImage(canvas, image) {
  const x = canvas.width / 2 - image.width / 2
  const y = canvas.height / 2 - image.height / 2
  return {x, y}
}
