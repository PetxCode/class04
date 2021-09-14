import React, { useState, useEffect } from "react";
import "./Work.css";
import { MdCancel } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import img from "../img/1.png";
import img1 from "../img/2.png";
import img2 from "../img/3.png";
import img3 from "../img/4.png";
import moment from "moment";

const WorkHome = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Peter",
      quote:
        "React components for faster and easier web development. Build your own design system, or start with Material Design.",
      time: Date.now(),
      avatar: img,
    },
    {
      id: 2,
      name: "Peter2",
      quote:
        "React components for faster and easier web development. Build your own design system, or start with Material Design.",
      time: Date.now(),
      avatar: img1,
    },
    {
      id: 3,
      name: "Peter3",
      quote:
        "React components for faster and easier web development. Build your own design system, or start with Material Design.",
      time: Date.now(),
      avatar: img2,
    },
    {
      id: 4,
      name: "Peter4",
      quote:
        "React components for faster and easier web development. Build your own design system, or start with Material Design.",
      time: Date.now(),
      avatar: img3,
    },
  ]);
  const [image, setImage] = useState(img);
  const [name, setName] = useState("");
  const [myMind, setMyMind] = useState("");

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const saveFile = URL.createObjectURL(file);
    setImage(saveFile);
  };

  const pushData = () => {
    const file = {
      id: data.length + 1,
      name,
      quote: myMind,
      avatar: image,
      time: Date.now(),
    };
    setData([...data, file]);
    setName("");
    setMyMind("");
    setImage(img);
  };

  const deleteItem = (id) => {
    const removeItem = data.filter((el) => el.id !== id);
    setData(removeItem);
  };

  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem("storageData"));
    setData(storedValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("storageData", JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <div className="container_input">
        <img className="container_inputImage" src={image} />
        <div className="container_inputsFile">
          <input
            type="file"
            className="container_inputSingle"
            onChange={uploadImage}
          />
          <input
            placeholder="Name"
            className="container_inputSingle"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            placeholder="What's on your Mind?"
            className="container_inputSingle"
            value={myMind}
            onChange={(e) => {
              setMyMind(e.target.value);
            }}
          />
          <div className="container_buttonDiv">
            <button className="container_button" onClick={pushData}>
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="container_wrapper">
        {data.map((props) => {
          return (
            <div className="container_card">
              <div className="container_cardRow">
                <div className="container_cardRowCancel">
                  <MdCancel
                    onClick={() => {
                      console.log("I am Pressed");
                      console.log(props.id);
                      deleteItem(props.id);
                    }}
                  />
                </div>
                <img
                  className="container_cardRowAvatar"
                  alt="img"
                  src={props.avatar}
                />
              </div>

              <div className="container_cardQuote">
                <div>
                  <ImQuotesLeft />
                </div>
                <div> {props.quote} </div>
                <div>
                  <ImQuotesRight />
                </div>
              </div>
              <div className="container_cardName">{props.name}</div>
              <div className="container_cardTime">
                {" "}
                {moment(props.time).fromNow()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkHome;
