function GetItems() {
    return fetch('https://api.projectfoshes.com/items')
        .then(response => response.json())
        .then(data => data.items)
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
}

async function GetItemById(itemId) {
    const items = await GetItems();

    return items.find(item => item.id === Number(itemId));
}

export {
    GetItems,
    GetItemById,
}