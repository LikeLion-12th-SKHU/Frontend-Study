// CORE_CONCEPTS의 데이터를 매개변수로 다시 정의
export default function CoreConcept({image, title, description}) {
    return <li>
      
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  }