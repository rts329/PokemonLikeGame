translations = new Object()

translations.directionToXYOffset = function(direction, velocity) {
	let offsetX = 0
	let offsetY = 0
	switch(direction) {
		case 'left':
			offsetX = velocity
			offsetY = 0
			break
		case 'right':
			offsetX = -1 * velocity
			offsetY = 0
			break
		case 'up':
			offsetX = 0
			offsetY = velocity
			break
		case 'down':
			offsetX = 0
			offsetY = -1 * velocity
			break
	}
	return { offsetX, offsetY }
}

translations.directionToPlayerImage = function(direction) {
	switch (direction) {
		case 'left':
			player.sprite.image = images.playerLeft
			break
		case 'right':
			player.sprite.image = images.playerRight
			break
		case 'up':
			player.sprite.image = images.playerUp
			break
		case 'down':
			player.sprite.image = images.playerDown
			break
	}
}