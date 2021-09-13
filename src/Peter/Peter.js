import React, { useState, useEffect } from "react";
import MicRecorder from "mic-recorder-to-mp3";

const Peter = () => {
  const recorder = new MicRecorder({
    bitRate: 128,
  });

  const [isRecording, setIsRecoding] = useState(false);
  const [blockPlaying, setBlockPlaying] = useState(false);
  const [audioURL, setAudioURL] = useState("");

  const startPlaying = () => {
    if (blockPlaying) {
      console.log("Access Denied");
    } else {
      recorder
        .start()
        .then(() => {
          setIsRecoding(true);
        })
        .catch((err) => console.log(err.message));
    }
  };
  const stopPlaying = () => {
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setAudioURL(blobURL);
        isRecording(false);
        console.log(audioURL);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission Granted");
        setBlockPlaying(false);
      },
      () => {
        console.log("Permission Granted");
        setBlockPlaying(true);
      }
    );
  }, []);

  return (
    <div>
      <div>Audio Work</div>
      <button onClick={startPlaying}>Start Recording</button>
      <button onClick={stopPlaying}>Stop Recording</button>

      <audio src={audioURL} controls />
    </div>
  );
};

export default Peter;
