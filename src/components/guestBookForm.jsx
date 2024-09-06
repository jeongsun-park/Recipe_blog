import { Fragment, useState } from "react";

export default function GuestBookForm({ setContents }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    // console.log(e.target.value);
    setText((prev) => e.target.value);
  }

  function submitForm() {
    console.log(text);
    setText("");
    //prev : 데이터를 넣기전 기존에 있던 값
    setContents((prev) => [...prev, text]);
  }

  return (
    <Fragment>
      <textarea
        onChange={handleChange}
        placeholder="말씀을 남겨주세요"
        value={text}
      ></textarea>
      <button onClick={submitForm}>확인</button>
    </Fragment>
  );
}
