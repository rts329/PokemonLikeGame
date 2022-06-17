checks = new Object()

checks.playerBoundaryCollision = function(offsetX = 0, offsetY = 0) {
	if (collisions.rectangularCollision({
			rectangle1: player.sprite,
			rectangle2: {
				...boundary,
				position: {
					x: boundary.position.x + offsetX,
					y: boundary.position.y + offsetY
				}
			}
		})
	) {
		return true	
	}
	else {
		return false
	}
}