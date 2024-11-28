// import '/Model.css'
import "./Model.css";
export default function Model(bnb) {
  return (
    <div className="model-bk">
          <div className="model">
          
              {bnb.children}
            
      
      <button onClick={bnb.handleClose}>Close</button>
    </div>
    </div>
  );
}
