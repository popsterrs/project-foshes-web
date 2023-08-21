import 'src/app/styles/items.css'

async function GetItems() {
    try {
        const response = await fetch('https://api.projectfoshes.com/items');
        const data = await response.json();
    
        return {
          props: {
            items: data,
          },
        };
      } catch (error) {
        console.error('Error fetching data:', error);
        return {
          props: {
            items: [],
          },
        };
      }
}

function ItemCard(props) {
    return (
        <div>

        </div>
    )
}

function ItemsGrid() {
    return (
        <div>
            <pre>{JSON.stringify(GetItems(), null, 2)}</pre>
        </div>
    )
}

export default function Items() {
    return (
        <div className='items-bounds'>
            <ItemsGrid></ItemsGrid>
        </div>  
    )
}