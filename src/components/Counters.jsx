import Counter from './counter'
import './counters.css'

const Counters = ({counters, onIncrease, onReset, onDelete}) => {
  return ( 
    <div className="container main">
      <button className="btn btn-secondary btn-md" onClick={onReset}>Reset</button>
      {
        counters.map(c => {
          return(
            <Counter key={c.id} counter={c} onDelete={onDelete} onIncrease={onIncrease}/>
          )
        })
      }
    </div>
  );
}
 
export default Counters;
