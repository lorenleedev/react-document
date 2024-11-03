import Layout from "../../components/Layout";
import CodeBlock from "../../components/CodeBlock";
import TextButton from "../../components/TextButton";
const App = () => {
  return (<Layout>
    <h1 className={'title1 primary-color'}>State</h1>
    <section className={'section blending'}>
      <h2 className={'title3'}>이 문서 요약</h2>
      <p>이 문서를 읽으면 아래 내용을 답변할 수 있습니다.</p>
      <ul>
        <li>
          <p>☑️ State와 Props란?</p>
        </li>
        <li>
          <p>☑️ hook이란?</p>
        </li>
        <li>
          <p>☑️ useState란?</p>
        </li>
        <li>
          <p>☑️ useReducer란?</p>
        </li>
        <li>
          <p>☑️ 왜 State를 불변하게 관리해야할까?</p>
        </li>
      </ul>
    </section>
    <section className={'section'}>
      <h2 className={'title2'}>State</h2>
      <p>
        - 컴포넌트 내의 메모리 같은 역할을 합니다.<br/>
        - 시간이나 상호작용에 따라 변화하는 데이터를 저장하는 용도입니다.<br/>
        - state가 변경되면 리렌더링이 일어납니다.<br/>
        - state는 적을 수록 좋습니다. state가 많아지면 리렌더링과 개발자가 신경써야하는 데이터가 많아지는 것을 의미합니다.<br/>
        - 어떤 데이터를 state로 관리할지 말지 고민된다면, 아래 질문에 답변해보면 됩니다.<br/>
        ① 시간이 지나도 변하지 않나요? 그러면 확실히 state가 아닙니다.<br/>
        ② 부모로부터 props를 통해 전달됩니까? 그러면 확실히 state가 아닙니다.<br/>
        ③ 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 그렇다면 절대로 state가 아닙니다!<br/>
        이 세가지에 해당되지 않는다면, state로 관리할만한 데이터라는 것을 의미합니다.<br/>
        - state는 컴포넌트의 내부에 있을 것 같지만, React는 state를 직접 가지고 있고, 이 state가 어떤 컴포넌트의 state인지 UI 트리의 위치를 알고있습니다. <br/>
        - 그렇기 때문에 여러분이 같은 컴포넌트를 다른 화면에서 각각 사용하면, 각각의 state로 관리되는 것입니다. <br/>
        - React는 컴포넌트가 UI 트리에서 그 자리에 렌더링되는 한 state를 유지합니다. <br/>
        - 만약 그것을 제거하거나 같은 자리에 다른 컴포넌트가 렌더링되면 React는 그 state를 버립니다.(초기화)
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/preserving-and-resetting-state'}>
        참고] State를 보존하고 초기화하기
      </TextButton>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>Props</h2>
      <p>
        - 부모 컴포넌트로부터 자식 컴포넌트로 넘겨받아 함수의 인자처럼 사용하는 데이터입니다.<br/>
        - 부모로부터 받은 props는 변경할 수 없습니다.<br/>
        - 변경하고 싶다면 부모 컴포넌트에 새로운 props를 전달하도록 “요청”해야 합니다.
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/passing-props-to-a-component'}>
        참고] 컴포넌트에 props 전달하기
      </TextButton>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>hook</h2>
      <p>
        - use로 시작하는 함수를 hook이라고합니다.<br/>
        - hook은 리액트가 렌더링 중일때만 사용할 수 있는 특별한 함수입니다. 따라서 함수 내부나 JSX내부에서 사용할 수 없습니다.<br/>
        - 리액트가 미리 만들어둔 내장 hook과 개발자가 만들어서 사용하는 custom hook으로 나뉩니다.
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/state-a-components-memory#meet-your-first-hook'}>
        참고] 첫 번째 훅 만나기
      </TextButton>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>useState</h2>
      <p>
        - 리액트가 미리 만들어둔 내장 hook 중 하나입니다.<br/>
        - useState는 컴포넌트 내부의 저장소를 만듭니다.<br/>
        - 만들때 초기값을 인자로 전달하며, 응답으로 저장할 값을 가진 state 변수와 state를 업데이트하고 리액트 리렌더링을 일으킬 state setter함수를 받습니다.<br/>
        - 이벤트 핸들러에서 setState를 하면, 리액트는 이벤트 핸들러 안의 모든 일이 끝날 때까지 기다렸다가 리렌더링을 합니다. (batching) <br/>
        - 이렇게 하는 이유는 너무 많은 리렌더링을 일어나지 않게 하기 위해서입니다. <br/>
        - 만약 렌더링 전에 동일한 state를 여러번 업데이트 하고 싶다면, setNumber(n =&#x003E; n + 1) 와 같이 이전 큐를 기반으로 state를 업데이트 할 수 있습니다. 이를 update function이라고 합니다.<br/>
        - 업데이터 함수는 렌더링 중에 실행되므로 순수함수여야합니다.
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/state-as-a-snapshot'}>스냅샷으로서의 State</TextButton><br/>
      <TextButton href={'https://ko.react.dev/learn/queueing-a-series-of-state-updates'}>참고] state 업데이트 큐</TextButton><br/>
      <TextButton href={'https://ko.react.dev/learn/state-a-components-memory#meet-your-first-hook'}>참고] State: 컴포넌트의 기억 저장소</TextButton>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>useReducer</h2>
      <p>
        - 리액트가 미리 만들어둔 내장 hook 중 하나입니다.<br/>
        - 한 컴포넌트 내부에서 useState로 여러 state를 만들어 관리하는 경우 복잡해질 수 있습니다.<br/>
        - 예를 들면, 어떤 list를 state로 관리하려는데 이 list를 추가,삭제,수정하고 싶다고 가정해봅시다.<br/>
        - setState를 하는 함수가 세 가지(추가,삭제,수정)가 필요해집니다. 컴포넌트 내부는 state를 관리하려는 함수로 복잡해지게 됩니다.<br/>
        - 또 다른 예시를 들어보겠습니다. 현재 상태를 관리하는 currentStatus라는 state가 있습니다. <br/>
        - 현재 상태는 'loading' | 'success' | 'failed' | 'default' 총 네 가지 상태를 가질 수 있습니다. <br/>
        - 그런데 이 상태들을 업데이트하려는 setState 함수가 여러 곳이라 서로 상태를 업데이트 하다가, 개발자가 의도하지 않은 결과를 상태로 보여줄 수 있습니다.<br/>
        - 이 처럼 한 컴폰넌트 안에서 복잡한 state를 사용하려고 할 때, 이를 더 관리하기 쉽고 효율적으로 하기 위해 useReducer를 이용해 컴포넌트 바깥으로 빼내어 관리할 수 있습니다.<br/>
      </p>
      <CodeBlock code={
        `
export default function TestApp() {
  // 첫번째 변수 list: state
  // 두번째 변수 dispatch: state를 바꿀 액션 함수
  const [list, dispatch] = useReducer(
    listReducer, // 첫번째 인자: 내가 만든 리듀서 함수
    initialList // 두번째 인자: 초기 state 값
  );
  
  function handleList(type, text) {
    dispatch({
      type: type, // 내가 만든 listReducer에서 필요한 값
      id: nextId++,
      text: text,
    });
  }
  ...
  handleList('added', '추가할게요'); // state를 변경하고 싶을 때 호출
}
// 리듀서함수의 리턴값은 변경된 state값임. 항상 순수함수여야한다!
function listReducer(list, action) {
  switch (action.type) {
    case 'added': {
      return [...list, {
        id: action.id,
        text: action.text,
      }];
    }
    ...
    default: {
      throw Error('Unknown action: ' + action.type); // 에러 디버깅할때 용이
    }
  }
}
        `
      }/>
      <p>
        - 언제 state를 사용하고, 언제 reducer를 사용해야할까요?<br/>
        - useState: 간단한 상태를 관리할 때, 상태를 변경하는 경우의 수가 적을 때<br/>
        - useReducer: 복잡한 상태를 관리할 때, 상태를 변경하는 경우의 수가 많을 때<br/>
        - reducer를 사용하면, 버그찾기와 테스팅이 용이하다는 장점이 있습니다. reducer함수 자체가 항상 업데이트할 state를 리턴하는 순수함수이니까요!
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/extracting-state-logic-into-a-reducer'}>참고] state 로직을 reducer로 작성하기</TextButton>
    </section>

    <section className={'section'}>
      <h2 className={'title2'}>State의 불변성을 유지하기</h2>
      <p>
        - state에는 객체나 배열을 저장할 수 있습니다. 이런 state를 변경할 때는 state를 읽기 전용인 것 처럼 다루어여합니다.<br/>
      </p>
      <CodeBlock code={
        `
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  
  const handleChange = (e) => {
    // Bad 💩: state를 직접 변경
    position.x = e.clientX;
    position.y = e.clientY;
    
    // Good 👍: 새로운 객체를 만들어 state를 교체
    setPosition({
      x: e.clientX,
      y: e.clientY
    });
  }
}         
        `
      }/>
      <p>
        - 왜 일까요?<br/>
        - 리액트는 state가 변경되면 리렌더링을 한다고 위에서 언급했습니다. setState를 사용하지 않고, 객체를 직접 변경하게 되면 리액트는 state가 변경되었다고 알아차리지 못합니다. <br/>
        - state를 직접 변경하면, 리액트는 이전 렌더링에서 수정할 뿐입니다. <br/>
      </p>
      <br/>
      <TextButton href={'https://ko.react.dev/learn/updating-objects-in-state'}>참고] 객체 State 업데이트하기</TextButton><br/>
      <TextButton href={'https://ko.react.dev/learn/state-as-a-snapshot#rendering-takes-a-snapshot-in-time'}>참고] 렌더링은 그 시점의 스냅샷을 찍습니다.</TextButton>
    </section>
  </Layout>)
}

export default App;