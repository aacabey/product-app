import * as React from 'react'
import Paper from 'material-ui/Paper'
import ErrorIcon from 'material-ui/svg-icons/alert/error'
import { orangeA200 } from 'material-ui/styles/colors'

export const NotFound = () => (
    <Paper id="title" zDepth={2} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: 50, height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
            <ErrorIcon style={{ width: 75, height: 75, paddingRight: 10 }} color={orangeA200} />
            <span style={{ fontSize: 75 }}>404</span>
        </div>
        <div style={{ fontWeight: "lighter", fontSize: 25 }}>
            <p>Her yere baktık, aradığınız sayfayı bulamadık!</p>
        </div>
    </Paper>
)