import React,{useContext} from 'react'
import { useFormik } from 'formik';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LibraryContext } from './ContextProvider';

const validate = values => {
    const errors = {};
     
    if (!values.title) {
        console.log(values)
      errors.title = ' Title Required'; 
    }
    if (!values.author) {
      errors.author = ' Author Name Required';
    } 
    if (!values.isbn) {
      errors.isbn = 'ISBN Number Required';
    } 
    
    if (!values.release) {
        errors.release = ' Date Required';
      } 
  
    return errors;
  };
  
function Book() {
  const {book,Setbook}=useContext(LibraryContext)
    // const data=[
    //     {title:"Atomic Habbit",author:'James clear',isbn:'(877) 310-7333.',release:'01-01-2015'},
    //     {title:"Man's Search for Meaning",author:'Viktor Frankl',isbn:'(877) 310-7333.',release:'01-01-2015'},
    //     {title:"Think Straight",author:'Darius Foroux',isbn:'(877) 310-7333.',release:'01-01-2015'}
    // ]
    // const [book,Setbook]=useState(data);

    const formik = useFormik({
        initialValues: {
          title: '',
          author: '',
          isbn: '',
          release:''
        },
        validate ,
        
        onSubmit:( values) => {
            formik.values.release=values.release.split("-").reverse().join("-");
            Setbook([...book,{...values}]);
            alert(JSON.stringify(values, null, 2));

            formik.values.title='';
            formik.values.author='';
            formik.values.isbn='';
            formik.values.release='';

          
        },
        
      });

    const handleDelete=(index)=>{
        const deleteData=book.filter((e)=>book.indexOf(e)!==index);
        Setbook([...deleteData])
        
        }

    const handleEdit=(index)=>{
    
        const editdata= (book.filter((e)=>book.indexOf(e)==index));
        console.log(editdata)
        window.scrollTo(0,0);
        formik.values.title=editdata[0].title
        formik.values.author=editdata[0].author
        formik.values.isbn=editdata[0].isbn
        // document.getElementById('title').value=editdata[0].title;
        // document.getElementById('author').value=editdata[0].author;
        // document.getElementById('isbn').value=editdata[0].isbn;
        const date=editdata[0].release.split("-").reverse().join("-");
       formik.values.release=date;
        // document.getElementById('release').value=date;
        
        handleDelete(index)
        }


    
  return (
    <div>
        
        <form className="row g-3"  onSubmit={formik.handleSubmit}  >
        
        <div className="col-md-5">
          <label htmlFor="title" className="form-label " name='title'>Title</label>
          <input type="text" className="form-control" id="title" name='title' 
          onChange={formik.handleChange}
          value={formik.values.title}
       
          
          
          
          />
          {formik.errors.title? <div style={{color:'red'}}>{formik.errors.title}</div> : null}

        </div>
        
        <div className="col-md-5">
          <label htmlFor="author" className="form-label" name='author'>Author</label>
          <input type="text" className="form-control" id="author" name='author' 
         onChange={formik.handleChange}
         value={formik.values.author}
         
        
          />
          
          {formik.errors.author ? <div style={{color:'red'}}>{formik.errors.author}</div> : null}
           </div>
        <div className="col-md-5">
          <label htmlFor="isbn" className="form-label" name='isbn'>ISBN Number</label>
          <input type="tel" className="form-control" id="isbn" name='isbn'
          onChange={formik.handleChange}
          value={formik.values.isbn}
          />
          
          {formik.errors.isbn ? <div style={{color:'red'}}>{formik.errors.isbn}</div> : null}
        </div>
        <div className="col-md-5">
          <label htmlFor="release" className="form-label" name='release'>Release</label>
          <input type="date" className="form-control" id="release" name='release'
          onChange={formik.handleChange}
          value={formik.values.release}
       
          
          />
          
          {formik.errors.release ? <div style={{color:'red'}}>{formik.errors.release}</div> : null}
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary" 
          >Add Book</button>
        </div>
      
      </form>
      <div className='card-outer'>

    {book.map((e,index)=>(
        <div className='book-card'  key={index}>
             <Card className='card'>
      
      <Card.Body>
        <h3>
      <i className="bi bi-book-half "></i>Book
      </h3>
        <Card.Title>Title:{e.title}</Card.Title>
        <Card.Text>
         Author:{e.author}<br/>
         ISBN:{e.isbn}<br/>
         Release:{e.release}
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

export default Book