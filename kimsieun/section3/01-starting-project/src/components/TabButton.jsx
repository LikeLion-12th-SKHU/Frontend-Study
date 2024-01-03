export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
// function TabButton({ children, onClick }) 객체 구조 분해