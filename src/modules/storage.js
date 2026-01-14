import { projectsList } from './projects';
function storeLists() {
  localStorage.setItem('lists', JSON.stringify(projectsList));
}
function getStoredLists() {
  const storedProjectsList = JSON.parse(localStorage.getItem('lists'));
  projectsList.length = 0;
  projectsList.push(...storedProjectsList);
}
export { getStoredLists, storeLists };
