actions = new Object()

actions.movePlayer =  function(direction) {
	let { offsetX, offsetY } = translations.directionToXYOffset(direction, player.sprite.velocity)
	for (let i = 0; i < map.boundaries.length; i++) {
		const boundary = map.boundaries[i]
		if (checks.playerBoundaryCollision( offsetX, offsetY )) {
			player.sprite.moving = false
			break
		}
	}
	player.sprite.moving = true
	movables.forEach(movable => {
		movable.position.x += offsetX
		movable.position.y += offsetY
	})
}