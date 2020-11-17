import React, {component} from 'react';

const result = ({score, playAgain}) => {
    return (
        <div className="score-board">
            <div className="score">You scored {score}/5 correct answers!</div>
            <button className="playBtn" onClick={playAgain}>play-again</button>
        </div>
    )
}

export default result;