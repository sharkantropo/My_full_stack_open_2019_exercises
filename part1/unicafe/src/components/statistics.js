import React from 'react';


const Statistics = (props) => {
    return (
        <tr>
            <td>
                {props.text}
            </td>
            <td>
                {props.num}
            </td>
        </tr>
    );
}

export default Statistics;