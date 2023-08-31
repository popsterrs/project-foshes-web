import 'src/app/styles/item-page.css'
import Image from 'src/app/components/item-image.js';
import { GetItemById } from 'src/app/scripts/data.js';

function ItemPageLeft(item) {
    return (
        <div class='item-page-left'>
            <Image {...item} />
        </div>
    )
}

function ItemPageRightInfo(props) {
    return (
        <div class='item-page-right-info-row'>
            <span>{props.name}</span>
            <p>{props.value}</p>
        </div>
    )
}

function ItemPageRight(item) {
    return (
        <div class='item-page-right'>
            <div class='item-page-right-row'>
                <h1>{item.name}</h1>
            </div>

            <div class='item-page-right-row'>
                <p>{(item.description != "") ? item.description : 'No Description Found'}</p>
            </div>
            <div class='item-page-right-row'>

                <div class='item-page-right-info'>
                    <div class='item-page-right-info-column'>
                        <ItemPageRightInfo name='Obtainable:' value={(item.obtainable) ? 'Yes' : 'No'} />
                        <ItemPageRightInfo name='Item type:' value={(item.item_type == 1) ? 'Knife' : 'Gun'} />
                        <ItemPageRightInfo name='Index:' value={item.id} />
                        <ItemPageRightInfo name='Placeholder:' value='nil' />
                    </div>

                    <div class='item-page-right-info-column'>
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
        <div class='item-page-top'>
            <ItemPageLeft {...item} />
            <ItemPageRight {...item} />
        </div>
    )
}

function ItemPageBottom(item) {
    return (
        <div class='item-page-bottom'>
            <h1>Sales History</h1>

            <div class='item-page-sales-chart'>

            </div>
        </div>
    )
}

export default async function ItemPage({ params }) {
    const item = await GetItemById(params.id);

    return (
        <div class='item-page-bounds'>
            <div class='item-page-wrapper'>
                <ItemPageTop {...item} />
                <ItemPageBottom {...item} />
            </div>
        </div>
    )
}