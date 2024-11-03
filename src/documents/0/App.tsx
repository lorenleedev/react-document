import Layout from "../../components/Layout";
import TextButton from "../../components/TextButton";
import CodeBlock from "../../components/CodeBlock";

const App = () => {
  return (<Layout>
    <h1 className={'title1 primary-color'}>Why React?</h1>
    <section className={'section blending'}>
      <h2 className={'title3'}>이 문서 요약</h2>
      <p>이 문서를 읽으면 아래 내용을 답변할 수 있습니다.</p>
      <ul>
        <li>
          <p>☑️ 왜 수많은 기업에서 리액트를 선택했을까요?</p>
        </li>
      </ul>
    </section>
    <section className={'section'}>
      <h2 className={'title2'}>리액트 이전의 웹개발</h2>
      <p>
        - 여러분은 리액트 같은 UI라이브러리/프레임워크 없이 웹 사이트를 개발하실 수 있나요?<br/>
        - 물론 가능합니다! 하지만, 사용자 인터렉션이 많고 데이터에 따라 화면의 일부가 쏙쏙 바뀌어야한다면 여러분이 작성해야하는 코드는 점점 많아지고 복잡해집니다.<br/>
        - 리액트 등장 이전의 웹 사이트들은 그저 사용자에게 콘텐츠를 보여주는 정도의 정적인 경우가 많았습니다. <br/>
        - 점차 웹 사이트내에서 사용자가 예약을 한다거나, 좋아요를 누른다거나, 데이터를 추가한다거나 하는 동작들이 늘어났고,
        사용자 액션에 따라 화면 전체가 리렌더링되는 것이 아니라 일부만 리렌더링될 필요성이 생겼습니다.<br/>
        - 새로운 기술은 언제나 필요에 의해 생겨납니다. <br/>
        - 페이스북을 만든 메타에서 리액트를 만든 이유가 바로 그것입니다. <br/>
        - 페이스북에서 사용자들은 수많은 인터렉션을 하게 되었고, 웹 사이트 내에서 인터렉션으로 생기는 데이터의 변경사항에 따라 수많은 UI가 안정적으로 변경되고 리렌더링될 필요가 생겼습니다.<br/>
        - 리액트가 등장하기 전에는 제이쿼리로 데이터 변경을 화면에 반영했습니다.<br/>
        - 자바스크립트로 한땀한땀 DOM을 조작하다가, 제이쿼리가 등장하며 한 층 쉽게 웹 사이트를 동적으로 만들 수 있었습니다. <br/>
        - 제이쿼리의 등장으로 비동기로 화면의 일부만 데이터를 변경하는 것이 용이해졌습니다.<br/>
        - 제이쿼리는 비동기 관리와 쉬운 DOM조작을 지원했지만, 시대는 더 복잡한 인터렉션을 요구했습니다.<br/>
        - 제이쿼리가 등장했을 때 웹 개발의 한 획을 그었다면, 이제는 리액트가 또 다른 획을 그은 것입니다.<br/>
      </p>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>리액트의 동작 원리</h2>
      <p>
        - 리액트는 변경 사항을 파악하고, 변경이 확인된 경우에 해당 부분을 리렌더링합니다.<br/>
        - 리액트는 이 세가지 동작을 순서대로 반복합니다.<br/>
        ① 렌더링 트리거<br/>
        ② 컴포넌트 렌더링<br/>
        ③ DOM에 커밋<br/>
      </p>
      <CodeBlock code={`
import Something from './Something.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Something />); // ① 앱을 시작할 때 초기 렌더링을 트리거합니다.
      `}/>
      <p>
        - 초기 렌더링에서 리액트는 루트 컴포넌트(위 코드에서는 Something.js)를 호출합니다.<br/>
      </p>
      <CodeBlock code={`
const Something = () => {
  const [status, setStatus] = useState();
  ...
  setStatus('Wow!'); // ① state를 변경하여 렌더링을 트리거합니다.
}      
      `}/>
      <p>
        - ② 이후 렌더링에서 리액트는 state 업데이트가 일어나 렌더링을 트리거한 컴포넌트를 재귀적으로 호출합니다.<br/>
        - 리액트가 화면에 표시되어야 하는 내용을 정확히 알 때까지 이 단계는 재귀적으로 계속됩니다.<br/>
        - 리렌더링하는 동안 React는 이전 렌더링 이후 변경된 속성을 계산합니다.<br/>
        - ③ 이 계산이 완료되면 리액트는 DOM이 최신 렌더링 출력과 일치하도록 DOM 노드를 변경하고 브라우저는 화면을 다시 그립니다.<br/>
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/render-and-commit'}>참고] 렌더링 그리고 커밋</TextButton><br/>
      <TextButton href={'https://ko.react.dev/learn/state-as-a-snapshot#rendering-takes-a-snapshot-in-time'}>참고] 렌더링은 그
        시점의 스냅샷을 찍습니다.</TextButton>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>왜 리액트일까요?</h2>
      <p>
        - 세계적인 기업 '메타'가 개발했습니다. 자사 대표 서비스인 페이스북도 리액트로 만들어졌습니다. 때문에 유지보수와 안정성을 보장합니다.<br/>
        실제로, 리액트에 하나의 기능을 업데이트 하기 전에 메타는 10만 개의 컴포넌트에서 테스트를 진행합니다.<br/>
        - 생태계가 넓습니다. 관련 라이브러리(캘린더, 그래프, 에디터 등)가 정말 많고 안정적이고 최신화가 잘 됩니다. 가져다 쓰기 정말 편리하죠.<br/>
        - 덕분에 리액트를 잘 다루는 개발자가 많고, 회사 입장에서는 리액트를 다루는 개발자를 고용하기 쉽습니다.<br/>
        - next.js의 등장으로 서버사이드 렌더링도 지원합니다. <br/>
        - 무엇보다 개발자가 웹 개발을 하기 쉽습니다. 선언적 프로그래밍이라 이해하기 쉽고, 문서화가 잘 되어있고, 디버깅 툴도 있습니다.<br/>
      </p>
    </section>
  </Layout>)
}

export default App;