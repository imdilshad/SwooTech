import React from 'react'
import { Card } from 'react-bootstrap'
import image from '../images/header/9.jpeg'
import image2 from '../images/header/11.jpeg'
import image3 from '../images/header/10.jpeg'
import image4 from '../images/header/9.jpeg'
import './Homemilestone.css'

const Homemilestone = () => {
  return (<>
    <div className=' row backgroundformilestone my-3 px-3 d-flex justify-content-evenly  d-none'>
     



<Card className='col-md-2  my-3 mixcard '>
    <Card-image>
        <img  className="cardimage"src={image} alt='a'/>

    </Card-image>
    <hr/>
    <Card-title>
    <h1 className='text-center'>HP</h1>
    </Card-title>

</Card>

<Card className='col-md-2  my-3 mixcard'>
    <Card-image>
        <img className="cardimage2" src={image2} alt='a'  />

    </Card-image>
    <hr/>
    <Card-title>
    <h1 className='text-center'>dell </h1>
    </Card-title>

</Card>

<Card className='col-md-2  my-3 mixcard'>
    <Card-image>
        <img className="cardimage2" src={image3} alt='a'/>

    </Card-image>
    <hr/>
    <Card-title>
    <h1 className='text-center'>Asus</h1>
    </Card-title>

</Card>

<Card className='col-md-2  my-3 mixcard'>
    <Card-image>
        <img className="cardimage" src={image4} alt='a'/>

    </Card-image>
    <hr/>
    <Card-title>
        <h1 className='text-center'>Hp</h1>
    </Card-title>

</Card>




    </div>

    </>
  )
}

export default Homemilestone