import React, {Fragment} from 'react';
import './style.css'
// import $ from "jquery"

const DescriptionWithLink = (props) => {
    if (!props.description) {
        return null;
    }

    if(props.link) {
        return (
            <div>
                <p>{props.description}</p>
                <a className='link' href={props.link}>{props.link}</a>  
            </div>
        )
    } else {
        return(
            <Fragment>
                <p><u>{props.description}</u></p>
            </Fragment>
        )
    }
}

export default DescriptionWithLink;