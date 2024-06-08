export const favouritesReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_FAVOURITES':
        return [...state, action.payload];
      case 'REMOVE_FROM_FAVOURITES':
        return state.filter(hotel => hotel.name !== action.payload.name);
      default:
        return state;
    }
  };