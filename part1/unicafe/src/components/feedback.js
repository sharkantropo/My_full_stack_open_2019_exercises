import React from 'react';


const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
)


const Feedback= (props) => 
{
    return (
        <div>
            <h3>Give feedback</h3>
            <Button handleClick={()=> props.setFeedback('+')} text={'Good'}/>
            <Button handleClick={()=> props.setFeedback('0')} text={'Neutral'}/>
            <Button handleClick={()=> props.setFeedback('-')} text={'Bad'}/>
        </div>
    );
}

export default Feedback;