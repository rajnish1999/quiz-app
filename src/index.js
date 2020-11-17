import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from './quizService/index';
import QuestionBox from './components/QuestionBox';
import Result from './components/Result';

class QuizBee extends Component {

    state = {
        questionBank : [],
        score : 0,
        questionsAttempted : 0
    };

    getQuestions = () => {
        quizService().then((questions) => {
            this.setState({
                questionBank : questions
            });
            
        });
    };

    checkSelected = (optionSelected, correctAns) => {
        
        if(optionSelected === correctAns){
            this.setState({
                score : this.state.score + 1
            })
        }
        this.setState({
            questionsAttempted : this.state.questionsAttempted + 1
        })
        
    }

    playAgain = () => {
        this.getQuestions();
        this.setState({
            score : 0,
            questionsAttempted : 0
        })
    }

    componentDidMount(){
        this.getQuestions();
    }

    render() {
        return (
            <div className="container">
                <div className="title">
                    QuizBee
                </div>
                <div>
                    {
                        this.state.questionBank.length > 0 && 
                        this.state.questionsAttempted < 5 && 
                        this.state.questionBank.map(
                            ({question, answers, correct, questionId}) => (
                                <QuestionBox 
                                    question={question} 
                                    options={answers} 
                                    key={questionId}
                                    correct={correct} 
                                    checkSelected = {this.checkSelected}
                                />
                            )
                        )
                    }
                </div>
                {   this.state.questionsAttempted >= 5 ?
                    < Result score={this.state.score} playAgain={this.playAgain} /> : 
                    null
                }
            </div>
        )
    };

}

ReactDOM.render(<QuizBee />, document.getElementById('root'));
