import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  const dialog = useRef();

  // 특정 값 동기화 시키고자 useEffect 사용. 무한루프 막기 위함X.
  // open 속성을 DOM API 또는 특정 행동과 동기화시키려는 것.
  useEffect(() => {
    // 부수 효과(jsx 코드에 직접적 영향X)
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
    // 이 코드는 의존성이 있기 때문에 의존성 배열 비워둘 수 없음.
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
