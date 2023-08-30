import { FaRegImage } from 'react-icons/fa';
import { IconKnife } from 'src/app/components/ui/icons.js'
import 'src/app/styles/item-image.css'

export default function Image(props) {
    if (props.hasOwnProperty('icon')) {
        const imageUrl = 'https://assetdelivery.roblox.com/v1/asset/?id=' + props.icon

        return (
            <img src={imageUrl}></img>  
        )
    } else {
        return (
            <div className='no-image-found-card'>
                <span>No Image Found</span>
                
                {props.item_type === 2 ? (
                    <IconKnife className='no-image-found-card-img' />
                ) : (
                    <FaRegImage className='no-image-found-card-img' />
                )}
            </div>
        )
    }
}