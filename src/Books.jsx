import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Books() {
    const data=[
        {title:"Atomic Habbit",author:'James clear',isbn:'(877) 310-7333.',release:'01-01-2015'},
        {title:"Man's Search for Meaning",author:'Viktor Frankl',isbn:'(877) 310-7333.',release:'01-01-2015'},
        {title:"Think Straight",author:'Darius Foroux',isbn:'(877) 310-7333.',release:'01-01-2015'}
    ]
    const [book,Setbook]=useState(data);
    const handleDelete=(index)=>{
        const deleteData=book.filter((e)=>book.indexOf(e)!==index);
        console.log(deleteData)
        Setbook([...deleteData])
        
        }


const handleEdit=(index)=>{
    
const editdata= (book.filter((e)=>book.indexOf(e)==index));
console.log(editdata)
window.scrollTo(0,0);
// const remove=book.filter((e)=>book.indexOf(e)!==index)
if(editdata){
// console.log(  document.querySelectorAll('div'));

const title=document.getElementById('title').value=editdata[0].title;
document.getElementById('author').value=editdata[0].author;
document.getElementById('isbn').value=editdata[0].isbn;
document.getElementById('release').value=editdata[0].release.split("-").reverse().join("-");


}

}

  return (

    <div>
        <div> 
     <Formik
       initialValues={{ title:'',author: '',isbn: '',release: ''}}
       validate={values => {
       const errors = {};
         
         if (!values.title) {
           errors.title = 'Title Required';
          
         } else if(!values.author) {
            errors.author='Author Name Required';
         }else  if(!values.isbn) {
            errors.isbn='ISBN number Required'
         }
          else if(!values.release) {
            errors.release='Release date required'
         }
        
         return errors;

       }}
       
       onSubmit={(values, { setSubmitting }) => {
        Setbook([...book,{...values}]);
        document.querySelector('form').reset();
       
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
       
              
     >
       {({ isSubmitting,
       validateOnBlur,
       validateOnChange
        }) => (
        <Form className="row g-3" >
        
        <div className="col-md-6">
          <label htmlFor="title" className="form-label " name='title'>Title</label>
          <Field type="text" className="form-control" id="title" name='title' />
          <ErrorMessage name="title" component="div" style={{color:'red'}} />
        </div>
        
        <div className="col-md-6">
          <label htmlFor="author" className="form-label" name='author'>Author</label>
          <Field type="text" className="form-control" id="author" name='author'  />
          
          <ErrorMessage name="author" component="div" style={{color:'red'}} />
        </div>
        <div className="col-md-6">
          <label htmlFor="isbn" className="form-label" name='isbn'>ISBN Number</label>
          <Field type="tel" className="form-control" id="isbn" name='isbn'/>
          
          <ErrorMessage name="isbn" component="div" style={{color:'red'}} />
        </div>
        <div className="col-md-6">
          <label htmlFor="release" className="form-label" name='release'>Release</label>
          <Field type="date" className="form-control" id="release" name='release'/>
          
          <ErrorMessage name="release" component="div" style={{color:'red'}} />
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary" 
          disabled={isSubmitting}>Add Book</button>
        </div>
      
      </Form>
       )}
     </Formik>
   </div>
   
   <div className='card-outer'>

    {book.map((e,index)=>(
        <div className='book-card'  key={index}>
             <Card className='card'>
      
      <Card.Body>
        <h3>
      <i class="bi bi-book-half "></i>Book
      </h3>
        <Card.Title>Title:{e.title}</Card.Title>
        <Card.Text>
         <p>Author:{e.author}</p>
         <p>ISBN:{e.isbn}</p>
         <p>Release:{e.release}</p>
        </Card.Text>
        <div className='button-grp'>
        <Button variant="info" onClick={()=>{handleEdit(index)}}>Edit</Button>
        <Button variant="danger" onClick={()=>{handleDelete(index)}}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
        </div>
    ))}

   </div>

    </div>
  )
}

export default Books