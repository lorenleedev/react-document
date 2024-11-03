import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import React from "react";
import TextLink from "../../components/TextLitnk";

const App = () => {
  return (<Layout>
    <h1 className={'title1 primary-color'}>Ref</h1>
    <section className={'section blending'}>
      <h2 className={'title3'}>이 문서 요약</h2>
      <p>이 문서를 읽으면 아래 내용을 답변할 수 있습니다.</p>
      <ul>
        <li>
          <p>☑️ ref는 언제 사용하나요?</p>
        </li>
      </ul>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>Ref</h2>
      <p>
        - ref는 값이 변경되었지만 리렌더링을 하고싶지는 않을 때 사용합니다.<br/>
        - 다르게 말하면, 리렌더링이 일어나더라도 값을 유지하고 싶을 때 사용합니다.<br/>
        - 리액트는 state를 이용해 값의 변경을 추적하고, 변경되면 리렌더링합니다.<br/>
        - ref는 그 규칙을 깨고 싶을 때 사용합니다.<br/>
        - 예를 들어, setInterval을 이용해 화면에 count를 증가하다가 특정 이벤트가 발생하면 카운트를 중지하고 싶다고 해봅시다.<br/>
        - setInterval을 중지하기 위해서는 setInterval 호출 시 응답값을 받는 intervalId를 어딘가에 저장해 두었다가 clearInterval을 호출할 때 전달인자로 넣어야합니다.<br/>
        - count는 화면에서 계속 업데이트 되어야하므로 state로 관리하는 것이 적절합니다.<br/>
        - intervalId도 state로 관리한다면 리렌더링이 일어날때 초기화 되므로 clearInterval를 호출할 수 없게 됩니다.<br/>
        - intervalId는 렌더링에 사용되는 값이 아니므로, state가 아닌 ref에 저장하면 됩니다.<br/>
        - useRef는 setState함수가 없는 useState의 활용이라고 생각도 좋습니다<br/>
      </p>
      <CodeBlock code={
        `
// Inside of React
function useRef(initialValue) {
  const [ref, unused] = useState({ current: initialValue });
  return ref;
}
        `
      }/>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>Ref와 DOM</h2>
      <p>
        - DOM에 접근할 때 ref를 사용할 수 있습니다.<br/>
        - 그런데 개발자가 만든 컴포넌트에 접근하려고 하면 리액트는 거부하고 경고를 내뱉습니다.<br/>
        - 예제 코드로 보여드리겠습니다.<br/>
      </p>
      <CodeBlock code={
        `
// OK 👍: 내장 브라우저 컴포넌트에 접근
<div ref={inputRef}/>
// Error 💩: 개발자가 만든 컴포넌트에 접근
<MyInput ref={inputRef} />
        `
      }/>
      <p>
        - 왜 그럴까요?<br/>
        - 리액트는 기본적으로 state의 변경에 따라 DOM을 관리해주기 때문에 ref를 사용하여 직접적으로 DOM에 접근하는 것을 권장하지는 않습니다.<br/>
        - DOM에 직접적으로 접근하는 것이 자유로워지면 리액트가 지향하는 단방향 패턴이 깨지기 쉬우므로, 리액트는 의도적으로 다른 컴포넌트의 DOM에 접근하는 것을 막았습니다.<br/>
        - 그래도 실무에서는 다른 컴포넌트에 접근해야할 일이 생기겠죠? 그럴때는 아래 처럼 의도를 명확이 밝혀주면 됩니다.<br/>
      </p>
      <CodeBlock code={
        `
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
...
// OK 👍: 개발자가 만든 컴포넌트에 접근 가능!
<MyInput ref={inputRef} />
        `
      }/>
      <p>
        - 이제 개발자가 만든 하위 컴포넌트의 DOM에 접근 가능하게 되었습니다.<br/>
        - 조금 더 깊게 들어가보겠습니다.<br/>
        - 이제 부모 컴포넌트가 하위 컴포넌트를 너무 자유롭게 변경 가능해져 버렸습니다. MyInput컴포넌트를 만든 A개발자는 ref를 이용해 foucs이벤트 정도만 접근 가능하게 하고 싶은데 B개발자가 ref에 접근해 컬러를 수정해버렸습니다.<br/>
        - 자유도가 높으면 의도하지 않게 규칙을 깨게 됩니다.<br/>
        - 이를 방지하고 싶을 때 useImperativeHandle를 사용합니다.
      </p>
<CodeBlock code={
        `
// 예제 코드 전체: https://ko.react.dev/learn/manipulating-the-dom-with-refs#accessing-another-components-dom-nodes
const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // 오직 focus만 노출합니다.
    focus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});
        `
}/>
      <p>
        - 리액트는 언제 ref에 값을 부여할까요?<br/>
        - ref에 DOM을 넣으려면 렌더링 도중에는 안될 것 같습니다.<br/>
        - 리액트는 ref.current를 커밋 단계에서 설정합니다. (리액트의 동작 순서는 <TextLink to={'/documents/0'}>이 페이지</TextLink>를 참고)<br/>
        - DOM을 변경하기 전에 리액트는 관련된 ref.current 값을 미리 null로 설정합니다. <br/>
        - 그리고 DOM을 변경한 후 리액트는 즉시 대응하는 DOM 노드로 다시 설정합니다.
      </p>
    </section>
  </Layout>)
}

export default App;