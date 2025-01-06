// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/wall.ts";
import { rand } from "https://deno.land/x/remapper@3.1.2/src/general.ts";

function Smoke(startingBeat: number, duration: number, smokeWallDuration: number, size: number, x: number, y: number, z: number) {
    for (let i = 0; i < (duration * 6); i++) {

        let wall = new Wall(startingBeat + (i / 6), smokeWallDuration, 1, 0, 0);

        wall.color = [0.1, 0.1, 0.1, 0.1],
        wall.interactable = false,
        wall.scale = [size, size, size],
            wall.animate.dissolve = [[0, 0], [1, 0.1], [1, 0.7], [0, 1]],
            wall.animate.localRotation = [[rand(0, 180), rand(0, 180), rand(0, 180), 0], [rand(0, 180), rand(0, 180), rand(0, 180), 1]],
            wall.animate.definitePosition = [[x, y, z, 0, "easeOutCubic"], [(x + rand(-3, 3)), (y + rand(4, 8)), z, 1]]
            
            wall.push();    
    }
};