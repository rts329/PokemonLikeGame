const map = new Object();

map.widthInTiles = 70
map.heightInTiles = 40

map.sprite = new Sprite({
	position: {
		x: -1450,
		y: -780
	},
	image: images.map
})

// Set boundaries once collisions are loaded, or leave empty if there are no collisions
map.boundaries = []
