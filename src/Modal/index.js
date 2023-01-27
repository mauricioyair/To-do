import React, { createPortal } from "react-dom";
import './index.css'

function Modal({children}){
  return createPortal(
    <div className="Modal">
      {children}
    </div>,
    document.getElementById('modal')
  );

}

export { Modal }