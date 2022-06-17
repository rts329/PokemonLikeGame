function mainloop() {
	// Loop this function indefinitely.
	window.requestAnimationFrame(mainloop)

	map.sprite.draw()
	map.boundaries.forEach((boundary) => {
		boundary.draw()
	})
	player.sprite.draw()
	player.sprite.moving = false

}

mainloop()