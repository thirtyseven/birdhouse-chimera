# Birdhouse in Your Soul — Chimera show

[Play the show](https://thirtyseven.github.io/birdhouse-chimera/)

A fan-made recreation rendered live in three.js, using the stock Chimera anatomy head. All visual scenes are procedural geometry; no video file is used or included.

Music by They Might Be Giants. The soundtrack is MIDI accompaniment plus Chimera synthesized singing. The show runs for 3:04, with corrected lyric timing and recorded articulator telemetry driving the head.

## Full-shot fidelity pass

All 75 shots were compared with the supplied source video. This pass corrects late-film shot assignments and performer identities; refines the mirror closeups, balcony/staircase framing, welding mask and tool inserts, seated poses, printed eye masks and procession; rebuilds the electric guitar, sousaphone, trumpet, light bulbs, and shoes; and adds layered scenic flats and fuller room architecture. The stock Chimera heads, MIDI accompaniment, corrected vocal timing, bicycle choreography, and dance poses are preserved.

The shot inventory and source-to-show timing are in `show/shot-timeline.json`. The player versions its scene imports so browser caches do not retain a previous animation release. Checks cover every shot, desktop and phone-sized layouts, and continuous playback through seven representative sections (60 fps observed in desktop Chrome on the test machine).

## Choreography

The city shots (0:21–0:26 and 1:03–1:09), mountain shots (2:13–2:18), and finale (2:54–3:00) use source-timed hand, elbow, and hip poses: forward reaches, overhead sweeps, coordinated turns and bows, and larger finale bends.

## Bicycle sequence

At 0:51–1:08, eight plaid-shirted riders pedal around the furnished center of the hall, with Linnell seated and Flansburgh standing beside him. Wheel rotation, articulated legs, and the circular route use the audio clock, preserving continuity across cuts and seeks.

## Run locally

Serve this directory with any static HTTP server supporting media byte ranges, then open index.html. No server-side application or external CDN is required. Click Play to enable audio; the controls support pause, seek, replay, and fullscreen.

## Files

- `show/stage.js`: complete 75-shot scene and timeline.
- `show/opening.js`: opening sequence.
- `show/show.json`: Chimera show manifest.
- `show/voice-synced.tele`: synchronized vocal animation telemetry.
- `show/midi-mix-synced.mp3`: synthesized soundtrack.
- `assets/`: bundled three.js, Chimera stock-head renderer and WebAssembly engine, and player.

The `show/` directory can also be copied into Chimera's `public/shows/birdhouse_remake/` and opened with `?show=birdhouse_remake` in a Chimera checkout supporting show scenes.

Chimera: https://github.com/jamesondh/chimera-vocal-synth

Chimera and three.js license notices are included in CHIMERA-LICENSE.txt and THREE-LICENSE.txt. These software licenses do not license the underlying song.
