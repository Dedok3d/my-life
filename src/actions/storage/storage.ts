import { RootState } from '../../store/reducers';

const saveToLocalStorage = (state: RootState) => {
    localStorage.setItem('store', JSON.stringify(state));
};

const loadFromLocalStorage = (): RootState => {
    const item = localStorage.getItem('store');

    if (!item) {
        return;
    }

    return JSON.parse(item);
};
const MStorage = { saveToLocalStorage, loadFromLocalStorage }
export default MStorage;
