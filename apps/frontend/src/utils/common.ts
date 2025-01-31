export const sortByName = (items: any, isAsc = true) => {
  return items.sort((a, b) => {
    if (a.name < b.name) {
      return isAsc ? -1 : 1;
    }
    if (a.name > b.name) {
      return isAsc ? 1 : -1;
    }
    return 0;
  });
};
