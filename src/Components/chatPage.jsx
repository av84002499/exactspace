import React from 'react';
const ChatPage = (props) => {
  return (
    <>
      <div className="bg-chat h-100 d-flex flex-column justify-content-between p-3">
        <div className="align-self-start w-100">
          <div className="d-flex align-items-center">
            <button className="btn" href="!"><span className="btn border-0 bg-light my-auto rounded-circle w-40p p-auto me-3">#</span>{props.currentConversation.name}</button>
            {/* Button trigger group info modal */}
            <button type="button" class="btn border-0 ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <i className={props.currentConversation.is_group && 'bi bi-people'}></i>
            </button>
          </div>
        </div>
        <hr />
        <div className="flex-grow-1 mb-2">
          {props.currentChats.map((chat) => (
            <div className="mb-2">
              <div className="d-flex" key={chat._id}>
                <div className="btn border-0 bg-info my-auto rounded-circle w-40p p-auto me-3">#</div>
                <div className="my-auto">
                  {chat.user_name}
                </div>
              </div>
              <div className="bg-light rounded ms-5 p-2 w-75">
                {chat.content}
                {chat.created_at.getHours()}:
                {chat.created_at.getMinutes()}
              </div>
            </div>

          ))}
        </div>
        <div className="align-sef-end">
          <input className='w-100 rounded-pill border-1 p-2 ps-3 bg-transparent' type="text" placeholder='Type Message' name="msg" id="chat-msg" />
        </div>
      </div>

      {/* Group Info Modal  */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default ChatPage;