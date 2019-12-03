import React from 'react';
import CommunicationChat from '../../img/citi-communication-chat.png';
import './style.css';


class ChatBubble extends React.Component{
    state ={
      show: true
    }

    toggleShow = ()=>{
      this.setState({show: !this.state.show})
    }

  
render(){

  if(this.state.show){
    return(
      <div id = "Hello">
       <section className = "chatbot-content">      
            <iframe
                 allow="microphone;"
                 width="350"
                 height="430"
                 src="https://console.dialogflow.com/api-client/demo/embedded/7e3891b3-2b9b-49f7-9575-6945e98b971d">
            </iframe>
                 </section>
      <button onClick={this.toggleShow} className = "chat-bubble"><img src = {CommunicationChat} alt = "Burbuja de chat"/></button>
       </div>
    )

  }
  else{
    return <h1>
      <button onClick={this.toggleShow} className = "chat-bubble"><img src = {CommunicationChat} alt = "Burbuja de chat"/></button>
      </h1>
  }
}
}
export default ChatBubble