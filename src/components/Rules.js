import React from 'react';

const Rules = () => {
    return (
        // Rules
        <div className='rulesContainer me-auto'>
            <div>
                <a className="btn btn-outline-light btn-sm" data-bs-toggle="offcanvas" href="#offCanvasRules" role="button" aria-controls="offCanvasRules">
                    Help
                </a>
            </div>
            
            {/* Off Canvas */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offCanvasRules" aria-labelledby="offCanvasRulesLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offCanvasRulesLabel">Game Rules</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>The aim of the game is to guess the word correctly by entering one letter at a time.</p>
                    <p>You get to enter 6 failed attempts, if the word is not guessed before your sixth failed attempt then you loose.</p>
                    <p>Guess the word without getting 6 incorrect letters and you win!</p>
                    <p>You can reset the game at any time by clicking the reset button.</p>
                    <p><strong>Good Luck and thanks for playing!</strong></p>
                </div>
            </div>
            {/* End Off Canvas */}
        </div>
        // End Rules
    );
};

export default Rules;