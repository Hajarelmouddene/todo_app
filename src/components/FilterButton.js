export default function FilterButton(props) {
    return(
        <button type="button" aria-pressed={props.isPressed} onClick={() => {props.setFilter(props.name)}}>
            <span className="visually-hidden">Show </span>
            <span style={{color: props.isPressed ? "var(--footer-button-active-color)" : "inherit"}}>{props.name}</span>
            <span className="visually-hidden"> tasks</span>
          </button>
    );
}