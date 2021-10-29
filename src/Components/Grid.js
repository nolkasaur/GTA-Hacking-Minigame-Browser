import './Grid.css'
import Cell from './Cell';
import PropTypes from 'prop-types'
import React from "react";
import {Helmet} from "react-helmet";

const Grid = ({ rows, cols }) => {
    var rnd1X;
    var rnd1Y;
    var rnd2X;
    var rnd2Y;
    var rndSol1X;
    var rndSol1Y;
    var rndSol2X;
    var rndSol2Y;
    var pressed1 = false;
    var pressed2 = false;
    var correct1 = false;
    var correct2 = false;

    function rndmz() {
        rnd1X = Math.floor(Math.random() * 7)
        rnd1Y = Math.floor(Math.random() * 6)
        rnd2X = Math.floor(Math.random() * 7)
        rnd2Y = Math.floor(Math.random() * 7 + 9)
        rndSol1X = Math.floor(Math.random() * 7)
        rndSol1Y = Math.floor(Math.random() * 6)
        rndSol2X = Math.floor(Math.random() * 7)
        rndSol2Y = Math.floor(Math.random() * 7 + 9)
    }

    function lezTry() {
        setInterval(() => {
            for (let x = 0; x < 8; x++) {
                for (let y = 0; y < 18; y++) {
                    if ((x === rndSol1X && y === rndSol1Y) || (x === rndSol2X && y === rndSol2Y)
                        || (x === rndSol1X && y === (rndSol1Y + 1)) || (x === rndSol1X && y === (rndSol1Y + 2))
                        || (x === rndSol2X && y === (rndSol2Y + 1)) || (x === rndSol2X && y === (rndSol2Y + 2))) {

                    } else {
                        let rnd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
                        document.getElementById("cell-" + x + "-" + y).innerHTML = rnd[Math.floor(Math.random() * rnd.length)]
                    }
                }
            }
        }, 500);
    }

    const doTheThing = () => {
        rndmz()

        document.onkeydown = function (e) {
            switch (e.key) {
                case 'ArrowLeft':
                    if (rnd2Y === 0 || ((rnd2Y - 1) === (rnd1Y + 2) && rnd2X === rnd1X)) {

                    } else {
                        pressed2 = false;
                        correct2 = false;
                        rnd2Y = rnd2Y - 1
                        document.getElementById("cell-" + rnd2X + "-" + rnd2Y).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 1)).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 2)).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 3)).style.backgroundColor = "transparent"
                    }
                    e.preventDefault();
                    break;
                case 'ArrowUp':
                    if (rnd2X === 0 || ((rnd2X - 1) === (rnd1X) && ((rnd2Y === (rnd1Y - 2)) || (rnd2Y === (rnd1Y - 2)) || (rnd2Y === (rnd1Y - 1)) || (rnd2Y === rnd1Y) || (rnd2Y === (rnd1Y + 1)) || (rnd2Y === (rnd1Y + 2))))) {

                    } else {
                        pressed2 = false;
                        correct2 = false;
                        rnd2X = rnd2X - 1
                        document.getElementById("cell-" + rnd2X + "-" + rnd2Y).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 1)).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 2)).style.backgroundColor = "red"
                        document.getElementById("cell-" + (rnd2X + 1) + "-" + rnd2Y).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd2X + 1) + "-" + (rnd2Y + 1)).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd2X + 1) + "-" + (rnd2Y + 2)).style.backgroundColor = "transparent"
                    }
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                    if (rnd2Y === 15 || ((rnd2Y + 3) === (rnd1Y) && rnd2X === rnd1X)) {

                    } else {
                        pressed2 = false;
                        correct2 = false;
                        rnd2Y = rnd2Y + 1
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y - 1)).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + rnd2X + "-" + rnd2Y).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 1)).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 2)).style.backgroundColor = "red"
                    }
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    if (rnd2X === 7 || ((rnd2X + 1) === (rnd1X) && ((rnd2Y === (rnd1Y - 2)) || (rnd2Y === (rnd1Y - 2)) || (rnd2Y === (rnd1Y - 1)) || (rnd2Y === rnd1Y) || (rnd2Y === (rnd1Y + 1)) || (rnd2Y === (rnd1Y + 2))))) {

                    } else {
                        pressed2 = false;
                        correct2 = false;
                        rnd2X = rnd2X + 1
                        document.getElementById("cell-" + rnd2X + "-" + rnd2Y).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 1)).style.backgroundColor = "red"
                        document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 2)).style.backgroundColor = "red"
                        document.getElementById("cell-" + (rnd2X - 1) + "-" + rnd2Y).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd2X - 1) + "-" + (rnd2Y + 1)).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd2X - 1) + "-" + (rnd2Y + 2)).style.backgroundColor = "transparent"
                    }
                    e.preventDefault();
                    break;
                case 'a':
                    if (rnd1Y === 0 || ((rnd1Y - 1) === (rnd2Y + 2) && rnd1X === rnd2X)) {

                    } else {
                        pressed1 = false;
                        correct1 = false;
                        rnd1Y = rnd1Y - 1
                        document.getElementById("cell-" + rnd1X + "-" + rnd1Y).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 1)).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 2)).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 3)).style.backgroundColor = "transparent"
                    }
                    e.preventDefault();
                    break;
                case 'w':
                    if (rnd1X === 0 || ((rnd1X - 1) === (rnd2X) && ((rnd1Y === (rnd2Y - 2)) || (rnd1Y === (rnd2Y - 2)) || (rnd1Y === (rnd2Y - 1)) || (rnd1Y === rnd2Y) || (rnd1Y === (rnd2Y + 1)) || (rnd1Y === (rnd2Y + 2))))) {

                    } else {
                        pressed1 = false;
                        correct1 = false;
                        rnd1X = rnd1X - 1
                        document.getElementById("cell-" + rnd1X + "-" + rnd1Y).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 1)).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 2)).style.backgroundColor = "green"
                        document.getElementById("cell-" + (rnd1X + 1) + "-" + rnd1Y).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd1X + 1) + "-" + (rnd1Y + 1)).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd1X + 1) + "-" + (rnd1Y + 2)).style.backgroundColor = "transparent"
                    }
                    e.preventDefault();
                    break;
                case 'd':
                    if (rnd1Y === 15 || ((rnd1Y + 3) === (rnd2Y) && rnd1X === rnd2X)) {

                    } else {
                        pressed1 = false;
                        correct1 = false;
                        rnd1Y = rnd1Y + 1
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y - 1)).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + rnd1X + "-" + rnd1Y).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 1)).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 2)).style.backgroundColor = "green"
                    }
                    e.preventDefault();
                    break;
                case 's':
                    if (rnd1X === 7 || ((rnd1X + 1) === (rnd2X) && ((rnd1Y === (rnd2Y - 2)) || (rnd1Y === (rnd2Y - 2)) || (rnd1Y === (rnd2Y - 1)) || (rnd1Y === rnd2Y) || (rnd1Y === (rnd2Y + 1)) || (rnd1Y === (rnd2Y + 2))))) {

                    } else {
                        pressed1 = false;
                        correct1 = false;
                        rnd1X = rnd1X + 1
                        document.getElementById("cell-" + rnd1X + "-" + rnd1Y).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 1)).style.backgroundColor = "green"
                        document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 2)).style.backgroundColor = "green"
                        document.getElementById("cell-" + (rnd1X - 1) + "-" + rnd1Y).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd1X - 1) + "-" + (rnd1Y + 1)).style.backgroundColor = "transparent"
                        document.getElementById("cell-" + (rnd1X - 1) + "-" + (rnd1Y + 2)).style.backgroundColor = "transparent"
                    }
                    e.preventDefault();
                    break;
                case ' ':
                    pressed1 = true;
                    document.getElementById("cell-" + rnd1X + "-" + rnd1Y).style.backgroundColor = "darkgreen"
                    document.getElementById("cell-" + rnd1X + "-" + (rnd1Y+1)).style.backgroundColor = "darkgreen"
                    document.getElementById("cell-" + rnd1X + "-" + (rnd1Y+2)).style.backgroundColor = "darkgreen"
                    if((rnd1X===rndSol1X && rnd1Y===rndSol1Y) || (rnd1X===rndSol2X && rnd1Y===rndSol2Y)){
                        correct1 = true;
                    }
                    if(pressed2 && correct2){
                        var audio = new Audio('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Misc_soundboard_ehto_g_g.mp3');
                        audio.play();
                        alert("NOICE!")
                        window.location.reload(false)
                    } else if(pressed2 && !correct2){
                        var audio = new Audio('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7e/Misc_soundboard_disastah.mp3');
                        audio.play();
                        alert("WRONG! GIT GUD SCRUB!")
                        window.location.reload(false)
                    }
                    break;
                case 'Enter':
                    pressed2 = true;
                    document.getElementById("cell-" + rnd2X + "-" + rnd2Y).style.backgroundColor = "darkred"
                    document.getElementById("cell-" + rnd2X + "-" + (rnd2Y+1)).style.backgroundColor = "darkred"
                    document.getElementById("cell-" + rnd2X + "-" + (rnd2Y+2)).style.backgroundColor = "darkred"
                    if((rnd2X===rndSol2X && rnd2Y===rndSol2Y) || (rnd2X===rndSol1X && rnd2Y===rndSol1Y)){
                        correct2 = true;
                    }
                    if(pressed1 && correct1){
                        var audio = new Audio('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e0/Misc_soundboard_ehto_g_g.mp3');
                        audio.play();
                        alert("NOICE!")
                        window.location.reload(false)
                    } else if(pressed1 && !correct1){
                        var audio = new Audio('https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7e/Misc_soundboard_disastah.mp3');
                        audio.play();
                        alert("WRONG! GIT GUD SCRUB!")
                        window.location.reload(false)
                    }
                    break;
                default:
                    break;
            }
        };

        const checkDiv = setInterval(() => {
            if (document.getElementById("cell-" + rnd1X + "-" + rnd1Y) !== null) {
                document.getElementById("cell-" + rnd1X + "-" + rnd1Y).style.backgroundColor = "green"
                document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 1)).style.backgroundColor = "green"
                document.getElementById("cell-" + rnd1X + "-" + (rnd1Y + 2)).style.backgroundColor = "green"
                document.getElementById("cell-" + rnd2X + "-" + rnd2Y).style.backgroundColor = "red"
                document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 1)).style.backgroundColor = "red"
                document.getElementById("cell-" + rnd2X + "-" + (rnd2Y + 2)).style.backgroundColor = "red"
                clearInterval(checkDiv);
            }
        }, 100);
        lezTry()
    }

    function initBoard() {
        let rnd = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

        let data = [];
        for (let i = 0; i < rows; i++) {
            data.push([]);
            for (let j = 0; j < cols; j++) {
                let rndItem = rnd[Math.floor(Math.random() * rnd.length)]
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
            <div>
                <b><p id='timer'></p></b>
            </div>
            <Helmet>
        <script type="text/javascript">
          {`
          var audio = new Audio('https://static.wikia.nocookie.net/dota2_gamepedia/images/e/e8/Misc_soundboard_patience.mp3');
            secondsLeft = 30
            const xCheck = setInterval(function() {
              if(document.getElementById("timer") !== null){
                document.getElementById("timer").innerHTML = secondsLeft,
                clearInterval(xCheck);
              }
            }, 100)
            const yCheck = setInterval(function() {
              secondsLeft--,
              document.getElementById("timer").innerHTML = secondsLeft,
              secondsLeft===0 ? (audio.play(), alert('TOO SLOW! GIT GUD SCRUB!'), window.location.reload(false)) : ''
            }, 1000)
          `}
        </script>
        </Helmet>
            <img src="" onError={doTheThing} alt=""></img>
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
