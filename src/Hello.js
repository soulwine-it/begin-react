import React from "react";

//첫번째 컴퍼넌트 생성
// function Hello(props) {
//   return (
//     <div
//       style={{
//         color: props.color
//       }}
//     >
//       안녕하세요{props.name}
//     </div>
//   );
// }
// 비구조화 할당시
function Hello({ color, name, isSpecial }) {
  return (
    <div
      style={{
        color
      }}
    >
      {/* isSpecial값이 true면 * 추가 아니면 null*/}
      {isSpecial ? <b>*</b> : null}
      {/* {isSpecial && <b>*</b>} */}
      안녕하세요{name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음"
};
export default Hello;
