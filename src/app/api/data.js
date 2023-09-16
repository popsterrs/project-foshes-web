import apiReturn from 'src/app/api/apiReturn.json';

function GetItems() {
    return apiReturn
}

async function GetItemById(itemId) {
    const items = await GetItems();

    return items.find(item => item.id === Number(itemId));
}
//