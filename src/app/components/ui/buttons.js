import 'src/app/styles/buttons.css'

function PrimaryButton(props) {
    return (
        <button className={`primary ${props.className}`} onClick={props.onClick}>
            {props.content}
        </button>
    );
}

function SecondaryButton(props) {
    return (
        <button className={`secondary ${props.className}`} onClick={props.onClick}>
            {props.content}
        </button>
    );
}

export {
    PrimaryButton,
    SecondaryButton,
  }