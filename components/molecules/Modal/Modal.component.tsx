import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

export interface ModalProps {
  /** To show modal */
  show?: boolean;
  /** To set modal title */
  title?: string;
  /** To set modal height */
  height?: number | string;
  /** To set modal width */
  width?: number | string;
  /** To show overlay */
  overlay?: boolean;
  /** To customize overlay */
  overlayClass?: string;
  /** To show close button */
  close?: boolean;
  /** To customize close button */
  closeClass?: string;
  /** To set modal content */
  children?: React.ReactNode;
  /** Handler for closing modal */
  hideModal?: () => any;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { show, children, ...modalProps } = props;
  if (!show || typeof window === "undefined") return null;
  const modalEl = window.document?.getElementById("modal-portal");
  return ReactDOM.createPortal(<ModalBody {...modalProps}>{children}</ModalBody>, modalEl!);
};

const ModalBody: React.FC<ModalProps> = (props) => {
  const { children, title, hideModal, height, width, overlay, overlayClass, close, closeClass } = props;
  return (
    <Fragment>
      {overlay && <div className={`${styles.overlay} ${overlayClass || ""}`} onClick={hideModal} />}
      <div
        className={styles.modal}
        style={{
          minHeight: typeof height === "number" ? `${height}px` : height,
          minWidth: typeof width === "number" ? `${width}px` : width,
        }}
      >
        {title && (
          <Fragment>
            {typeof title === "string" ? <h3 className={styles.modal__title}>{title}</h3> : title}
            <hr style={{ border: "1px solid #e7e7e7" }} />
          </Fragment>
        )}
        {children}
      </div>
    </Fragment>
  );
};
ModalBody.defaultProps = {
  overlay: true,
  close: true,
};

export default Modal;