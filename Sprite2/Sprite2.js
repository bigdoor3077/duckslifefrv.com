/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.svg", {
        x: 0,
        y: 0
      }),
      new Costume(
        "ducklogoedit-removebg-preview",
        "./Sprite2/costumes/ducklogoedit-removebg-preview.png",
        { x: 266, y: 247 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "backdrop1";
    this.effects.clear();
    yield* this.wait(5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield;
    }
    this.stage.costume = "backdrop2";
  }
}
