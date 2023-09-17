async function GetItems() {
    try {
    //   const apiUrl = 'https://api.projectfoshes.com/items';
      const apiUrl = 'https://scrape.pastebin.com/api_scrape_item.php?i='
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
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