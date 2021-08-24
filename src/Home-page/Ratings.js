import React from 'react'
import Ratings from 'react-ratings-declarative';

function Rating(props) {
    return (
        <Ratings rating={props.no_of_rating} >
        <Ratings.Widget widgetRatedColor="#a3247b" widgetSpacing="2px" widgetDimension="15px" widgetHoverColor="black"/>
        <Ratings.Widget widgetRatedColor="#a3247b" widgetSpacing="2px" widgetDimension="15px" widgetHoverColor="black"/>
        <Ratings.Widget widgetRatedColor="#a3247b" widgetSpacing="2px" widgetDimension="15px" widgetHoverColor="black"/>
        <Ratings.Widget widgetRatedColor="#a3247b" widgetSpacing="2px" widgetDimension="15px" widgetHoverColor="black"/>
        <Ratings.Widget widgetRatedColor="#a3247b" widgetSpacing="2px" widgetDimension="15px" widgetHoverColor="black"/>
        {/* https://github.com/ekeric13/react-ratings-declarative */}
    </Ratings>
    )
}

export default Rating
