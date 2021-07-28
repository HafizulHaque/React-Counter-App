import './counter.css'

const Counter = ({counter, onIncrease, onDecrease, onDelete}) => {
  console.log('counter - render')
  const buttonClass = counter.value ? 'btn-primary' : 'btn-warning'
  return (
    <div className="row m-3">
      <button className={`btn ${buttonClass} btn-sm col-1 m-2`}>{counter.value}</button>
      <button onClick={() => onIncrease(counter)} className="btn btn-outline-success btn-sm col-1 m-2">Increase</button>
      <button disabled={!counter.value} onClick={() => onDecrease(counter)} className="btn btn-outline-info btn-sm col-1 m-2">Decrease</button>
      <button onClick={() => onDelete(counter.id)} className="btn btn-outline-danger btn-sm col-1 m-2">Delete</button>
    </div>
  ) 
}
 
export default Counter;
