import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './createCategory.css'

const CreateCategory = ({loggedInUser}) => {

  //const userID = loggedInUser.userID
  //const userName = loggedInUser.userName

  console.log("(Prop) loggedInUser:"+loggedInUser)
  console.log("(Prop) loggedInUser.userID:"+loggedInUser.userID)
  console.log("(Prop) loggedInUser.userName:"+loggedInUser.userName)
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log("this is logged userID"+loggedInUser.userID)
    console.log({
      title:     data.get('categorytitle'),
      $100Answer:   data.get('$100Answer'),
      $100Question: data.get('$100Question'),
      $200Answer:   data.get('$200Answer'),
      $200Question: data.get('$200Question'),
      $300Answer:   data.get('$300Answer'),
      $300Question: data.get('$300Question'),
      $400Answer:   data.get('$400Answer'),
      $400Question: data.get('$400Question'),
      $500Answer:   data.get('$500Answer'),
      $500Question: data.get('$500Question'),
    })
      /* Sending a post request to the server. */
      const response = await fetch('http://localhost:3000/createCategory', {
      method: 'POST',
      headers: {
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: data.get('categorytitle'), 
        userID: loggedInUser.userID, 
        userName: loggedInUser.userName,
        oneHundredAnswer: data.get('$100Answer'),
        oneHundredQuestion: data.get('$100Question'),
        twoHundredAnswer: data.get('$200Answer'),
        twoHundredQuestion: data.get('$200Question'),
        threeHundredAnswer: data.get('$300Answer'),
        threeHundredQuestion: data.get('$300Question'),
        fourHundredAnswer: data.get('$400Answer'),
        fourHundredQuestion: data.get('$400Question'),
        fiveHundredAnswer: data.get('$500Answer'),
        fiveHundredQuestion: data.get('$500Question'),
      })
    })
    const serverData = await response.json();
    console.log(serverData)
    // console.log(serverData.serverMsg);
    // console.log(serverData.serverStatus);
    // console.log(serverData.serverCode);
    if(serverData.serverCode === 'GOOD'){ 
      window.alert(`Create new category Successful .${serverData.serverCode}`)
      console.log("you created a category")
    }
    if(serverData.serverCode === 'BAD'){
      window.alert(`Create new category Failed.${serverData.serverCode}`)
      console.log("Create new category Failed")
    }
  }


  return (
    <>
    <div className='create-category-main-title' >CreateCategory</div>
    <div className='main'>
    <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" >
        <Form.Label>Category Title</Form.Label>
        <Form.Control type="name" placeholder="Enter Category" name='categorytitle' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>$100 Answer</Form.Label>
        <Form.Control type="$100 Answer" placeholder="$100 Answer" name='$100Answer' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>$100 Question</Form.Label>
        <Form.Control type="name" placeholder="$100 Question" name='$100Question' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>$200 Answer</Form.Label>
        <Form.Control type="$200 Answer" placeholder="$200 Answer" name='$200Answer' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>$200 Question</Form.Label>
        <Form.Control type="$200 Question" placeholder="$200 Question"name='$200Question' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>$300 Answer</Form.Label>
        <Form.Control type="$300 Answer" placeholder="$300 Answer" name='$300Answer' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>$300 Question</Form.Label>
        <Form.Control type="$300 Question" placeholder="$300 Question" name='$300Question' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>$400 Answer</Form.Label>
        <Form.Control type="$400 Answer" placeholder="$400 Answer" name='$400Answer' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>$400 Question</Form.Label>
        <Form.Control type="$400 Question" placeholder="$400 Question" name='$400Question' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>$500 Answer</Form.Label>
        <Form.Control type="$500 Answer" placeholder="$500 Answer" name='$500Answer' />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question' >$500 Question</Form.Label>
        <Form.Control  type="$500 Question" placeholder="$500 Question" name='$500Question' />
      </Form.Group>
      <Button  variant="primary" className='add-category-Button' type="submit">
        Add Catagory
      </Button>
    </Form>
    </div>
    </>
  )
}

export default CreateCategory