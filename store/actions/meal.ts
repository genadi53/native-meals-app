export const Actions = {
  TOGGLE_FAVORITE: "toggle_favorite",
  SET_FILTERS: "set_filters",
};

export const toggle_favorite = (mealId: string) => {
  return { type: Actions.TOGGLE_FAVORITE, payload: { mealId: mealId } };
};

export const setFilters = (filterSettings: {}) => {
  return {
    type: Actions.SET_FILTERS,
    payload: {
      filters: filterSettings,
    },
  };
};
