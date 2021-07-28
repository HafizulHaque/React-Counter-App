import Counter from './counter'
import './counters.css'

const Counters = ({counters, onIncrease, onDecrease,  onReset, onDelete}) => {
  console.log('Counters - render')
  return ( 
    <div className="container main">
      <button className="btn btn-secondary btn-md" onClick={onReset}>Reset</button>
      {
        counters.map(c => {
          return(
            <Counter 
              key={c.id} 
              counter={c} 
              onDelete={onDelete} 
              onIncrease={onIncrease} 
              onDecrease={onDecrease}/>
          )
        })
      }
    </div>
  );
}
 
export default Counters;
