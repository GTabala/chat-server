import React from "react";

const Message = ({msg,askAPI}) => {

  const deleteMsg = () => {
    const requestOptions = {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
      },
      
  };

  fetch(`https://gtabala-chat-server.glitch.me/messages/${msg.id}`, requestOptions)
      .then(x => x.json())
      .then(x => console.log(x));
      setTimeout(() => {
        askAPI();
      }, 1000);
  };


  return (
    <div id={msg.id} className="message" >   
        <p>
            {msg.from}
        </p>
<div>
    {msg.text}
    <button onClick={deleteMsg} >Delete</button>
</div>
    </div>
  );
};

export default Message;