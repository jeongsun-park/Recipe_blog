import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import GuestBookForm from "./components/guestBookForm";
import GuestBookList from "./components/guestBookList";

import "./App.css";

function App() {
  const [contents, setContents] = useState([]);
  return (
    <div className="body">
      <Header />
      <Main />
      <div className="guestBook">
        <GuestBookForm setContents={setContents} />
        <GuestBookList contents={contents} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
