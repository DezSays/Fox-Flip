import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './createCategory.css'
const CreateCategory = () => {
  return (
    <>
    <div className='create-category-main-title' >CreateCategory</div>
    <div className='main'>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Catagory Title</Form.Label>
        <Form.Control type="Catagory" placeholder="Enter Catagory" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>100$ Answer</Form.Label>
        <Form.Control type="100$ Answer" placeholder="100$ Answer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>100$ Question</Form.Label>
        <Form.Control type="100$ Question" placeholder="100$ Question" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>200$ Answer</Form.Label>
        <Form.Control type="200$ Answer" placeholder="200$ Answer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>200$ Question</Form.Label>
        <Form.Control type="200$ Question" placeholder="200$ Question" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>300$ Answer</Form.Label>
        <Form.Control type="300$ Answer" placeholder="300$ Answer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>300$ Question</Form.Label>
        <Form.Control type="300$ Question" placeholder="300$ Question" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>400$ Answer</Form.Label>
        <Form.Control type="400$ Answer" placeholder="400$ Answer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question'>400$ Question</Form.Label>
        <Form.Control type="400$ Question" placeholder="400$ Question" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='answer'>500$ Answer</Form.Label>
        <Form.Control type="500$ Answer" placeholder="500$ Answer" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className='question' >500$ Question</Form.Label>
        <Form.Control  type="500$ Question" placeholder="500$ Question" />
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