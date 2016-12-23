import React,{Component} from 'react'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Bubble from './bubble.js';
import Dview from './dview.js';
import {
    grey900
} from 'material-ui/styles/colors';

export default class Message extends Component {
    constructor(props) {
        super(props)
        this.state = { data: "" }
    }

    componentWillReceiveProps(nextProps) {
        let chats = nextProps.chats
        let list = [];
        chats.forEach((x, index) => {
            if (x.sender == 'bot') {                
                //console.log(typeof (x.data))
                if (x.type == 'html') {
                    list.push(<ListItem key={Math.random()} leftAvatar={
                        <Avatar src="images/rupa.png" />
                    }> <Dview right={false} text={x.data} /> </ListItem>)
                } else {
                    list.push(<ListItem key={Math.random()} leftAvatar={
                        <Avatar src="images/rupa.png" />
                    }> <Bubble right={false} text={x.data} /> </ListItem>)
                }

            } else {
                list.push(<ListItem key={index} rightAvatar={
                    <Avatar backgroundColor={grey900} size={33}> CN </Avatar>
                }> <Bubble right={true} text={x.data} /> </ListItem>)
            }
        })
        
        this.setState({ data: list })
    }
    render() {
        return <div>{this.state.data}</div>        
    }
}

