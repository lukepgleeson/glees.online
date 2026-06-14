export default function Island(props) {

    return(
        <button 
        key={props.id} 
        className={`island-btn island-${props.id}`}
        onClick={() => alert(`Traveling to ${props.name}!`)}
        >
        <img src={props.img} alt={props.name} className="island-img" />
        </button>
    )
}
