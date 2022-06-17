const player = new Object();

player.sprite = new Sprite({
	position: {
		x: 0,
		y: 0
	},
	velocity: 5,
	image: images.playerDown,
	frames: {
		max: 4
	}
	})

// After the player's sprite image is loaded, set the player's sprite's position to the center of the canvas and set length and width of sprite 
player.sprite.image.onload = () => {
	player.sprite.position = images.centerImage(canvas, player.sprite.image)
	player.sprite.width = player.sprite.image.width / player.sprite.frames.max
	player.sprite.height = player.sprite.image.height
}


player.actions = new Object()

const moveWithPlayer = [map.sprite, ...map.boundaries]

player.actions.movePlayer = function(direction) {
	translations.directionToPlayerImage(direction)
	let { offsetX, offsetY } = translations.directionToXYOffset(direction, player.sprite.velocity)
	if ( ! collisions.collisionDetected(player.sprite, offsetX, offsetY)) {
		player.sprite.moving = true
		moveWithPlayer.forEach(movable => {
			movable.position.x += offsetX
			movable.position.y += offsetY
		})
	}
}