import { createPortal } from 'react-dom';
import { ApplicationStatus } from '../../data/applicationStatus';
import { useEffect, useRef, useState } from 'react';
import { getApplicationDraft } from '../../utils/application';

export const AddApplicationModal = ({ onClose }) => {
  const [draft, setDraft] = useState(getApplicationDraft);

  const companyFieldRef = useRef();

  useEffect(() => companyFieldRef.current.focus(), []);

  const onChangeDraft = (field, value) =>
    setDraft((app) => ({ ...app, [field]: value }));

  const handleSave = () => console.log(draft);

  const content = (
    <div className="add-modal-wrapper">
      <div className="add-modal">
        <button onClick={onClose}>X</button>
        <h2>Add application model</h2>
        <p>Interview rounds are added later, from the detail page.</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <div>
            <label htmlFor="company">Company</label>
            <input
              id="company"
              ref={companyFieldRef}
              type="text"
              name="company"
              value={draft.company}
              onChange={(event) => onChangeDraft('company', event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="role">Role</label>
            <input
              id="role"
              type="text"
              name="role"
              value={draft.role}
              onChange={(event) => onChangeDraft('role', event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={draft.status}
              onChange={(event) => onChangeDraft('status', event.target.value)}
            >
              {Object.values(ApplicationStatus).map((status) => (
                <option key={status}>{status}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dateApplied">Date Applied</label>
            <input
              id="dateApplied"
              type="text"
              name="dateApplied"
              value={draft.dateApplied}
              onChange={(event) =>
                onChangeDraft('dateApplied', event.target.value)
              }
            />
          </div>

          <button type="button" onClick={onClose}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
