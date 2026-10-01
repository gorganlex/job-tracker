import { formatDate } from '../../utils/date';
import { StoreAction } from '../../store/storeReducer';
import { useStoreDispatch } from '../../store/storeContext';

export const ApplicationRow = ({ application }) => {
  const dispatch = useStoreDispatch();

  const { id, company, role, status, dateApplied, location, tags, favorite } =
    application;

  // tags can be duplicated so add an index to the key to ensure uniqueness
  const renderTag = (tag, index) => <span key={`${tag}-${index}`}>{tag} </span>;

  const renderTags = (tags) => {
    if (!tags.length) {
      // should we display a placeholder or something if there are no tags?
      return undefined;
    }

    const [first, second, ...rest] = tags;

    return [first, second, rest.length ? `+${rest.length}` : undefined]
      .filter(Boolean)
      .map((tag, index) => renderTag(tag, index));
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
