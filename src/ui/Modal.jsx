import { useEffect, useRef, useId } from "react";
import Icon from "./Icon";
export default function Modal({ title, closeLabel, onClose, children }) {
  const dialog = useRef(null);
  const titleId = useId();
  useEffect(() => {
    const node = dialog.current;
    const previous = document.activeElement;
    node.showModal();
    return () => {
      node.close();
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className="dialog"
      aria-labelledby={titleId}
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dialog-content">
        <div className="dialog-heading">
          <h2 id={titleId}>{title}</h2>
          <button
            className="icon-button"
            aria-label={closeLabel}
            onClick={onClose}
          >
            <Icon name="close" />
          </button>
        </div>
        {children}
      </div>
    </dialog>
  );
}
