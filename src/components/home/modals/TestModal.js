import React from 'react'
import styled from 'styled-components'

const TestModal = ({ setSelected }) => {
  return (
    <TestModalStyled className = 'test-modal'>
        <h1>Test</h1>
        <p>This is a test</p>
        <button onClick = {() => setSelected(null)}>Close</button>
    </TestModalStyled>
  )
}

export default TestModal

const TestModalStyled = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgb(0,185,255);
    background: linear-gradient(180deg, rgba(0,185,255,1) 0%, rgba(24,24,24,1) 3%, rgba(46,46,46,1) 97%, rgba(0,185,255,1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    border-radius: 5px;
    border: 1px solid black;
    text-align: center;
    font-size: 1.5rem;

    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1.5rem;
    }



`