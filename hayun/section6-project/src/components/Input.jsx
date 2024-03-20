export default function Input({label, invalid, ...props}) {
  let laberClasses = 
    "block mb-2 text-xs font-bold tracking-wide uppercase";

  let inputClasses = 
    "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    laberClasses += ' text-red-400'; // 공백은 두 개의 별개의 클래스로 유지되도록 함.
    inputClasses += ' text-red-500 bg-red-100 border-red-300';
  } else {
    labelClasses += ' text-stone-300';
    inputClasses += ' text-gray-700 bg-stone-300';
  }

    return (
      <p>
        <label className={laberClasses}>{label}</label>
        <input className={inputClasses} {...props} />
      </p>
    );
}