import { useSearchParams } from 'react-router';
import {
  ApplicationStatus,
  StatusFilterAll,
  type StatusFilter,
} from '../data/applicationStatus';

export const useStatusFilter = (): [
  StatusFilter,
  (status: StatusFilter) => void,
] => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getStatusFilter = (): StatusFilter => {
    const statusParam = searchParams.get('status');
    const statusFilter: StatusFilter | undefined = Object.values(
      ApplicationStatus,
    ).find((status) => status === statusParam);

    return statusFilter ?? StatusFilterAll;
  };

  const setStatusFilter = (status: StatusFilter): void =>
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);

      next.delete('page');

      if (status === StatusFilterAll) {
        next.delete('status');

        return next;
      }

      next.set('status', status);

      return next;
    });

  return [getStatusFilter(), setStatusFilter];
};
