import React from 'react'
import { Modal, Button } from 'antd'

interface ConfirmationModalProps {
  visible: boolean
  onCancel: () => void
  onEdit: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onCancel,
  onEdit,
}) => {
  return (
    <Modal
      title="Confirmation"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          No, Retrigger with current value
        </Button>,
        <Button key="edit" type="primary" onClick={onEdit}>
          Yes, Edit and Retrigger
        </Button>,
      ]}
    >
      <p style={{ fontSize: '16px' }}>
        Are you sure you want to Change Title and Description?
      </p>
    </Modal>
  )
}

export default ConfirmationModal
