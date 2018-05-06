import * as React from 'react'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CircularProgress, Snackbar, Paper } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import * as Colors from 'material-ui/styles/colors'


import { HideMessage } from '../actions'

const styles = {
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 10000,
        textAlign: "center"
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        zIndex: 9999,
        opacity: 0.2
    }
}

const muiTheme = getMuiTheme({
    tabs: {
        backgroundColor: 'rgba(144, 144, 144, 0.06)',
        selectedTextColor: Colors.lightBlue600,
        textColor: Colors.grey700
    },
    inkBar: {
        backgroundColor: Colors.lightBlue600
    },
    palette: {
        primary1Color: Colors.lightBlue600
    },
});

function mapStateToProps(state) {
    return {
        showLoading: state.layout.asyncCount > 0,
        message: state.layout.message
    };
}

class LayoutComponent extends React.Component {

    constructor() {
        super()
        this.documentElement = document.documentElement
        this.body = document.getElementsByTagName('body')[0]
    }

    handleSnackBarClose() {
        this.props.dispatch(new HideMessage());
    }

    render() {
        let { showLoading, children } = this.props

        return (
            <MuiThemeProvider muiTheme={muiTheme} >
                <div>
                    <div style={{ display: showLoading ? 'block' : 'none' }}>
                        <div style={styles.container}>
                            <CircularProgress mode="indeterminate" size={80} />
                        </div>
                        <div style={styles.overlay} />
                    </div >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {children}
                    </div>
                    <Snackbar
                        className="snackbar-message"
                        open={!!this.props.message}
                        message={this.props.message || ""}
                        autoHideDuration={4000}
                        onRequestClose={(reason) => this.handleSnackBarClose()}
                    />
                </div>
            </ MuiThemeProvider>
        )
    }
}

export const Layout = connect(mapStateToProps)(LayoutComponent)