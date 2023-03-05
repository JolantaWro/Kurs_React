import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import Header2 from "./Header2";

class Header extends Component {
  render() {
    const { logo, searchPlaceholder } = this.props;

    return (
      <header>
        <a href="#">{logo}</a>
        <form>
          <input placeholder={searchPlaceholder} name="s" />
          <button>Search</button>
        </form>
      </header>
    );
  }
}

const App2 = () => {
    return (
        <>
            <Header2 logo="Your company!" searchPlaceholder="Type some words..." />
        </>
    )
}
class App extends Component {
  render() {
    return <Header logo="Your company!" searchPlaceholder="Type some words..." />;
  }
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App2 />
);
