import React from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'


const CommandList = ({ commands, handleClose }) => {
  return (
    <List>
        <AiOutlineClose className = 'close-button' onClick = { handleClose } />
        {
            commands.map((command, idx) => {
                return(
                    <div className='commands-group' key = {idx}>
                        <div className='command-name'>{command.command_name}</div>
                        <div className='command-chat'>{command.chat_command}</div>
                        <div className='command-action'>{command.command_action}</div>
                        <div className='command-description'>{command.command_desc}</div>
                    </div>

                )
            })
        }
    </List>
  )
}

export default CommandList


const List = styled.div`
  color: white; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  padding: 5%;
  border: 1px solid ${pr => pr.theme.colors.berry};
  text-align: center;
  font-size: 1.5rem;
  z-index: 10;
  height: auto;
  font-family: ${pr => pr.theme.fonts.primary};
  border-radius: 5px;
  box-sizing: border-box;
  background: rgba(19, 19, 19, 1);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);

  .close-button {
    color: white;
    font-size: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;

    &:hover {
      color: rgb(0,185,255);
    }
  }

  .commands-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem 0.5rem 0;
    margin: 0;
    font-size: ${pr => pr.theme.fontSizes.medium};
  }

    .command-name {
        width: 10%;
    }
    .command-chat {
        width: 10%;
    }
    .command-action {
        width: 40%;
    }
    .command-description {
        width: 40%;
    }



`

