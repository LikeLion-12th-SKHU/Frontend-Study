import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

function App() {
  return (
    // <> 엠티 태그가 불필요한 div도 쓰지 않고 Fragment를 대체할 수 있음. + 모든 리액트 프로젝트에서 사용 가능.
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
