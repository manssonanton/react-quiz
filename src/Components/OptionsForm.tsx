import React from 'react';
import undraw_Questions from '../Images/undraw_Questions_re_1fy7 (1).svg';

function OptionsForm() {
    return (
        <>
            <div>
                <h1>Welcome to this React Trivia Quiz</h1>
                <p>Please choose your options here and start your quiz!</p>
            </div>
            <div>
                <img src={undraw_Questions} alt="question mark illustration"></img>
            </div>
        </>
    );
}

export default OptionsForm;