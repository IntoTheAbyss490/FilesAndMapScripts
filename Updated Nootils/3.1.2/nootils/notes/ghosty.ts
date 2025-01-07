// deno-lint-ignore-file
import { activeDiff, Note } from "https://deno.land/x/remapper@3.1.2/src/mod.ts";

function InternalGhosty(filteredNotes: Note[], speed: number, maxY: number, easing: string, transparent?: boolean) {
    const positions: any = [[0, 0, 0, 0]];
    let positive = false;
    for (let i = speed + 1; i > 0; i--) {
        let pos = positive ? [0, maxY, 0, 0.35 / i, easing] : [0, -maxY, 0, 0.35 / i, easing];
        positions.push(pos);
        positive = !positive;
    }
    positions.push([0, 0, 0, 0.4, easing]);
    filteredNotes.forEach(note => {
            note.animate.dissolve = [
                transparent ? [0, 0] : [1, 0],
            ],
            note.animate.dissolveArrow = [
                [0, 0],
                [1, 0.05],
            ],
            note.animate.position = positions,
        note.push();
    });
}
//!YOU NEED TO INCLUDE INTERNAL GHOSTY ABOVE THE EFFECT'S FUNCTION(Found Below)

function GhostyTrack(track: string, speed: number, maxY: number, easing: string, transparent?: boolean) {
    const filteredNotes = activeDiff.notes.filter(note => {
        if(!note.customData) note.customData = {};
        if(Array.isArray(note.track.value)) return note.track.value.includes(track);
        else if (note.track.value == track) return true;
        else return false;
    });
    InternalGhosty(filteredNotes, speed, maxY, easing, transparent);
}

//GhostyTrack("men, 0.5, 1, "easeInOutCubic", true)

function Ghosty(startBeat: number, endBeat: number, speed: number, maxY: number, easing: string, transparent?: boolean) {
    const filteredNotes = activeDiff.notes.filter(n => n.time >= startBeat && n.time <= endBeat);
    InternalGhosty(filteredNotes, speed, maxY, easing, transparent);
}

//Ghosty(0, 100, 0.5, 1, "easeInOutCubic", false)