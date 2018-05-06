import * as React from 'react'
import * as Colors from 'material-ui/styles/colors'

export const Text = ({ value, type, style, ...rest }) => {

    if (!value)
        return null

    let color = "black"
    switch (type) {
        case "error": color = Colors.red500; break
        case "warn": color = Colors.yellow500; break
        case "info": color = Colors.blue500; break
        case "success": color = Colors.green500; break
    }
    let mergeStyle = Object.assign({}, style, { color: color })

    return <div style={mergeStyle}>{value}</div>
}