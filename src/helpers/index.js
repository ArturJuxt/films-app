export const convertToMap = (items, key = 'id') => {
    const itemsMap = new Map();

    items.map(item => itemsMap.set(item[key], item));

    return itemsMap;
} 