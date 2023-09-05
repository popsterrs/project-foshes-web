import 'src/app/styles/loading.css'
import 'src/app/styles/items.css'

export default function Loading() {
    function LoadingItemCard(props) {
        return (
            <a>
                <div className='items-grid-card'>
                    <div className='loading-card' />
                </div>
            </a>
        )
    }

    const loadingCardsAmmount = 50
    const loopArray = Array.from({ length: loadingCardsAmmount });

    return (
        <div className='items-bounds'>
            <div className='items-wrapper'>
                <div className='items-grid'>
                    {loopArray.map(item => (
                        <LoadingItemCard key={item} />
                    ))}
                </div>
            </div>
        </div>
        // <h1> loading</h1>
    )
}