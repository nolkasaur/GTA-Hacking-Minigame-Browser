import './Cell.css'

const Cell = ({value}) => {
    return (
        <div className='cell'>
            {value.val}
        </div>
    )
}

export default Cell
