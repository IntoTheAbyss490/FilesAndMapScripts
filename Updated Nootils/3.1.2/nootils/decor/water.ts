// deno-lint-ignore-file
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

function Water(startBeat: number, endBeat: number, track: string, speed: number, y: number, colorR: number, colorG: number, colorB: number, colorA: number) {
    let z = 0
    switch(speed) {
        case 0:
            z = -1000
        case 1:
            z = -1100
        case 2:
            z = -1200
        case 3:
            z = -1300
        case 4:
            z = -1400
        case 5:
            z = -1500
    }

    let wall = new Wall(startBeat, endBeat, 1, 0, 0);

    wall.track.value = track,
    wall.color = [colorR, colorG, colorB, colorA],
    wall.interactable = false,
    wall.scale =  [2000, 0.5, 2000],
        wall.animate.definitePosition = [[-1000, y, -1000, 0], [-1000, y, z, 1]]
    
    wall.push();
}

//Water(0, 100, "water", 0.25, 0, 0, 0, 1, 1)