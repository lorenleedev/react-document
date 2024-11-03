import React from 'react';
import './App.css';
import Layout from "./components/Layout";

function App() {
  return (
      <Layout>
        <h1 className={'title1'}>안녕하세요, 바쁜 프론트엔드 개발자 여러분! 🤚</h1>
        <section className={'section blending'}>
          <p className={'title3'}>활용 가이드 👇</p>
          <p>바빠도 꼭 알고 있어야하는 리액트 핵심개념만 요약하였습니다.</p>
          <p>아래의 항목에 해당되신다면, 왼쪽 네비게이션의 순서를 따라 문서를 쭉 훑어 보실것을 추천드립니다!</p>
          <br/>
          <ul>
            <li>
              <p>✅ 리액트를 실무에서 사용하고는 있지만, 내가 원리를 알고 사용하고 있는지 의문이 생기시나요?</p>
            </li>
            <li>
              <p>✅ 리액트를 이용해 개발할 때, 익숙한 문법(useState, useEffect)만 사용하고 계시나요?</p>
            </li>
            <li>
              <p>✅ 기술면접 전에 한 번 더 개념을 체크하고 싶으신가요?</p>
            </li>
          </ul>
          <br/>
          <p><b>참고 사항1]</b> 이 사이트는 5년 간 리액트를 사용한 프론트엔드 개발자가 리액트 공식문서를 읽고 실무에서 필요한 내용을 정리한 것입니다. 혹시나 틀린 내용이나 다른 의견이 있다면 아래 정정신고 메일로 공유 부탁드립니다!</p>
          <p><b>참고 사항2]</b> 현재 이 사이트는 PC버전만 제공합니다. Mobile버전이 필요하다면, 이메일로 알려주세요. 필요한 분들이 계시다면 빠르게 작업하도록 하겠습니다!</p>
        </section>
      </Layout>
  );
}

export default App;
