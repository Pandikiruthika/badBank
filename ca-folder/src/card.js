import Card from 'react-bootstrap/Card';
import image2 from "./image/women.png";
import image3 from "./image/rainbow.jpg";
import image4 from "./image/saving.jpg"
export default function Carder(){
    return(
        <>
        <Card style={{ width: '20rem' }} id="card1">
      <Card.Img variant="top" src={image2} />
      <Card.Body>
        <Card.Title>BadBank Shakthi For Women</Card.Title>
        <Card.Text>
        The special respect that women enjoy in India is recognized with a special product designed exclusively for them. BadBank Shakthi is a unique SB product that provides the triple benefits of an SB account.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} id="card2">
      <Card.Img variant="top" src={image4} />
      <Card.Body>
        <Card.Title>Prestige Saving for HNIs</Card.Title>
        <Card.Text>
        Discover an exclusive account that befits your status. An account that caters to the exclusive needs of high net worth individuals, Badbank Prestige offers a host of thoughtful services that you can experience across the Badbank network.
        </Card.Text>
      </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} id="card3">
      <Card.Img variant="top" src={image3} />
      <Card.Body>
        <Card.Title>Badbank Rainbow Saving</Card.Title>
        <Card.Text>
        Badbank's Rainbow Savings Bank Scheme (RBSB Account) is a perfect blend of all the good features of a Savings Bank Account and a Fixed Deposit Account that offers "High liquidity with maximum returns”.
        </Card.Text>
      </Card.Body>
      </Card>
        </>
    )
}