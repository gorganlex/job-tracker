import type { StatusFilter } from '../data/applicationStatus';
import type { Application } from '../types/application';

export interface StoreState {
  applications: Application[];
  isApplicationActionModalOpen: boolean;
  applicationInEditId: string | null;
  statusFilter: StatusFilter;
}

export const StoreAction = {
  addApplication: 'ADD_APPLICATION',
  editApplication: 'EDIT_APPLICATION',
  favoriteApplication: 'FAVORITE_APPLICATION',
  setApplicationInEditId: 'SET_APPLICATION_IN_EDIT_ID',
  deleteApplication: 'DELETE_APPLICATION',
  toggleApplicationActionModal: 'TOGGLE_APPLICATION_ACTION_MODAL',
  setStatusFilter: 'SET_STATUS_FILTER',
} as const;

export type StoreActionType =
  | {
      type: typeof StoreAction.addApplication;
      application: Application;
    }
  | {
      type: typeof StoreAction.editApplication;
      application: Application;
    }
  | {
      type: typeof StoreAction.favoriteApplication;
      id: Application['id'];
    }
  | {
      type: typeof StoreAction.setApplicationInEditId;
      id: Application['id'] | null;
    }
  | {
      type: typeof StoreAction.deleteApplication;
      id: Application['id'];
    }
  | {
      type: typeof StoreAction.toggleApplicationActionModal;
    }
  | {
      type: typeof StoreAction.setStatusFilter;
      statusFilter: StatusFilter;
    };

export const storeReducer = (
  state: StoreState,
  action: StoreActionType,
): StoreState => {
  const { applications } = state;

  switch (action.type) {
    case StoreAction.addApplication: {
      return {
        ...state,
        applications: [...applications, action.application],
      };
    }

    case StoreAction.editApplication: {
      return {
        ...state,
        applications: applications.map((app) =>
          app.id === action.application.id ? action.application : app,
        ),
      };
    }

    case StoreAction.favoriteApplication: {
      return {
        ...state,
        applications: applications.map((app) =>
          app.id === action.id
            ? {
                ...app,
                favorite: !app.favorite,
              }
            : app,
        ),
      };
    }

    case StoreAction.setApplicationInEditId: {
      return {
        ...state,
        applicationInEditId: action.id,
      };
    }

    case StoreAction.deleteApplication: {
      return {
        ...state,
        applications: applications.filter(({ id }) => id !== action.id),
      };
    }

    case StoreAction.toggleApplicationActionModal: {
      return {
        ...state,
        isApplicationActionModalOpen: !state.isApplicationActionModalOpen,
      };
    }

    case StoreAction.setStatusFilter: {
      return {
        ...state,
        statusFilter: action.statusFilter,
      };
    }

    default: {
      const exhaustiveCheck: never = action;

      throw Error(`Unknown action: ${JSON.stringify(exhaustiveCheck)}`);
    }
  }
};
