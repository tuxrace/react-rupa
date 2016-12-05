import React from 'react'
import ReactDOM from 'react-dom'
import Chat from './components/chat.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends React.Component {
    render() {
        return <MuiThemeProvider>
            <div><Chat /></div>
        </MuiThemeProvider>
    }
}

ReactDOM.render(<App />, document.getElementById('app'))