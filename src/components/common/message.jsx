import * as React from 'react'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import Snackbar from 'material-ui/Snackbar'

import FontIcon from 'material-ui/FontIcon'

export const Message = ({ message, type }) => {
    if (!message)
        return null

    let color = "black"
    switch (type) {
        case "error": color = "red"
        case "warn": color = "yellow"
        case "info": color = "blue"
        case "success": color = "green"
    }

    var content =
        <div className="messageBox" >
            <FontIcon color={color} className="material-icons" style={{ marginRight: 10, fontSize: 30 }}>info_outline</FontIcon>
            <span className="message">{message}</span>
        </div>

    return (<Snackbar
        open={true}
        message={content}
        autoHideDuration={200000}
    />)
}
