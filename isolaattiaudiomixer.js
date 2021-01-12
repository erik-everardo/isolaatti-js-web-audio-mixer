// Erik Cavazos, 2021.
// The Isolaatti Project audio mixer.
// This library uses the WEBAudio API and is intended to be used in the browser.

export class IsolaattiAudioMixer {
    // constants to define effect
    static TYPICAL_REVERB = 1;
    static LOW_PASS_FILTER = 2;
    // add more here...

    constructor() {
        this.tracks = new Map();

        this.audioContext = new AudioContext();

        // states
        this.prepared = false;
        this.playing = false;
    }

    addTrackToMix(name, audioSource) {
        // returns trackId
        if(typeof audioSource === "")
        this.tracks.set(name, audioSource);
    }

    addEffectToTrack(trackId) {

    }

    addEffectToMix() {

    }

    prepareMix() {

    }

    playMix() {
        this.playing = true;
        if(this.prepared) {

        } else {
            throw {
                name: "MixerNotPrepared",
                message: "Cannot play, mix is not prepared. Call to method prepare()"
            } 
        }
    }

    /* Return the blob of the mix */
    exportMix() {

    }
}