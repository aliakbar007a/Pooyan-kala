export const Modal= (props)=>{
    return <div className="modal">
      {props.children}
      <button onClick={props.func}> close </button>
    </div>
}