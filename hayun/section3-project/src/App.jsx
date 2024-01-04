import { useState } from 'react'; // 리액트에서 use로 시작하는 모든 함수는 리액트 Hooks.

import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TapButton.jsx';
import { EXAMPLES } from './data.js';

function App() { // React Components
  const [ selectedTopic, setSelectedTopic ] = useState('components'); // 컴포넌트 함수 안에서 바로 호출되어야 하며 내부 함수 안에 중첩되어서는 안됨.

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log('APP COMPONENT RENDERING');

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
          />
          {/* 위 세 줄이 밑에 한 줄과 같음. */}
          <CoreConcept {...CORE_CONCEPTS[1]}/> 
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            {/* 위처럼 <></> 사이에 넣으면 위치를 알지 못해 리액트 내에서 해당 값을 무시함. */}
            {/* 따라서 {}으로 컴포넌트 합성 잘 해야 함. */}
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
