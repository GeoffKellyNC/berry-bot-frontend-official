import React from 'react'
import styled from 'styled-components'

const PointsMod = ({ pointData }) => {

  return (
    <PointsStyled>
        {
           pointData.length > 0 ? 
                pointData.map((user, index) => {
                    return (
                        <PointObj key={index}>
                            <span className='text user-perm'>User: </span> <span className = 'user-text user-text-name'>{user.user_name}</span>
                            <span className='text points-perm'>Points: </span> <span className = 'user-text user-text-points'>{user.points}</span>
                        </PointObj>
                    )}) :
                <span className='text'>No Points</span>
        }
    </PointsStyled>
  )
}

export default PointsMod

const PointsStyled = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const PointObj = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`