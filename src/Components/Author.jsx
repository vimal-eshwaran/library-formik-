import React, { useContext } from 'react'
import { LibraryContext } from '../ContextProvider'
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css";


//validation function
const validate = values => {
    const errors = {};     
    if (!values.name) {
        
      errors.name = ' Name Required'; 
    }
    if (!values.dob) {
      errors.dob = 'Date of birth Required';
    } 
    if (!values.biography) {
      errors.biography = 'Biography Required';
    }else if(values.biography.length<100){
        errors.biography="Minimum 100 characters Required"
    }
    
    
  
    return errors;
  };



function Author() {
    const {author,Setauthor}=useContext(LibraryContext);

    const formik = useFormik({
        initialValues: {
          name: '',
          dob: '',
          biography: '',
          
        },
        validate ,
        
        onSubmit:( values) => {
            console.log(values)
            
            formik.values.dob=values.dob.split("-").reverse().join("-");
            Setauthor([...author,{...values}]);
            alert(JSON.stringify(values, null, 2));

            formik.values.name='';
            formik.values.dob='';
            formik.values.biography='';
           

          
        },
        
      });

    const handleDelete=(index)=>{
        const deleteData=author.filter((e)=>author.indexOf(e)!==index);
        Setauthor([...deleteData]);
        
        }

    const handleEdit=(index)=>{
    
        const editdata= (author.filter((e)=>author.indexOf(e)==index));
        console.log(editdata)
        window.scrollTo(0,0);
        formik.values.name=editdata[0].name;
       
        const date=editdata[0].dob.split("-");
        const formated=`${date[2]}-${date[1]}-${date[0]}`
        formik.values.dob=formated;
        formik.values.biography=editdata[0].biography
        
        handleDelete(index)
        }


  return (
    <div>
        <form className="row g-3"  onSubmit={formik.handleSubmit}  >
        
        <div className="col-md-5">
          <label htmlFor="name" className="form-label " name='name'>Name</label>
          <input type="text" className="form-control" id="name" name='name' 
          onChange={formik.handleChange}
          value={formik.values.name}
          />
          {formik.errors.name? <div style={{color:'red'}}>{formik.errors.name}</div> : null}

        </div>
        
        <div className="col-md-5">
          <label htmlFor="dob" className="form-label" name='dob'>DOB</label>
          <input type="date" className="form-control" id="dob" name='dob' 
         onChange={formik.handleChange}
         value={formik.values.dob}
         
        
          />
          
          {formik.errors.dob? <div style={{color:'red'}}>{formik.errors.dob}</div> : null}
           </div>
        <div className="col-md-10">
          <label htmlFor="biography" className="form-label" name='biography'>Biography</label>
          <textarea  className="form-control" id="biography" name='biography'
          onChange={formik.handleChange}
          rows={4}
          cols={100}
          value={formik.values.biography}
          minLength={100}
          maxLength={320}
          />
          
          {formik.errors.biography ? <div style={{color:'red'}}>{formik.errors.biography}</div> : null}
        </div>
       
        <div className="col-12">
          <button type="submit" className="btn btn-primary" 
          >Add Author</button>
        </div>
      
      </form>
      <div className='card-outer'>

    {author.map((e,index)=>(
        <div className='author-card'  key={index}>
             <Card className='detail-card'>
      
      <Card.Body>
        <h3 className='d-flex justify-content-center'>
        <i class="bi bi-person-circle"></i>Author
      </h3>
        <Card.Title>Name:{e.name}</Card.Title>
        <Card.Text>
        DOB:{e.dob}<br/>
        Author:{e.biography}<br/>
        
        </Card.Text>
        <div className='author-button-grp'>
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

export default Author