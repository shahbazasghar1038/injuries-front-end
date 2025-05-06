import React from "react";
import { Modal } from "antd";

const SubmissionModal = ({
  open,
  onClose,
  children,
  width = 600,
  borderRadius = 12,
}) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width={width}
      centered
      bodyStyle={{ borderRadius, padding: 24 }}
      style={{ borderRadius : borderRadius }}
      className="submission-modal"
    >
      {children}
    </Modal>
  );
};

export default SubmissionModal;
