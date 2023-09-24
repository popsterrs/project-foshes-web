async function GetItems() {
    try {
      const apiUrl = 'https://pastebin.com/raw/iv5Gbw1d'
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

    return items.find(item => item._id === Number(itemId));
}

async function GetMediumBlogPosts(user) {
  try {
    const apiUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/' + user
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

async function GetBlogByGUID(guid) {
  const blogs = await GetMediumBlogPosts('@william_hamilton');

  return blogs.items.find(blog => blog.guid === 'https://medium.com/p/' + guid);
}

export {
    GetItems,
    GetItemById,
    GetMediumBlogPosts,
    GetBlogByGUID,
}