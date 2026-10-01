import { formatDate } from '../../utils/date';
import { StoreAction } from '../../store/storeReducer';
import { useStoreDispatch } from '../../store/storeContext';
import type { Application } from '../../types/application';
import type { ReactNode } from 'react';

export const ApplicationRow = ({
  application,
}: {
  application: Application;
}) => {
  const dispatch = useStoreDispatch();

  const { id, company, role, status, dateApplied, location, tags, favorite } =
    application;

  const renderTags = (tags: string[]): ReactNode => {
    if (!tags.length) {
      return undefined;
    }

    const [first, second, ...rest] = tags;
    const tagsChipsTexts = [
      first,
      ...(second ? [second] : []),
      ...(rest.length ? [`+${rest.length}`] : []),
    ];

    return tagsChipsTexts.map((tag, index) => (
      <span key={`${tag}-${index}`}>{tag} </span>
    ));
  };

  const handleFavoriteClick = () =>
    dispatch({ type: StoreAction.favoriteApplication, id });

  const handleEditClick = () => {
    dispatch({ type: StoreAction.setApplicationInEditId, id });
    dispatch({ type: StoreAction.toggleApplicationActionModal });
  };

  const handleDeleteClick = () =>
    dispatch({ type: StoreAction.deleteApplication, id });

  return (
    <tr>
      <td>
        <button
          style={{ background: favorite ? 'yellow' : 'lightgray' }}
          onClick={handleFavoriteClick}
        >
          STAR
        </button>
      </td>
      <td>{company}</td>
      <td>{role}</td>
      <td>{status}</td>
      <td>{formatDate(dateApplied)}</td>
      <td>{location}</td>
      <td>{renderTags(tags)}</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};
