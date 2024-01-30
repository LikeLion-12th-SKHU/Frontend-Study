export default function Input({label, id, ...props}) {
    return (
        <p className="control">
            <label htmlFor={id}>{label}</label>
            {/* name 필드는 필수적 -> 다양한 입력 필드를 이름으로 구분해서 접근, 데이터 추출 가능 */}
            <input id={id} name={id} required {...props} />
        </p>
    );
}