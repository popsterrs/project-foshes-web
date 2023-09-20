async function GetItems() {
    try {
      const apiUrl = 'https://pastebin.com/raw/iv5Gbw1d'
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
    console.log(data);

      return data;
    } catch (error) {
      console.error('Error fetching data:', error);

      return null;
    }
  }
  

async function GetItemById(itemId) {
    const items = await GetItems();

    return items.find(item => item.id === Number(itemId));
}

export {
    GetItems,
    GetItemById,
}