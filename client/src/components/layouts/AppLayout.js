import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components';
import Container from '../common/Container';


const Wrapper = styled.div`

 
`

function AppLayout({children}) {
    return (
        <Wrapper>
            <Container >
            {children}
            </Container>
        </Wrapper>
    )
}

// AppLayout.propTypes = {

// }

export default AppLayout

