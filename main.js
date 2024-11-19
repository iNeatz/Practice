window.addEventListener('load', function () {
	/**@type {HTMLCanvasElement} */

	const canvas = document.getElementById('canvas1')
	const ctx = canvas.getContext('2d')
	canvas.width = 1280
	canvas.height = 720

	ctx.fillStyle = "white"
	ctx.lineWidth = 3
	ctx.strokeStyle = "white"

	class Player {
		constructor(game) {
			this.game = game
			this.collisionX = this.game.width * 0.5
			this.collisionY = this.game.height * 0.5
			this.collisionRadius = 30
		}
		draw() {
			ctx.beginPath()
			ctx.arc(this.collisionX, this.collisionY, this.collisionRadius, 0, 2 * Math.PI)
			ctx.stroke()
		}
	}

	class Game {
		constructor(canvas) {
			this.canvas = canvas
			this.width = this.canvas.width
			this.height = this.canvas.height
			this.player = new Player(this)
			this.mouse = {
				x: this.width * 0.5,
				y: this.height * 0.5,
				pressed: false
			}

			//event listener mouse click
			this.canvas.addEventListener('mousedown', (e) => {
				this.mouse.x = e.offsetX
				this.mouse.y = e.offsetY
				this.mouse.pressed = true
			})
			this.canvas.addEventListener('mouseup', (e) => {
				this.mouse.x = e.offsetX
				this.mouse.y = e.offsetY
				this.mouse.pressed = false
			})
			this.canvas.addEventListener('mousemove', (e) => {
				this.mouse.x = e.offsetX
				this.mouse.y = e.offsetY
				console.log(this.mouse.x, this.mouse.y)
			})
		}
		render() {
			this.player.draw()
		}
	}

	const game = new Game(canvas)
	game.render()

	console.log(game)

	const animate = () => {}
})
