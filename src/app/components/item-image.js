export default function Image(props) {
    if (props.hasOwnProperty('icon')) {
        const imageUrl = 'https://assetdelivery.roblox.com/v1/asset/?id=' + props.icon

        return (
            <img src={imageUrl}></img>  
        )
    } else {
        return (
            <span>No Image Fount</span>
        )
    }
}