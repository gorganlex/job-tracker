export const StoreActions = {
  addApplication: 'ADD_APPLICATION',
  editApplication: 'EDIT_APPLICATION',
  favoriteApplication: 'FAVORITE_APPLICATION',
  setApplicationInEditId: 'SET_APPLICATION_IN_EDIT_ID',
  deleteApplication: 'DELETE_APPLICATION',
  toggleApplicationActionModal: 'TOGGLE_APPLICATION_ACTION_MODAL',
  setStatusFilter: 'SET_STATUS_FILTER',
};

export const storeReducer = (state, action) => {
  const { applications } = state;

  switch (action.type) {
    case StoreActions.addApplication: {
      return {
        ...state,
        applications: [...applications, action.application],
      };
    }

    case StoreActions.editApplication: {
      return {
        ...state,
        applications: applications.map((app) =>
          app.id === action.application.id ? action.application : app,
        ),
      };
    }

    case StoreActions.favoriteApplication: {
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

    case StoreActions.setApplicationInEditId: {
      return {
        ...state,
        applicationInEditId: action.id,
      };
    }

    case StoreActions.deleteApplication: {
      return {
        ...state,
        applications: applications.filter(({ id }) => id !== action.id),
      };
    }

    case StoreActions.toggleApplicationActionModal: {
      return {
        ...state,
        isApplicationActionModalOpen: !state.isApplicationActionModalOpen,
      };
    }

    case StoreActions.setStatusFilter: {
      return {
        ...state,
        statusFilter: action.statusFilter,
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};
