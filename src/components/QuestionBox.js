import React, {useState} from 'react'; 

const QuestionBox = ({question, options, correct, checkSelected}) => {
    const [answer, setAnswer] = useState(options);
    // const handleOnClick = () => {
    //     setAnswer([option]);
    // }
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {
                answer.map((option) => 
                    <button 
                        key={option} 
                        className="answerBtn" 
                        onClick={() => 
                            {
                                setAnswer([option]);
                                checkSelected(option, correct);
                            }
                        }
                        
                    >
                        {option}

                    </button>)
            }
        </div>
    )
};

export default QuestionBox;