# Isolaatti Audio mixing library
## How to use it
It is super easy to use. You simply need to call the constructor and pass it an array of audio elements (`<audio>` tag)


### HTML with JavaScript example
This is not the full HTML document, only the part that is related to the librar. Usually, this is included inside the `<body></body>` tag. See the **example/index.html** file.
```
<!-- Here we define audio origin using audio tag -->
<audio track-name="Bass" class="track-audio-element" src="bass.mp3" preload="auto" ></audio>
<audio track-name="Drums" class="track-audio-element" src="drums.mp3" preload="auto" ></audio>
<audio track-name="Vocals" class="track-audio-element" src="vocals.mp3" preload="auto"></audio>
<audio track-name="Other" class="track-audio-element" src="other.mp3" preload="auto"></audio>
<!-- You can add more tracks here. Include the track-name attribute, meaning it the actual name of the track -->
    


    
<!-- Include script first, so that we can use it then -->
<script src="../isolaattiaudiomixer.js"></script>
<!-- Now you can write your own JavaScript code -->
<script>
    // get an array of the audio elements from DOM and pass it to the constructor
    let audioElements = document.querySelectorAll(".track-audio-element");

    // we instantiate a new object to use the library. Create only one preferently
    let mixer = new IsolaattiAudioMixer(audioElements);

    // prepare the mixer
    mixer.prepareMix();
</script>

<!--We need a play button -->
<button type="button" onclick="mixer.playMix()">Play</button>
```
This library is not finished yet...