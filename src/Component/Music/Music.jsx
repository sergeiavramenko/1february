import React from "react";
import n from './Music.module.css';
import JoeSatrisni from "./JoeSatrisni/JoeSatriani";

const Music = (props) => {
    return (
    <div >
      <JoeSatrisni JoeSatriani={props.music.JoeSatriani}/>



   </div >
    );
}
export default Music;