import { RootState } from '../../store/reducers';

const saveToLocalStorage = ({ lifeIternals, options, firstName, birthDate, showMe, famousDeath }: RootState) => {
    localStorage.setItem('store', JSON.stringify({ lifeIternals, options, firstName, birthDate, showMe, famousDeath }));
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
