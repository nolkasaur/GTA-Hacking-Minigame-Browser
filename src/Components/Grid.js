import './Grid.css'
import Cell from './Cell';
import PropTypes from 'prop-types'

const Grid = ({ rows, cols }) => {
    function initBoard() {
        let rnd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let data = [];
        for (let i = 0; i < rows; i++) {
            data.push([]);
            for (let j = 0; j < cols; j++) {
                let rndItem = rnd[Math.floor(Math.random()*rnd.length)]
                data[i][j] = {
                    x: i, y: j, val: rndItem
                };
            }
        } return data;
    }
    function renderBoard(data) {
        return data.map((datarow) => {
            return datarow.map((dataitem) => {
                return (
                    <div
                        key={dataitem.x * datarow.length + dataitem.y}>
                        <Cell
                            value={dataitem}
                        />
                    </div>
                );
            })
        });
    }

    return (
        <div className='grid'>
            {renderBoard(initBoard())}
        </div>
    )
}

Grid.defaultProps = {
    rows: 8,
    cols: 18
}

Grid.propTypes = {
    rows: PropTypes.number,
    cols: PropTypes.number
}

export default Grid
