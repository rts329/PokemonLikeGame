const keybinds = {
	w: {
		pressed: false,
		action: () => player.actions.movePlayer('up')
	},
	a: {
		pressed: false,
		action: () => player.actions.movePlayer('left')
	},
	s: {
		pressed: false,
		action: () => player.actions.movePlayer('down')
	},
	d: {
		pressed: false,
		action: () => player.actions.movePlayer('right')
	},
	ArrowUp: {
		pressed: false,
		action: () => player.actions.movePlayer('up')
	},
	ArrowLeft: {
		pressed: false,
		action: () => player.actions.movePlayer('left')
	},
	ArrowDown: {
		pressed: false,
		action: () => player.actions.movePlayer('down')
	},
	ArrowRight: {
		pressed: false,
		action: () => player.actions.movePlayer('right')
	}
}