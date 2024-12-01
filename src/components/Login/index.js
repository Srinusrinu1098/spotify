import {Component} from 'react'
import {
  BackGroundImage,
  CardContainer,
  MusicImg,
  Label,
  Input,
} from './LoginStyledComponents'

class Login extends Component {
  render() {
    return (
      <BackGroundImage>
        <CardContainer>
          <MusicImg src="https://i.ibb.co/5cyGN0S/Frame-52.png" />
          <Label>USERNAME</Label>
          <Input type="text" placeholder="Enter your name" />
          <Label>PASSWORD</Label>
          <Input type="text" placeholder="Enter your name" />
        </CardContainer>
      </BackGroundImage>
    )
  }
}
export default Login
