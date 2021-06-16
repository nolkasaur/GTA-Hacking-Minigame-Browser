import './Phone.css'
import Grid from './Grid'
import { useState } from 'react'

const Phone = () => {
    const [gameState, setGameState] = useState(0)
    const onClick = () => {
        setGameState(1)
    }

    return (
        <div className='phone'>
            {(gameState===1 &&
            <Grid rows={8} cols={18} />) || (gameState===0 &&
            <div className='initialMenu'>
                <div>Get ready for the hackin'!</div>
                <button className='button' onClick={onClick}>SEND IT</button>
            </div>) || (gameState===2 &&
            <div>

            </div>)}
        </div>
    )
}

export default Phone
