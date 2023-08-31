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

function ItemPageRightInfo(name, value) {
    return (
        <div class='item-page-right-info-row'>
            <span>{String(name)}</span>
            <p>{String(value)}</p>
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

                <div class='item-page-right-info'>
                    <div class='item-page-right-info-column'>
                        <ItemPageRightInfo name='Obtainable' value={JSON.stringify(item.obtainable)}/>
                    </div>

                    <div class='item-page-right-info-column'>

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