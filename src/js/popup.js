// document.addEventListener('DOMContentLoaded', () =>{
//     //document.getElementById('btnRecord').addEventListener('click', () =>{
//     //      chrome.tabs.query({currentWindow: true, active:true}, (tabs) =>{
//     //        chrome.tabs.sendMessage(tabs[0].id, 'hi');
//     //      })
//     //   }, false)
// });


$(document).ready(() =>{
  $("#start").click(() =>{
    const video = document.querySelector("video");
    video.width = 400;
    let recorder, stream;
  
    async function startRecording() {
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: { mediaSource: "screen" },
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        }
      });
      console.log(st)
      recorder = new MediaRecorder(stream);
    
      const chunks = [];
      recorder.ondataavailable = e => chunks.push(e.data);
      recorder.onstop = e => {
        const completeBlob = new Blob(chunks, { type: chunks[0].type });
        video.src = URL.createObjectURL(completeBlob);
      };
    
      recorder.start();
    }
    startRecording();
  });
});


    // const start = document.getElementById("start");
    // const stop = document.getElementById("stop");
    // const video = document.querySelector("video");
    // let recorder, stream;
    
    // async function startRecording() {
    //   stream = await navigator.mediaDevices.getDisplayMedia({
    //     video: { mediaSource: "screen" },
    //     audio: {
    //       echoCancellation: true,
    //       noiseSuppression: true,
    //       sampleRate: 44100
    //     }
    //   });
    //   recorder = new MediaRecorder(stream);
    
    //   const chunks = [];
    //   recorder.ondataavailable = e => chunks.push(e.data);
    //   recorder.onstop = e => {
    //     const completeBlob = new Blob(chunks, { type: chunks[0].type });
    //     video.src = URL.createObjectURL(completeBlob);
    //   };
    
    //   recorder.start();
    // }
    
    // start.addEventListener("click", () => {
    //   start.setAttribute("disabled", true);
    //   stop.removeAttribute("disabled"); 
    //   startRecording();
    // });
    
    // stop.addEventListener("click", () => {
    //   stop.setAttribute("disabled", true);
    //   start.removeAttribute("disabled");
    
    //   recorder.stop();
    //   stream.getVideoTracks()[0].stop();
    // });