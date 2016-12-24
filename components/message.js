import React,{Component} from 'react'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Bubble from './bubble.js';
import Dview from './dview.js';
import {
    grey900
} from 'material-ui/styles/colors';

var Message = function({ chats }) {

    var some = chats.map((x, index) => {  
                const bot = (x.sender == 'bot')?true:false
                const html = (x.type == 'html')?true:false
                const listProps = {
                    key: Math.random().toString(),
                    leftAvatar: bot ? <Avatar src="images/rupa.png" />:<div/>,
                    rightAvatar: !bot ? <Avatar backgroundColor={grey900} size={33}> CN </Avatar>:<div/>,
                    view: html ? <Dview right={false} text={x.data} /> : <Bubble right={!bot} text={x.data} />
                }          
                return <ListItem {...listProps}> {listProps.view} </ListItem>                                    
        });
    return (chats.length>0) ? some : <div/>
            
    
    /*return chats.map((x, index) => {  
                const bot = (x.sender == 'bot')?true:false
                const html = (x.type == 'html')?true:false
                const listProps = {
                    key: Math.random().toString(),
                    leftAvatar: bot ? <Avatar src="images/rupa.png" />:<div/>,
                    rightAvatar: !bot ? <Avatar backgroundColor={grey900} size={33}> CN </Avatar>:<div/>,
                    view: html ? <Dview right={false} text={x.data} /> : <Bubble right={!bot} text={x.data} />
                }          
                return <ListItem {...listProps}> {listProps.view} </ListItem>                                    
        });*/
}

export default Message;

/*export default class Message extends Component {
    constructor(props) {
        super()
        this.state = { data: "" }
    }    
    componentWillReceiveProps({ chats }){
        console.log(chats)
        const list = chats.map((x, index) => {  
                const bot = (x.sender == 'bot')?true:false
                const html = (x.type == 'html')?true:false
                const listProps = {
                    key: Math.random().toString(),
                    leftAvatar: bot ? <Avatar src="images/rupa.png" />:<div/>,
                    rightAvatar: !bot ? <Avatar backgroundColor={grey900} size={33}> CN </Avatar>:<div/>,
                    view: html ? <Dview right={false} text={x.data} /> : <Bubble right={!bot} text={x.data} />
                }          
                return <ListItem {...listProps}> {listProps.view} </ListItem>                                    
        });
        this.setState({data:list})
    }
    render() {        
        return <div>{this.state.data}</div>                
    }
}*/

