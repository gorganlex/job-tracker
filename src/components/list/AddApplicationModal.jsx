import { createPortal } from 'react-dom';

export const AddApplicationModal = () => {
  return createPortal(
    <div className="add-modal-wrapper">
      <div className="add-modal">add application model</div>
    </div>,
    document.body,
  );
};
