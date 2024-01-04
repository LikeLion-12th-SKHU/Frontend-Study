export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} {...props}>{children}</button>
    </li>
  );
}
// function TabButton({ children, onClick }) 객체 구조 분해