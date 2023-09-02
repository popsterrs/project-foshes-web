import 'src/app/styles/item-page.css'
import ItemImage from 'src/app/components/item-image.js';
import { GetItemById } from 'src/app/scripts/data.js';

function ItemPageLeft(item) {
    return (
        <div className='item-page-left'>
            <ItemImage {...item} />
        </div>
    )
}

function ItemPageRightInfo(props) {
    return (
        <div className='item-page-right-info-row'>
            <span>{props.name}</span>
            <p>{props.value}</p>
        </div>
    )
}

function ItemPageRight(item) {
    return (
        <div className='item-page-right'>
            <div className='item-page-right-row'>
                <h1>{item.name}</h1>
            </div>

            <div className='item-page-right-row'>
                <p>{(item.description != "") ? item.description : 'No Description Found'}</p>
            </div>
            <div className='item-page-right-row'>

                <div className='item-page-right-info'>
                    <div className='item-page-right-info-column'>
                        <ItemPageRightInfo name='Obtainable:' value={(item.obtainable) ? 'Yes' : 'No'} />
                        <ItemPageRightInfo name='Item type:' value={(item.item_type == 1) ? 'Knife' : 'Gun'} />
                        <ItemPageRightInfo name='Index:' value={item._id} />
                        <ItemPageRightInfo name='Placeholder:' value='nil' />
                    </div>

                    <div className='item-page-right-info-column'>
                        <ItemPageRightInfo name='Placeholder:' value='nil' />
                        <ItemPageRightInfo name='Placeholder:' value='nil' />
                        <ItemPageRightInfo name='Placeholder:' value='nil' />
                        <ItemPageRightInfo name='Placeholder:' value='nil' />
                    </div>
                </div>
            </div>
        </div>
    )
}

function ItemPageTop(item) {
    return (
        <div className='item-page-top'>
            <ItemPageLeft {...item} />
            <ItemPageRight {...item} />
        </div>
    )
}

function ItemPageBottom(item) {
    return (
        <div className='item-page-bottom'>
            <h1>Sales History</h1>

            <div className='item-page-sales-chart'>

            </div>
        </div>
    )
}

export default async function ItemPage({ params }) {
    const item = await GetItemById(params._id);

    return (
        <div className='item-page-bounds'>
            <div className='item-page-wrapper'>
                <ItemPageTop {...item} />
                <ItemPageBottom {...item} />
            </div>
        </div>
    )
}