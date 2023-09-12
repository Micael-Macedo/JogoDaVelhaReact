import React, { useState } from "react";

const TicTacToe = () =>{
    const [turn, setTurn] = useState('x')
    const [winner, setWinner] = useState()
    const [cells, setCells] = useState(Array(9).fill(''))
    const checkForWinner = (squares) =>{
        const combos = { 
            across: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            down:[
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            diagnol:[
                [0,4,8],
                [2,4,6],
                [2,5,8],
            ],
        }
        for(let combo in combos){
            combos[combo].forEach((pattern) => {
                if(
                    squares[pattern[0]] === '' || 
                    squares[pattern[1]] === '' || 
                    squares[pattern[2]] === ''
                    ){
                        
                    }else if (
                        squares[pattern[0]] === squares[pattern[1]] && 
                        squares[pattern[1]] === squares[pattern[2]]
                        ){
                            console.log(squares[pattern[0]])
                        setWinner(squares[pattern[0]])
                    }
                })
        }
    }
    const restartGame = () => {
        setCells(Array(9).fill(''))
        setTurn(winner)
        setWinner(null)
    }
    const handleClick = (num) => {
        if(cells[num] !== ''){
            return 
        }
        let squares = [...cells]

        if(turn === 'x'){
            setTurn('o')
        }else{
            setTurn('x')
        }
        squares[num] = turn
        setCells(squares)
        checkForWinner(squares)
        
    }

    const Cell = ({num}) =>{
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }

    
    return (
        <div className="container">
            <table>
                Turn: {turn}
                <tbody>
                    <tr>
                        <Cell num={0}/>
                        <Cell num={1}/>
                        <Cell num={2}/>
                    </tr>
                    <tr>
                        <Cell num={3}/>
                        <Cell num={4}/>
                        <Cell num={5}/>
                    </tr>
                    <tr>
                        <Cell num={6}/>
                        <Cell num={7}/>
                        <Cell num={8}/>
                    </tr>
                </tbody>
            </table>
            {winner && (
                <>
                <p>{winner} is the winner!</p>
                <button onClick={restartGame}>Play Again</button>
                </>
            )}
        </div>
    )
}

export default TicTacToe