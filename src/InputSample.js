import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: ""
  });

  const nameInput = useRef();

  const { name, nickname } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    //객체 상태를 업데이트 할때에는 객체를 복사하고 나서 덮어씌우고 업데이트 해줘야 한다.

    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: ""
    });
    nameInput.current.focus();
  };
  return (
    <div>
      <input name="name" onChange={onChange} placeholder="이름" value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
        ref={nameInput}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: 닉네임</b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
