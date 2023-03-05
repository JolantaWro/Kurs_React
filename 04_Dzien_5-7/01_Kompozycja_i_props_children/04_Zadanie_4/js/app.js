import React, { Component } from "react";
import { createRoot } from "react-dom/client";

// function Chat(props) {
//   return (
//     <section className="chat">
//       <header>
//         <h1>Chat prywatny</h1>
//       </header>
//       <div>
//         <ul>
//           <li>Wpis z chatu 1</li>
//           <li>Wpis z chatu 2</li>
//           <li>Wpis z chatu 3</li>
//         </ul>
//       </div>
//       <footer>
//         <form>
//           <input type="text" />
//           <button>Wyślij</button>
//         </form>
//       </footer>
//     </section>
//   );
// }

const ChatHeader = function (props) {
  return (
      <header>
        <h1>Chat prywatny</h1>
      </header>
  )
};

const ChatMessage = function ({index}) {
  return <li>{`Wpis z chatu ${index}`}</li>
};

const ChatMessages = function (props) {
  return (
      <div>
        <ul>
          <ChatMessage key={1} index={1}/>
          <ChatMessage key={2} index={2}/>
          <ChatMessage key={3} index={3}/>
        </ul>
      </div>
  )
};

const NewChatMessage = function (props) {
  return (
      <footer>
        <form>
          <input type="text" />
          <button>Wyślij</button>
        </form>
      </footer>
  )
};

const Chat = function (props) {
  return (
      <section className="chat">
        <ChatHeader/>
        <ChatMessages/>
        <NewChatMessage/>
      </section>
  )
}



function App(props) {
  return <Chat />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
