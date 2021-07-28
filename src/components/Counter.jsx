import './counter.css'

const Counter = ({counter, onIncrease, onDelete}) => {
  const buttonClass = counter.value ? 'btn-primary' : 'btn-warning'
  return (
    <div className="counterItem">
      <button className={`btn ${buttonClass} btn-sm`}>{counter.value}</button>
      <button onClick={() => onIncrease(counter)} className="btn btn-outline-success btn-sm">Increase</button>
      <button onClick={() => onDelete(counter.id)} className="btn btn-outline-danger btn-sm">Delete</button>
    </div>
  )
}
 
export default Counter;
