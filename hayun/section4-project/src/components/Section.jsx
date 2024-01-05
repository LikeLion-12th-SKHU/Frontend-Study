export default function Section({ title, children, ...props }) { // 데이터를 객체로 모으기 위해 스프레드 사용
    return (
        // 값의 집합(데이터)을 펼쳐서 다른 요소로 보내기 위해 스프레드 사용
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}