export default function Island(props) {

    return(
        <button 
        key={props.id} 
        className={`island-btn island-${props.id}`}
        onClick={() => props.action && props.handleClick(props.action)}
        >
        <img src={props.img} alt={props.name} className="island-img" />
        </button>
    )
}
