navigator.mediaDevices.getUserMedia({
    audio:{
          mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: streamId
                }
        },
    video: {
          mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: streamId
                }
        }
}).then(stream => {
      stream.getVideoTracks().forEach(track => stream.removeTrack(track)); // videoトラック削除
      video.srcObject = stream;
}).catch(err => {
   // error
     });
