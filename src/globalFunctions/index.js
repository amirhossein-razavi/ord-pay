import { setItem, getItem } from './asyncLocalStorage';

export const addBasketCount = async () => {
    const basketCount = await getItem("basketCount");
    setItem("basketCount", parseInt(basketCount) + 1)
}