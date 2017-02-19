import React, { Component } from 'react'
// var socket = require('socket.io-client')(`http://${location.hostname}:6010`)
var socket = require('socket.io-client')(`https://rupamessage1.mybluemix.net/`)
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import Snackbar from 'material-ui/Snackbar'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'
import ActionFace from 'material-ui/svg-icons/action/face'
import ActionCheckCircle from 'material-ui/svg-icons/action/check-circle'
import Message from './message.js'
import Typing from './typing.js'
import Menu from './menu.js'
import Text from './text.js'
import { autoScroll, flex, style } from './style.js'
import Toky from '../services/toky.js'

const toky = new Toky()
const recognizing = false;

if (recognizing) {
  toky.stop()
}

const localstate = {};
socket.emit('system', { sender: 'system', data: 'initialize' })

export default class Chat extends Component {
  constructor (props) {
    super()
    // this.handleMessage = this.handleMessage.bind(this)
    this.state = {
      opensnack: false,
      voice: <FontIcon className="material-icons" style={{ margin: 5, color: 'white' }}>mic</FontIcon>,
      typing: false,
      interim: null,
      chats: [],
      loaded: false
    }
  }
  componentDidMount () {
    injectTapEventPlugin()
    socket.on('message', this.handleMessage.bind(this))
    socket.emit('system', { sender: 'system', data: 'initialize' })
  }
  componentDidUpdate () {
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
  handleSend (e) {
    socket.emit('add', this.state.msg)
  }
  handleEnter (e) {
    if (e.key === 'Enter') {
      console.log(this.state.msg)
      socket.emit('add', this.state.msg)
      e.target.value = ''
    }
  }
  handleTextChange (e) {
    this.setState({ msg: e.target.value })
  }
  handleMessage (chats) {
    const last = chats[chats.length - 1]
    const user = last.sender === 'user' ? true : false
    if (chats) {
      localstate.chats = chats
      this.setState({ typing: user, chats: chats })
    }
    this.setState({ loaded: true })
  }
  handleStart () {
    toky.start()
    toky.onstart(() => {
      console.log('Begin speaking')
    })
    this.setState({ voice: 'Begin Speaking' })
  }
  render () {

    const textProps = {
      style: { padding: 8 },
      hintText: "Type something to talk to Rupa...",
      fullWidth: true,
      onKeyPress: this.handleEnter.bind(this),
      onChange: this.handleTextChange.bind(this),
    }
    return (<Paper zDepth={1} style={flex}>
      <AppBar style={style} title="RUPA" iconElementLeft={<IconButton><ActionFace /></IconButton>} />

      <div style={autoScroll} ref={(div) => this.divList = div}>
        {this.state.chats.length}
        <Message chats={this.state.chats} />
        {this.state.typing ? <Typing /> : null}
        {this.state.interim ? this.state.interim : null}
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100vw' }}>
        <Text {...textProps} />
        <RaisedButton style={{ height: 60, margin: 3 }} secondary label="Submit Message" onClick={this.handleSend.bind(this)} icon={<ActionCheckCircle />} />
        <RaisedButton style={{ height: 60, margin: 3, width: 180 }} secondary label="Voice" icon={this.state.voice} onClick={this.handleStart.bind(this)} />
      </div>
    </Paper>)
  }
}