export default function CoreConcept({image, title, description}) { // 여기 {}는 첫 번째 매개변수의 구조 분해할 때 사용. => 객체 구조 분해 문법
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }