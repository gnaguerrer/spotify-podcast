import styled from 'styled-components'


const sizes = {
    small: '25px',
    medium: '35px'
}

/**
 *  current: ruta actual
 *  path: path/key del item
 */

export const MenuItem = styled.div`
    height: ${props => sizes?.[props.size] ?? sizes.medium};
    display: flex;
    align-items: center;
    &:hover {
        opacity:1
    }
    opacity: ${props => props.current === props.path ? 1 : 0.5} 
`;

