import React, { Component } from 'react'
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Bubble from './bubble.js';
import Dview from './dview.js';
import {
  grey900
} from 'material-ui/styles/colors';

var Message = function ({ chats }) {

  const list = chats.map((x, index) => {
    const bot = (x.sender == 'bot') ? true : false
    const html = (x.type == 'html') ? true : false
    const view = html ? <Dview right={false} text={x.data} /> : <Bubble right={!bot} text={x.data} />
    const listProps = {
      key: Math.random().toString(),
      leftAvatar: bot ? <Avatar src="images/rupa.png" /> : <div />,
      rightAvatar: !bot ? <Avatar backgroundColor={grey900} size={33}> CN </Avatar> : <div />,
    }
    return <ListItem {...listProps}> {view} </ListItem>
  })

  return chats.length > 0 ? <div>{list}</div> : null
}

export default Message
