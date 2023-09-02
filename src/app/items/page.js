import 'src/app/styles/items.css'
import ItemImage from 'src/app/components/item-image.js';
import { GetItems } from 'src/app/scripts/data.js';

function ItemCard(props) {
    const itemPageUrl = 'items/' + props._id

    return (
        <a href={itemPageUrl}>
            <div className='items-grid-card'>
                <ItemImage {...props} />

                <div className='items-grid-card-info'>
                    <h1>{props.name}</h1>
                    <p>{(props.description != "") ? props.description : 'No Description Found'}</p>
                </div>
            </div>
        </a>
    )
}

async function ItemsGrid() {
    const items = await GetItems();

    function Items() {
        if(items && items.length > 0) {
            return (
                items.map(item => (
                    <ItemCard key={item.id}{...item}/>
                ))
            )
        } else {
            return (
                <p className='error'>Error: No Items Found</p>
            )
        }

        // return <code>{JSON.stringify(items, null, 4)}</code>
    };

    return (
        <div className='items-grid'>
            <Items/>
        </div>
    )
}

export default function Items() {
    return (
        <div className='items-bounds'>
            <div className='items-wrapper'>
                <ItemsGrid/>
            </div>
        </div>
    )
} 