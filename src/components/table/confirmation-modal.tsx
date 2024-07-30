import React from 'react'
import { Modal, Button } from 'antd'

interface ConfirmationModalProps {
  visible: boolean
  onCancel: () => void
  onEdit: () => void
  onRetriggerButtonClick: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  visible,
  onCancel,
  onEdit,
  onRetriggerButtonClick,
}) => {
  const handleTriggerButton = () => {
    onRetriggerButtonClick()
    onCancel()
  }

  return (
    <Modal
      title="Confirmation"
      open={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={handleTriggerButton}>
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
