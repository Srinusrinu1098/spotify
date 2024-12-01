import styled from 'styled-components'

export const BackGroundImage = styled.div`
  background-image: url('https://i.ibb.co/gzKT1hW/Group-138-1.png');
  height: 100vh;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    background-image: url('https://i.ibb.co/2dzJW0w/Group-138-2.png');
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }

  * {
    position: relative;
    z-index: 2;
  }
`
export const CardContainer = styled.div`
  background-color: #000000;
  height: 300px;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
export const MusicImg = styled.img`
  width: 100px;
  padding-bottom: 24px;
`
export const Label = styled.label`
  color: #ffffff;
  align-self: flex-start;
  padding-left: 26px;
  font-size: 0.2rem;
  font-weight: bold;
  padding-bottom: 4px;
  padding-top: 4px;
`
export const Input = styled.input`
  min-width: 250px;
  height: 35px;
  border-radius: 4px;
  padding-left: 26px;
  outline: 0px;
  color: #1db954;
`
