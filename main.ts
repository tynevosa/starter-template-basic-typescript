
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1440,
		height: 1024,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Home", Home);
    game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload/asset-pack.json");
	}

	create() {
		
        this.scene.start("Preload");
	}

}