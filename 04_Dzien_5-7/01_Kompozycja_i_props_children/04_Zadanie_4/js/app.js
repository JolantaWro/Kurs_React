import React, { Component } from "react";
import { createRoot } from "react-dom/client";

function Chat(props) {
  return (
    <section className="chat">
      <header>
        <h1>Chat prywatny</h1>
      </header>
      <div>
        <ul>
          <li>Wpis z chatu 1</li>
          <li>Wpis z chatu 2</li>
          <li>Wpis z chatu 3</li>
        </ul>
      </div>
      <footer>
        <form>
          <input type="text" />
          <button>Wyślij</button>
        </form>
      </footer>
    </section>
  );
}

function App(props) {
  return <Chat />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
