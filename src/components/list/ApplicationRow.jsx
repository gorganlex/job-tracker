import { formatDate } from '../../utils/date';

export const ApplicationRow = ({
  application,
  onFavoriteApplication,
  onEditApplication,
  onDeleteApplication,
}) => {
  const { company, role, status, dateApplied, location, tags, favorite } =
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

  return (
    <tr>
      <td>
        <button
          style={{ background: favorite ? 'yellow' : 'lightgray' }}
          onClick={onFavoriteApplication}
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
        <button onClick={onEditApplication}>Edit</button>
        <button onClick={onDeleteApplication}>Delete</button>
      </td>
    </tr>
  );
};
