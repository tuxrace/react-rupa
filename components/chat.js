import React from 'react'
//var socket = require('socket.io-client')(`http://${location.hostname}:6007`)
var socket = require('socket.io-client')(`https://rupamessage.mybluemix.net/`)
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import FontIcon from 'material-ui/FontIcon';
import Message from './message.js'
import Typing from './typing.js'
import Menu from './menu.js'
import Text from './text.js'
import { autoScroll, flex, style } from './style.js'
import Toky from '../toky.js'

injectTapEventPlugin();

const toky = new Toky();
const recognizing = false;

if (recognizing) {
    toky.stop();
}

const localstate = {};
socket.emit('system', { sender: 'system', data: 'initialize' })

export default class Chat extends React.Component {
    constructor(props) {
        console.log(flex)
        super(props)
        this.handleMessage = this.handleMessage.bind(this)
        socket.on('message', this.handleMessage)
        socket.emit('system', { sender: 'system', data: 'initialize' })
        this.state = {
            opensnack: false,
            voice: <FontIcon className="material-icons" style={{ margin: 5, color: 'white' }}>mic</FontIcon>,
            typing: false,
            interim: null
        }
    }
    componentDidUpdate() {
        const div = this.divList
        div.scrollTop = 100
        toky.onresult((result) => {
            this.setState({ typing: true })
            if (result.final) {
                console.log(result.final_transcript)
                this.setState({ cog: result.final_transcript })
                socket.emit('add', result.final_transcript)
                this.setState({ interim: null })
            } else {
                this.setState({ interim: result.interim_transcript })
            }
        })
        toky.onend(() => {
            console.log('end')
            this.setState({ voice: <FontIcon className="material-icons" style={{ margin: 5, color: 'white' }}>mic</FontIcon> })
        })
    }
    handleSend(e) {
        socket.emit('add', this.state.msg)
    }
    handleEnter(e) {
        if (e.key == 'Enter') {
            console.log('hello')
            socket.emit('add', this.state.msg)
            e.target.value = ""
        }
    }
    handleTextChange(e) {
        this.setState({ msg: e.target.value })
    }

    handleMessage(chats) {
        if (chats) {
            localstate.chats = chats
            let last = chats[chats.length - 1]
            if (last.sender == 'user') {
                this.setState({ typing: true })
            } else {
                this.setState({ typing: false })
            }
            this.setState({ chats: chats })

        }
    }
    handleStart() {
        toky.start()
        toky.onstart(() => {
            console.log('Begin speaking')
        })
        this.setState({ voice: 'Begin Speaking' })
    }
    render() {
        const textProps = {
            style: { padding: '10px' },
            hintText: "Type something to talk to Rupa...",
            fullWidth: true,
            onKeyPress: this.handleEnter.bind(this),
            onChange: this.handleTextChange.bind(this)
        }
        return (<Paper zDepth={1} style={flex}>
            <AppBar style={style} title="RUPA" />

            <div style={autoScroll} ref={(div) => this.divList = div}>
                <Message chats={localstate.chats} />
                {this.state.typing ? <Typing /> : null}
                {this.state.interim ? this.state.interim : null}
            </div>

            <Divider inset />
            <Text {...textProps} />
            <div style={{ display: 'flex', flexFlow: 'row' }}>
                <RaisedButton primary style={{ flex: 1 }} label="Submit Message" onClick={this.handleSend.bind(this)} />
                <RaisedButton secondary label={this.state.voice} onClick={this.handleStart.bind(this)} > </RaisedButton>
            </div>
        </Paper>)
    }

}
