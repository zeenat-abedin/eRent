import React from "react";

import "./Chat.scss";

const Chat = () => {
  return (
    <div className="chatbox">
      <div className="chatlogs">
        <div className="chat incoming">
          <div className="user-photo"></div>
          <p className="chat-message">Hey there! How you doing?</p>
        </div>
        <div className="chat outgoing">
          <div className="user-photo"></div>
          <p className="chat-message"> Good, wbu?</p>
        </div>
        <div className="chat incoming">
          <div className="user-photo"></div>
          <p className="chat-message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            voluptatem facere, molestias nulla error temporibus nam vel nostrum
            alias at tempore reprehenderit totam neque fuga pariatur hic quos
            eum vero? Eos provident quia rerum nesciunt deleniti rem nihil natus
            impedit consequuntur. Enim aspernatur asperiores libero possimus,
            iure numquam in commodi!
          </p>
        </div>
        <div className="chat outgoing">
          <div className="user-photo"></div>
          <p className="chat-message">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            aperiam natus eaque obcaecati consequatur perspiciatis tempora
            consectetur fuga eveniet expedita. Tempore expedita nobis voluptatem
            assumenda veniam sunt in repudiandae quibusdam pariatur. Accusamus
            nobis nam tempore ea quidem minus minima facere vero, aliquid
            officia, commodi molestiae sit, dolorem optio quisquam. Praesentium?
          </p>
        </div>
      </div>
      <div className="chat-form">
        <textarea name="" id=""></textarea>
        <button>
          <i className="fas fa-paper-plane" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;
