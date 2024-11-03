import Layout from "../../components/Layout";
import TextButton from "../../components/TextButton";
import CodeBlock from "../../components/CodeBlock";

const App = () => {
  return (<Layout>
    <h1 className={'title1 primary-color'}>Key</h1>
    <section className={'section blending'}>
      <h2 className={'title3'}>이 문서 요약</h2>
      <p>이 문서를 읽으면 아래 내용을 답변할 수 있습니다.</p>
      <ul>
        <li>
          <p>☑️ 리액트에서 key는 왜 필요한가요?</p>
        </li>
      </ul>
    </section>
    <section className={'section'}>
      <h2 className={'title2'}>Key</h2>
      <p>
        - 리액트에서 key는 미리 정의된 속성으로 특별한 역할을 합니다.<br/>
        - 기본적으로 리액트는 컴포넌트를 구별하기 위해 부모 요소 안에서의 순서를 이용합니다.<br/>
        - 순서 대신 리액트가 같은 컴포넌트를 별개의 요소로 구별할 수 있게 직접 key를 부여해줄 수도 있습니다.<br/>
        - 리액트는 UI를 트리로 만듭니다. 트리 형태로 만들면 어느 위치에 어떤 요소가 생기고 수정되고 삭제되었는지 알기 쉽죠.<br/>
        - 그리고 리액트는 이 트리 상에 위치에 관심있습니다. <br/>
        - 리액트는 컴포넌트가 UI 트리에서 그 자리에 렌더링되는 한 state를 유지합니다.<br/>
        - 아래 코드 조각을 보면, isFancy에 따라 똑같은 컴포넌트를 같은 위치에 렌더링합니다. 리액트는 Counter를 서로 같은 컴포넌트라고 인식하고 state를 공유해버립니다.<br/>
      </p>
      <CodeBlock code={
        `
// 예제코드 전체: https://ko.react.dev/learn/preserving-and-resetting-state#same-component-at-the-same-position-preserves-state
{isFancy ? (
  <Counter isFancy={true} /> 
) : (
  <Counter isFancy={false} /> 
)}        
        `
      }/>
      <p>
        - 아래 코드 처럼 같은 위치에 있는 같은 컴포넌트를 서로 다른 컴포넌트라고 리액트에게 key로 알려줄 수 있습니다.<br/>
        - 이렇게 하면 리액트는 서로 다른 컴포넌트라고 인식하고 state를 공유하지 않습니다.
      </p>
      <CodeBlock code={
        `
// 예제코드 전체: https://ko.react.dev/learn/preserving-and-resetting-state#option-2-resetting-state-with-a-key
{isPlayerA ? (
  <Counter key="Taylor" person="Taylor" />
) : (
  <Counter key="Sarah" person="Sarah" />
)}      
        `
      }/>
      <p>
        - key는 배열을 이용해 같은 컴포넌트를 여러개 렌더링할때도 필요합니다. <br/>
        - key는 각 컴포넌트가 어떤 배열 항목에 해당하는지 리액트에 알려주어 배열 항목이 이동,삭제,추가되었을 때 DOM 트리에 올바르게 업데이트 하는데 도움이 됩니다.<br/>
      </p>
      <CodeBlock code={
        `
...
<li key={person.id}>...</li>
...
        `
      }/>
      <br/>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>배열의 index로 Key를 하면 안될까요?</h2>
      <p>
        - 배열에서 항목의 인덱스를 key로 사용하고 싶을 수도 있습니다. <br/>
        - 실제로 key를 전혀 지정하지 않으면 React는 인덱스를 사용합니다. <br/>
        - 하지만 항목이 삽입되거나 삭제하거나 배열의 순서가 바뀌면 시간이 지남에 따라 항목을 렌더링하는 순서가 변경됩니다. <br/>
        - 인덱스를 key로 사용하면 종종 미묘하고 혼란스러운 버그가 발생합니다.<br/>
        - 마찬가지로 key=&#x007B;Math.random()&#x007D;처럼 즉석에서 key를 생성하지 마세요. <br/>
        - 이렇게 하면 렌더링 간에 key가 일치하지 않아 모든 컴포넌트와 DOM이 매번 다시 생성되어 속도가 느려집니다. <br/>
        - 대신 서버에서 가져온 DB 데이터 기반의 안정적인 ID를 사용하세요.<br/>
        - 만약 그럴 수 없다면, 항목을 만들 때 crypto.randomUUID() 또는 uuid 같은 패키지를 사용하세요.
      </p>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>Key는 전역에서 유니크해야 하나요?</h2>
      <p>
        - 아닙니다. key는 부모 요소 안에서만 유니크하면 됩니다.
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/rendering-lists'}>참고]리스트 렌더링</TextButton>
    </section>
  </Layout>)
}

export default App;