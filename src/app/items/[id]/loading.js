import 'src/app/styles/loading.css'
import 'src/app/styles/item-page.css'
import ItemImage from 'src/app/components/item-image.js';

export default function Loading() {


    return (

        <div className='item-page-bounds'>
            <div className='loading-card'/>
            <div className='item-page-wrapper'>
                <div className='item-page-top'>
                    <div className='item-page-left'>
                        <ItemImage/>
                    </div>

                    <div className='item-page-right'>
                        <div className='item-page-right-row'>
                        
                        </div>

                        <div className='item-page-right-row'>
                            
                        </div>

                        <div className='item-page-right-row'>
                            
                        </div>
                    </div>
                </div>
                <div className='item-page-bottom'>
                    <h1>Sales History</h1>

                    <div className='item-page-sales-chart'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}