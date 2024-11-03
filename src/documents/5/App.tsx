import Layout from "../../components/Layout";

const App = () => {
  return (<Layout>
    <h1 className={'title1 primary-color'}>Hooks</h1>
    {/*https://ko.react.dev/learn/passing-data-deeply-with-context*/}
    <section className={'section blending'}>
      <h2 className={'title3'}>이 문서 요약</h2>
      <p>준비중이에요! ✍️</p>
    </section>

  </Layout>)
}

export default App;