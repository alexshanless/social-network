import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) =>{
  return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Marianna" id="1" />
        <DialogItem name="Dima" id="2" />
        <DialogItem name="Sergey" id="3" />
        <DialogItem name="Anton" id="4" />
        <DialogItem name="Max" id="5" />
        <DialogItem name="Pushok" id="6" />
      </div>
      <div className="messages">
        <Message message='Yo'/>
        <Message message='Im down'/>
        <Message message='lets meet up'/>
        <div className="message">Yo</div>
        <div className="message">sup, catbro?</div>
        <div className="message">what?</div>
      </div>
    </div>
  );
};

export default Dialogs;
