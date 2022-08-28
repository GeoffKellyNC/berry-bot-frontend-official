import React from 'react'
import styled from 'styled-components'

const PointsMod5 = ({ pointData }) => {


    const top5 = pointData.sort((a, b) => b.points - a.points).slice(0, 5)

  return (
    <TopFive>
        <p className = 'top-five-title'>Top 5 Bad Eggs</p>
        {
           pointData.length > 0 ? 
                top5.map((user, index) => {
                    return (
                        <PointObj key={index}>
                            <span className = 'user-text user-text-name'><span className='number'>{index + 1}.</span>{user.user_name}</span>
                            <span className = 'user-text user-text-points'>{user.points}</span>
                        </PointObj>
                    )}) :
                <span className='text'>No Points</span>
        }
    </TopFive>
  )
}

export default PointsMod5

const TopFive = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;

    .top-five-title{ 
        font-size: ${pr => pr.theme.fontSizes.xlarge};
        font-weight: bold;
        color: ${pr => pr.theme.colors.berry};
        margin-bottom: 0.5rem;
        text-align: center;
    }
`

const PointObj = styled.div`
    display: flex;
    flex-direction: row;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;


    .number{
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        color: ${pr => pr.theme.colors.berry};
        margin-bottom: 0.5rem;
        position: relative;
        padding-right: 1rem;
    }

    .user-text{
        font-size: ${pr => pr.theme.fontSizes.medium};
        font-weight: bold;
        margin-bottom: 0.5rem;
    }


    @media(max-width: 520px){
        max-width: 100%;
    }


`