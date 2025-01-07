// deno-lint-ignore-file
import { rand } from "https://deno.land/x/remapper@3.1.2/src/general.ts";
import { Wall } from "https://deno.land/x/remapper@3.1.2/src/wall.ts";

function Snow(startingBeat: number, duration: number, amount: number) {
    for (let i = 0; i < (duration * amount); i++) {
        let x = rand(-40, 40)
        let z = rand(0, 50)
        let y = rand(60, 80)

        let wall = new Wall(startingBeat + (i / amount), 5, 1, 0, 0);

        wall.color = [1, 1, 1, 4],
        wall.interactable = false,
        wall.scale = [0.2, 0.2, 0.2],
            wall.animate.dissolve = [[0, 0.1], [1, 0.2], [1, 0.9], [0, 1]],
            wall.animate.definitePosition = [[x, (y = y - 15), z, 0], [(x + rand(-4, 4)), (y = y - 15), (z + rand(-5, 5)), 0.2], [(x + rand(-4, 4)), (y = y - 15), (z + rand(-5, 5)), 0.4], [(x + rand(-4, 4)), (y = y - 15), (z + rand(-5, 5)), 0.6], [(x + rand(-4, 4)), (y = y - 15), (z + rand(-5, 5)), 0.8], [(x + rand(-4, 4)), (y = y - 15), (z + rand(-5, 5)), 1]]
    
        wall.push();    
    }
};

//Snow(0, 100, 100)