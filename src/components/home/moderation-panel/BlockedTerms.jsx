import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as botActions from '../../../store/botState/botState.actions'

import { IoIosArrowDown } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { GrAdd } from "react-icons/gr";

import TermsList from './TermsList'
import AddBlockTerm from './AddBlockTerm.form'


const BlockedTerms = (props) => {
    const [token] = useState(localStorage.getItem('jwtToken'))
    const [displayTerms, setDisplayTerms] = useState(false)
    const [displayForm, setDisplayForm] = useState(false)

    const { userData, blockedTerms, getBlockedTerms } = props


    useEffect(() => {
        const userId = userData.unx_id
        const target = userData.twitch_user
        const twitchId = userData.twitch_id
        getBlockedTerms(token, userId, target, twitchId)

    },[getBlockedTerms, token, userData.twitch_id, userData.twitch_user, userData.unx_id])


    return (
        <BlockedTermsStyled >
            <div className='blocked-terms-text' >
                <span className='blocked-terms-title'> BlockedTerms</span>
                <div className = 'buttons-container'>
                    {
                        displayTerms ? <MdClose onClick={() => setDisplayTerms(!displayTerms)} /> : <IoIosArrowDown onClick={() => setDisplayTerms(!displayTerms)} />
                    }
                    <GrAdd onClick={() => setDisplayForm(!displayForm)} />
                </div>
            </div>
            {
                displayTerms && <TermsList blockedTerms = { blockedTerms } />
            }
            {
                displayForm && <AddBlockTerm />
            }
        </BlockedTermsStyled>
    )
}


const mapStateToProps = state => {
    return({
        userData: state.userData,
        blockedTerms: state.blockedTerms
    })
}

export default connect(mapStateToProps, botActions) (BlockedTerms)


const BlockedTermsStyled = styled.div`
    
    .blocked-terms-text {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        border-bottom: 1px solid #e6e6e6;
        cursor: pointer;
    }

    .blocked-terms-title {
        font-size: ${(pr) => pr.theme.fontSizes.medium};
        font-weight: bold;
        color: ${(pr) => pr.theme.fontColors.primary};



`