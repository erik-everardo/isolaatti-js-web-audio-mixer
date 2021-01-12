
/*
About this program
 Erik Cavazos, 2021.
 The Isolaatti Project audio mixer.
 This library uses the WEBAudio API and is intended to be used in the browser.

MIT License

Copyright (c) 2021 Erik Everardo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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