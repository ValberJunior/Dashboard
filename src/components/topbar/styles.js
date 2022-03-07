import styled from 'styled-components';




export const TopbarContainer = styled.header`
width: 100%;
height: 50px;
background-color: #fff;

position: sticky;
top: 0;
z-index: 999;
`;

export const Wrapper = styled.div`
height: 100%;
padding: 0px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

export const TopLeft = styled.div``;

export const Logo = styled.img`
width: 250px;
`;

export const TopRight = styled.div`
display: flex;
align-items: center;

`;


export const Notification = styled.div`
color: #031634;
cursor: pointer;
margin-right: 10px;

font-size: 30px;

position: relative;

`

export const TopIconBadge = styled.span`

width: 15px;
height: 15px;

position: absolute;
top: -5px;
right: -5px;

background-color: red;

color: white;

border-radius: 50%;
padding: 2px;

display: flex;
align-items: center;
justify-content: center;

font-size: 10px;
`;

export const Avatar = styled.img`

width: 40px;
height: 40px;

border-radius: 50%;

cursor: pointer;
`;