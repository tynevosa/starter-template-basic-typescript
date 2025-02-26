"use strict";
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
class UserComponent {
    /**
     * @param gameObject The entity.
     */
    constructor(gameObject) {
        this.scene = gameObject.scene;
        const listenAwake = this.awake !== UserComponent.prototype.awake;
        const listenStart = this.start !== UserComponent.prototype.start;
        const listenUpdate = this.update !== UserComponent.prototype.update;
        const listenDestroy = this.destroy !== UserComponent.prototype.destroy;
        if (listenAwake) {
            this.scene.events.once("scene-awake", this.awake, this);
        }
        if (listenStart) {
            this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        }
        if (listenUpdate) {
            this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        }
        if (listenStart || listenUpdate || listenDestroy) {
            gameObject.on(Phaser.GameObjects.Events.DESTROY, () => {
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
                if (listenDestroy) {
                    this.destroy();
                }
            });
        }
    }
    scene;
    awake() {
        // override this
    }
    start() {
        // override this
    }
    update() {
        // override this
    }
    destroy() {
        // override this
    }
}
// You can write more code here
/* START OF COMPILED CODE */
class Home extends Phaser.Scene {
    constructor() {
        super("Home");
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    editorCreate() {
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
}
/* END OF COMPILED CODE */
// You can write more code here
// You can write more code here
/* START OF COMPILED CODE */
class Preload extends Phaser.Scene {
    constructor() {
        super("Preload");
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    editorCreate() {
        // guapen
        this.add.image(589, 538, "egg");
        // progressBar
        const progressBar = this.add.rectangle(687, 539, 400, 40);
        progressBar.setOrigin(0, 0);
        progressBar.isFilled = true;
        progressBar.fillColor = 14737632;
        // preloadUpdater
        new PreloadBarUpdaterScript(progressBar);
        // progressBarBg
        const progressBarBg = this.add.rectangle(687, 539, 400, 40);
        progressBarBg.setOrigin(0, 0);
        progressBarBg.fillColor = 14737632;
        progressBarBg.isStroked = true;
        // loadingText
        const loadingText = this.add.text(687, 477, "", {});
        loadingText.text = "Loading...";
        loadingText.setStyle({ "color": "#e0e0e0", "fontFamily": "arial", "fontSize": "48px" });
        this.events.emit("scene-awake");
    }
    /* START-USER-CODE */
    // Write your code here
    preload() {
        this.editorCreate();
        this.load.pack("asset-pack", "assets/home/asset-pack.json");
    }
    create() {
        this.scene.start("Home");
    }
}
/* END OF COMPILED CODE */
// You can write more code here
class ScriptNode {
    _scene;
    _gameObject;
    _parent;
    _children;
    constructor(parent) {
        this._parent = parent;
        if (parent instanceof ScriptNode) {
            this._scene = parent.scene;
            this._gameObject = parent.gameObject;
            parent.add(this);
        }
        else if (parent instanceof Phaser.GameObjects.GameObject) {
            this._scene = parent.scene;
            this._gameObject = parent;
        }
        else {
            this._scene = parent;
        }
        const listenAwake = this.awake !== ScriptNode.prototype.awake;
        const listenStart = this.start !== ScriptNode.prototype.start;
        const listenUpdate = this.update !== ScriptNode.prototype.update;
        const listenDestroy = this.destroy !== ScriptNode.prototype.destroy;
        if (listenAwake) {
            this.scene.events.once("scene-awake", this.awake, this);
        }
        if (listenStart) {
            this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
        }
        if (listenUpdate) {
            this.scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
        }
        if (listenAwake || listenStart || listenUpdate || listenDestroy) {
            const destroyCallback = () => {
                this.scene.events.off("scene-awake", this.awake, this);
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.start, this);
                this.scene.events.off(Phaser.Scenes.Events.UPDATE, this.update, this);
                if (listenDestroy) {
                    this.destroy();
                }
            };
            if (this.gameObject) {
                this.gameObject.on(Phaser.GameObjects.Events.DESTROY, destroyCallback);
            }
            else {
                this.scene.events.on(Phaser.Scenes.Events.SHUTDOWN, destroyCallback);
            }
        }
    }
    get scene() {
        return this._scene;
    }
    get gameObject() {
        return this._gameObject;
    }
    get parent() {
        return this._parent;
    }
    get children() {
        if (!this._children) {
            this._children = [];
        }
        return this._children;
    }
    add(child) {
        this.children.push(child);
    }
    executeChildren(...args) {
        if (this._children) {
            for (const child of this._children) {
                child.execute(...args);
            }
        }
    }
    execute(...args) {
        // override this on executable nodes
    }
    awake() {
        // override this
    }
    start() {
        // override this
    }
    update() {
        // override this
    }
    destroy() {
        // override this
    }
}
/// <reference path="../script-nodes-basic-ts/ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class PreloadBarUpdaterScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    get gameObject() {
        return super.gameObject;
    }
    awake() {
        const fullWidth = this.gameObject.width;
        this.scene.load.on(Phaser.Loader.Events.PROGRESS, (p) => {
            this.gameObject.width = fullWidth * p;
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="../script-nodes-basic-ts/ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class PushActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(args) {
        this.scene.add.tween({
            targets: this.gameObject,
            scaleX: "*=0.8",
            scaleY: "*=0.8",
            duration: 80,
            yoyo: true,
            onYoyo: () => {
                this.executeChildren(args);
            }
        });
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
/* START OF COMPILED CODE */
class CallbackActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    callback;
    /* START-USER-CODE */
    execute(...args) {
        if (this.callback) {
            this.callback(...args);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class EmitEventActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    eventName = "";
    eventEmitter = "gameObject";
    /* START-USER-CODE */
    execute(...args) {
        let emitter;
        switch (this.eventEmitter) {
            case "game.events":
                emitter = this.scene.game.events;
                break;
            case "scene.events":
                emitter = this.scene.events;
                break;
            case "scene.loader":
                emitter = this.scene.load;
                break;
            case "scene.input":
                emitter = this.scene.input;
                break;
            case "scene.input.keyboard":
                emitter = this.scene.input.keyboard;
                break;
            case "scene.anims":
                emitter = this.scene.anims;
                break;
            case "gameObject":
                emitter = this.gameObject;
                break;
        }
        if (emitter) {
            emitter.emit(this.eventName, ...args);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class ExecActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    targetAction;
    /* START-USER-CODE */
    execute(...args) {
        if (this.targetAction) {
            this.targetAction.execute(...args);
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class OnEventScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }
    eventName = "";
    eventEmitter = "gameObject";
    once = false;
    /* START-USER-CODE */
    awake() {
        let emitter;
        switch (this.eventEmitter) {
            case "game.events":
                emitter = this.scene.game.events;
                break;
            case "scene.events":
                emitter = this.scene.events;
                break;
            case "scene.loader":
                emitter = this.scene.load;
                break;
            case "scene.input":
                emitter = this.scene.input;
                break;
            case "scene.input.keyboard":
                emitter = this.scene.input.keyboard;
                break;
            case "scene.anims":
                emitter = this.scene.anims;
                break;
            case "gameObject":
                emitter = this.gameObject;
                break;
        }
        if (emitter) {
            if (this.once) {
                emitter.once(this.eventName, this.executeChildren, this);
            }
            else {
                emitter.on(this.eventName, this.executeChildren, this);
            }
            switch (this.eventEmitter) {
                case "scene.anims":
                case "scene.events":
                case "scene.input":
                case "scene.input.keyboard":
                case "scene.loader":
                    this.scene.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
                        emitter?.off(this.eventName, this.executeChildren, this);
                    });
                    break;
            }
        }
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./OnEventScript.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class OnPointerDownScript extends OnEventScript {
    constructor(parent) {
        super(parent);
        // this (prefab fields)
        this.eventName = "pointerdown";
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    awake() {
        if (!this.gameObject) {
            return;
        }
        if (!this.gameObject.input) {
            this.gameObject.setInteractive();
        }
        super.awake();
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class RootScriptNode extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    key = "scripts";
    /* START-USER-CODE */
    /**
     * Gets the RootScript object set into the game object.
     * It lookups the script node in using the `key` parameter as attribute of the game object.
     *
     * @param gameObject The game object where the root script is set.
     * @param key The key used to set root script into the game object. It is `"scripts"` by default.
     * @returns The root script.
     */
    static getRoot(gameObject, key = "scripts") {
        return gameObject[`RootScript__${key}`];
    }
    /**
     * Gets the children of the root script registered in the given game object, using the given key.
     *
     * @param gameObject The game object containing the root script.
     * @param key The key used to register the root script in the game object.
     * @returns The chidlren of the root script.
     */
    static getChildren(gameObject, key = "scripts") {
        const root = this.getRoot(gameObject, key);
        if (root) {
            return root.children;
        }
        return [];
    }
    /**
     * Gets the root script associated to the game object, using the given key.
     *
     * @param gameObject The game object where the root script is set.
     * @param key The key used for registering the root script in the game object.
     * @returns The root script.
     */
    static hasRoot(gameObject, key = "scripts") {
        const script = this.getRoot(gameObject, key);
        return script !== undefined;
    }
    awake() {
        this.gameObject[`RootScript__${this.key}`] = this;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class SpriteScriptNode extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    get gameObject() {
        return super.gameObject;
    }
}
/* END OF COMPILED CODE */
// You can write more code here
/// <reference path="./ScriptNode.ts"/>
// You can write more code here
/* START OF COMPILED CODE */
class StartSceneActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    sceneKey = "";
    /* START-USER-CODE */
    execute(...args) {
        this.scene.scene.start(this.sceneKey, ...args);
    }
}
/* END OF COMPILED CODE */
// You can write more code here
