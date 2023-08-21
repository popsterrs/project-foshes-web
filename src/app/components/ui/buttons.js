import 'src/app/styles/buttons.css'

function PrimaryButton(props) {
    return (
        <button className='primary' onClick={props.onClick}>
            {props.content}
        </button>
    )
}

function SecondaryButton(props) {
    return (
        <button className='secondary' onClick={props.onClick}>
            {props.content}
        </button>
    )
}


export {
    PrimaryButton,
    SecondaryButton,
  }