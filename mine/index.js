/*
	Initialize section
*/
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576
canvas.style.background = 'white'

function animate() {
	// Loop this function indefinitely.
	window.requestAnimationFrame(animate)

	map.sprite.draw()
	map.boundaries.forEach((boundary) => {
		boundary.draw()
	})
	player.sprite.draw()
	player.sprite.moving = false
	if (keybinds.ArrowUp.pressed) {
		keybinds.ArrowUp.action()
	}
	else if (keybinds.ArrowDown.pressed) {
		keybinds.ArrowDown.action()
	}
	else if (keybinds.ArrowRight.pressed) {
		keybinds.ArrowRight.action()
	}
	else if (keybinds.ArrowLeft.pressed) {
		keybinds.ArrowLeft.action()
	}
}

let lastKeyPressed = ''

window.addEventListener('keydown', (event) => {
	switch (event.key) {
		case 'ArrowRight':
			keybinds.ArrowRight.pressed = true
			lastKeyPressed = 'ArrowRight'
			break
		case 'd':
			keybinds.d.pressed = true
			lastKeyPressed = 'd'
			break
		case 'ArrowLeft':
			keybinds.ArrowLeft.pressed = true
			lastKeyPressed = 'ArrowLeft'
			break
		case 'a':
			keybinds.a.pressed = true
			lastKeyPressed = 'a'
			break
		case 'ArrowDown':
			keybinds.ArrowDown.pressed = true
			lastKeyPressed = 'ArrowDown'
			break
		case 's':
			keybinds.s.pressed = true
			lastKeyPressed = 's'
			break
		case 'ArrowUp':
			keybinds.ArrowUp.pressed = true
			lastKeyPressed = 'ArrowUp'
			break
		case 'w':
			keybinds.w.pressed = true
			lastKeyPressed = 'w'
			break
	}
})

window.addEventListener('keyup', (event) => {
	switch (event.key) {
		case 'ArrowRight':
			keybinds.ArrowRight.pressed = false
			break
		case 'd':
			keybinds.d.pressed = false
			break
		case 'ArrowLeft':
			keybinds.ArrowLeft.pressed = false
			break
		case 'a':
			keybinds.a.pressed = false
			break
		case 'ArrowDown':
			keybinds.ArrowDown.pressed = false
			break
		case 's':
			keybinds.s.pressed = false
			break
		case 'ArrowUp':
			keybinds.ArrowUp.pressed = false
			break
		case 'w':
			keybinds.w.pressed = false
			break
	}
})

animate()

// animate()

