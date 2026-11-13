# Birdhouse in Your Soul — Chimera show

[Play the show](https://thirtyseven.github.io/birdhouse-chimera/)

A fan-made recreation rendered live in three.js, using the stock Chimera anatomy head. All visual scenes are procedural geometry; no video file is used or included.

Music by They Might Be Giants. The soundtrack is MIDI accompaniment plus Chimera synthesized singing. The show runs for 3:04, with corrected lyric timing and recorded articulator telemetry driving the head.

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
