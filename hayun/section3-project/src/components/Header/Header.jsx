import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    // 보통 JSX 코드를 깔끔하게 유지하는 것을 선호하여 밖에서 값을 저장.
  
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    ); // 다중 선의 코드 변환시 ()로 묶어 이 코드가 함께 있다는 것을 표시해야 함.
  }