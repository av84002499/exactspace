import React from "react";

const Sidebar = (props) => {
  return (
    <>
      <div className="d-flex m-3">
        <div className="my-dp d-flex justify-content-center align-items-center bg-primary rounded-circle overflow-hidden">
          A
        </div>
        <p className="ms-3 my-auto lh-sm"><strong className="fs-5">{props.currentUser.name}</strong> <br />CSE Engineer</p>
      </div>
      <div className="m-3 d-flex">
        <h5 className="my-auto">Conversation</h5>
        <a className="btn border-0 ms-auto my-auto rounded-circle" href="!"><i className="bi bi-plus-circle"></i></a>
      </div>
      <div className="p-3">
        {props.conversations.map((conversation) => (
        <div className="d-flex p-2" key={conversation._id}>
          <button className="btn" href="!"  onClick={props.updateCurrentConversation.bind(this, conversation)}><span className="btn border-0 bg-light my-auto rounded w-40p p-auto me-3">#</span>{conversation.name}</button>
        </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;