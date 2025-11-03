// Bundle the Ziggeo SDK JS into the UMD (CSS stays in the app)
//import 'ziggeo-client-sdk/build/ziggeo.js';

// Named exports (standards-compliant)
export { default as ZiggeoPlayer } from "./components/ZiggeoPlayer";
export { default as ZiggeoAudioPlayer } from "./components/ZiggeoAudioPlayer";
export { default as ZiggeoRecorder } from "./components/ZiggeoRecorder";
export { default as ZiggeoAudioRecorder } from "./components/ZiggeoAudioRecorder";

// Default export (for code that does ReactZiggeo.ZiggeoRecorder)
import ZiggeoPlayer_ from "./components/ZiggeoPlayer";
import ZiggeoAudioPlayer_ from "./components/ZiggeoAudioPlayer";
import ZiggeoRecorder_ from "./components/ZiggeoRecorder";
import ZiggeoAudioRecorder_ from "./components/ZiggeoAudioRecorder";
export default {
    ZiggeoPlayer: ZiggeoPlayer_,
    ZiggeoAudioPlayer: ZiggeoAudioPlayer_,
    ZiggeoRecorder: ZiggeoRecorder_,
    ZiggeoAudioRecorder: ZiggeoAudioRecorder_
};
