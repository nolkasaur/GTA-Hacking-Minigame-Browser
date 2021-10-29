import './Cell.css'

const Cell = ({value}) => {
    return (
        <div className='cell' id={"cell-" + value.x + "-" + value.y}>
            {value.val}
        </div>
    )
}

export default Cell
