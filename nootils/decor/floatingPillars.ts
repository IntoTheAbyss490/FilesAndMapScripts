// deno-lint-ignore-file
import { rand } from 'https://deno.land/x/remapper@3.1.2/src/general.ts';
import { Wall } from 'https://deno.land/x/remapper@3.1.2/src/wall.ts';

function FloatingPillars(startBeat: number, endBeat: number, amountPerRow: number, spacing: number, startX: number, height: number, width: number, startZ: number, track: string, R: number, G: number, B: number, A: number, min: number, max: number) {
    let z = startZ
    for (let i = 0; i <= amountPerRow; i++) {
        if (z <= spacing * amountPerRow) {
            z += spacing
            let x = startX
            for (let i = 0; i <= amountPerRow; i++) {
                if (x <= spacing * amountPerRow) {
                    x += spacing

                    let wall = new Wall(startBeat, endBeat - startBeat, 1, 0, 0);

                        wall.track.value = track,
                        wall.color = [R, G, B, A],
                        wall.interactable = false,
                        wall.scale = [width, height, width],
                        wall.animate.localRotation = [[rand(0, 360), rand(0, 360), rand(0, 360), 0, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.2, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.4, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.6, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 0.8, "easeInOutCubic"], [rand(0, 360), rand(0, 360), rand(0, 360), 1, "easeInOutCubic"]],
                        wall.animate.definitePosition = [[x, rand(min, max, 0.1), z, 0, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.2, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.4, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.6, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 0.8, "easeInOutCubic"], [x, rand(min, max, 0.1), z, 1, "easeInOutCubic"]]
                    wall.push();
                    }
            };
        }
    }
}
