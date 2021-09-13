import React, { useState, useEffect } from "react";
import Sound from "mic-recorder-to-mp3";

const AudioWork = () => {
  const recorded = new Sound({ bitRate: 128 });

  const [audioURL, setAudioURL] = useState("");
  const [blockPlaying, setBlockPlaying] = useState(false);
  const [isRecoding, setIsRecording] = useState(false);
  const [buttonStart, setButtonState] = useState(true);

  const onButtonState = () => {
    setButtonState(!buttonStart);
  };

  const startRecording = () => {
    recorded
      .start()
      .then(() => {
        console.log("Recording is on-going!");
      })
      .catch((err) => console.log(err.message));
  };

  const stopRecording = () => {
    recorded
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob);
        setAudioURL(blobURL);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        console.log("Permission is Granted");
        setBlockPlaying(false);
      },
      () => {
        console.log("Permission is Denied");
        setBlockPlaying(true);
      }
    );
  }, []);

  return (
    <div>
      <div>Audio</div>

      {buttonStart === true ? (
        <button onClick={startRecording}>Start</button>
      ) : buttonStart === false ? (
        <button onClick={stopRecording}>Stop</button>
      ) : null}

      <div>
        <audio src={audioURL} controls />
      </div>
    </div>
  );
};

export default AudioWork;
