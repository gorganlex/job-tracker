import { createPortal } from 'react-dom';
import { ApplicationStatus } from '../../data/applicationStatus';
import { useEffect, useRef, useState } from 'react';
import { getApplicationDraft } from '../../utils/application';

export const AddEditApplicationModal = ({
  application,
  onClose,
  onSubmitApplication,
}) => {
  const [draftApplication, setDraftApplication] = useState(
    application || getApplicationDraft,
  );
  const [draftTag, setDraftTag] = useState('');

  const companyFieldRef = useRef();

  useEffect(() => companyFieldRef.current.focus(), []);

  useEffect(() => {
    const escapeEventListener = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', escapeEventListener);

    return () => document.removeEventListener('keydown', escapeEventListener);
  }, [onClose]);

  const onChangeDraft = (field, value) =>
    setDraftApplication((draft) => ({ ...draft, [field]: value }));

  const handleTagInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const trimmedDraftTag = draftTag.trim();

      if (!trimmedDraftTag) {
        return;
      }

      setDraftApplication((draft) => ({
        ...draft,
        tags: [...draft.tags, trimmedDraftTag],
      }));
      setDraftTag('');
    }
  };

  const handleDeleteTag = (toDeleteIndex) =>
    setDraftApplication((app) => ({
      ...app,
      tags: app.tags.filter((_, tagIndex) => tagIndex !== toDeleteIndex),
    }));

  const handleSave = () => onSubmitApplication(draftApplication);

  const content = (
    <div className="add-modal-wrapper">
      <div className="add-modal">
        <button className="add-modal-close" onClick={onClose}>
          X
        </button>
        <h2>{`${application ? 'Edit' : 'Add'} application`}</h2>
        <p>Interview rounds are added later, from the detail page.</p>
        <form
          className="add-form"
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <div className="add-form-fields">
            <div>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                ref={companyFieldRef}
                type="text"
                name="company"
                value={draftApplication.company}
                onChange={(event) =>
                  onChangeDraft('company', event.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="role">Role</label>
              <input
                id="role"
                type="text"
                name="role"
                value={draftApplication.role}
                onChange={(event) => onChangeDraft('role', event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={draftApplication.status}
                onChange={(event) =>
                  onChangeDraft('status', event.target.value)
                }
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
                value={draftApplication.dateApplied}
                onChange={(event) =>
                  onChangeDraft('dateApplied', event.target.value)
                }
              />
            </div>
            <div>
              <label htmlFor="tag">Tags</label>
              <input
                type="text"
                name="tag"
                id="tag"
                placeholder="Add a tag..."
                value={draftTag}
                onChange={(event) => setDraftTag(event.target.value)}
                onKeyDown={handleTagInputKeyDown}
              />
              <div className="tags-container">
                {draftApplication.tags.map((tag, i) => (
                  <span className="tag" key={tag + i}>
                    {tag}
                    <button type="button" onClick={() => handleDeleteTag(i)}>
                      x
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="add-form-actions">
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};
