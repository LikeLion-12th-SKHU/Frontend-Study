export default function TabButton({ children, onSelect, isSelected }) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
        </li>
    ); // children 부분에 내용 출력
}