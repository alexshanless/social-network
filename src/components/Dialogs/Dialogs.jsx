import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "./../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators";

const Dialogs = (props) => {
  let state = props.messagePage;

  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messageElements = state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div>
          {messageElements}
          <div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength100]}
          name="newMessageBody"
          placeholder="Enter message"
        />
      </div>

      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
