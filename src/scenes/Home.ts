
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// background
		const background = this.add.image(0, 0, "background");
		background.setOrigin(0, 0);

		// user_info
		const user_info = this.add.container(0, 0);

		// image_1
		const image_1 = this.add.image(53, 27, "avatar_frame");
		image_1.setOrigin(0, 0);
		user_info.add(image_1);

		// image_2
		const image_2 = this.add.image(199, 51.779998779296875, "name_frame");
		image_2.setOrigin(0, 0);
		user_info.add(image_2);

		// text_1
		const text_1 = this.add.text(199, 114.91000366210938, "", {});
		text_1.text = "AGE";
		text_1.setStyle({ "fontFamily": "Irish Grover", "fontStyle": "bold" });
		user_info.add(text_1);

		// image_3
		const image_3 = this.add.image(242, 108.5999984741211, "other_frame");
		image_3.scaleX = 0.83640625;
		image_3.scaleY = 0.527;
		image_3.setOrigin(0, 0);
		user_info.add(image_3);

		// image_4
		const image_4 = this.add.image(297.5799865722656, 109.76000213623047, "status_frame");
		image_4.setOrigin(0, 0);
		user_info.add(image_4);

		// have_cloth
		const have_cloth = this.add.ellipse(199, 150.07000732421875, 49.87, 49.87);
		have_cloth.setOrigin(0, 0);
		have_cloth.isFilled = true;
		have_cloth.fillColor = 2105376;
		user_info.add(have_cloth);

		// have_house
		const have_house = this.add.ellipse(266, 150.07000732421875, 49.87, 49.87);
		have_house.setOrigin(0, 0);
		have_house.isFilled = true;
		have_house.fillColor = 2105376;
		user_info.add(have_house);

		// have_desire
		const have_desire = this.add.ellipse(332, 150.07000732421875, 49.87, 49.87);
		have_desire.setOrigin(0, 0);
		have_desire.isFilled = true;
		have_desire.fillColor = 2105376;
		user_info.add(have_desire);

		// have_cloth
		const have_cloth = this.add.text(204.43, 205.93, "", {});
		have_cloth.text = "CLOTH";
		have_cloth.setStyle({ "fontFamily": "Irish Grover", "fontSize": "14px" });
		user_info.add(have_cloth);

		// have_house
		const have_house = this.add.text(268.87, 205.93, "", {});
		have_house.text = "HOUSE";
		have_house.setStyle({ "fontFamily": "Irish Grover", "fontSize": "14px" });
		user_info.add(have_house);

		// have_desire
		const have_desire = this.add.text(333.5, 205.93, "", {});
		have_desire.text = "DESIRE";
		have_desire.setStyle({ "fontFamily": "Irish Grover", "fontSize": "14px" });
		user_info.add(have_desire);

		// menu
		const menu = this.add.container(664, 46.01);

		// item
		const item = this.add.container(0, 0);
		menu.add(item);

		// image_5
		const image_5 = this.add.image(0, 0, "other_frame");
		image_5.setOrigin(0, 0);
		item.add(image_5);

		// menu_item_notification
		const menu_item_notification = this.add.text(90, 38.9900016784668, "", {});
		menu_item_notification.text = "New text";
		item.add(menu_item_notification);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
