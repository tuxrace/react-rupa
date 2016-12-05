import React from 'react'

const styleRight = {
    position: 'relative',
    width: 'auto',
    padding: '0px',
    background: '#eee',
    borderRadius: '5px',
    padding: '12px',
    color: '#000'
}

const triRight = {
    content: '',
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: '10px 0px 10px 10px',
    borderColor: 'transparent #eee',
    display: 'block',
    width: '0',
    zIndex: '0',
    right: '50px',
    top: '20px'
}


const style = {
    position: 'relative',
    width: 'auto',
    padding: '0px',
    background: '#E53935',
    borderRadius: '5px',
    padding: '12px',
    color: '#fff'
}

const tri = {
    content: '',
    position: 'absolute',
    borderStyle: 'solid',
    borderWidth: '10px 10px 10px 0',
    borderColor: 'transparent #E53935',
    display: 'block',
    width: '0',
    zIndex: '0',
    left: '65px',
    top: '20px'
}

const Bubble = props => (
    <div>
        <div style={props.right === true ? tri : triRight} />
        <div style={props.right === true ? styleRight : style}>{props.text}</div>
        <div style={props.right === true ? triRight : tri} />
    </div>
)

export default Bubble