chrome.runtime.onMessage.addListener((request) =>{
    const video = document.createElement("VIDEO");
    let recorder, stream;
    debugger;
  console.log(video);
    async function startRecording() {
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });
      console.log(stream);
      recorder = new MediaRecorder(stream);
    
      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = e => {
        const completeBlob = new Blob(chunks, { type: chunks[0].type });
        video.src = URL.createObjectURL(completeBlob);
      };
    
      recorder.start();
      startRecording();
    } 
    
});