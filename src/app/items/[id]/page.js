import 'src/app/styles/item-page.css'
import Image from 'src/app/components/item-image.js';
import { GetItemById } from 'src/app/scripts/data.js';

export default async function ItemPage({params}) {
    const item = await GetItemById(params.id);

    return (
        <div class='item-page-bound'>
            <div class='item-page-wrapper'>
                <div class='item-page-desktop'>
                    <div class='item-page-left'>
                        <Image {...item} />
                        <h1>{item.id}</h1>
                    </div>
                    <div class='item-page-right'>

                    </div>
                </div>
            </div>
        </div>
    )
  }