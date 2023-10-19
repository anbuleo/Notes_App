import React,{useContext, useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Button, Form } from 'react-bootstrap'
import {UserDataContext} from './context/UserContext'

function Edit() {
    let navigate = useNavigate()
    const params = useParams()
    let {userData,setData}= useContext(UserDataContext)
    const [initialValues,setInitialValues] = useState({
      heading:"",
      paragraph:"",
      
      })
      const userScehma = Yup.object().shape({
        heading:Yup.string().required('* Required').min(3,'* Too short'),
        paragraph:Yup.string().required("* REquired").min(20,'* Too short')
      })
      const getData = (index)=>{
        let newValues = {...initialValues}
        newValues.heading = userData[index].heading
        newValues.paragraph = userData[index].paragraph
       
      
        setInitialValues(newValues)
      }
    useEffect(()=>{
        getData(Number(params.id))
        console.log(params.id)
    },[])
   

    

  return <>
  <div
        className="notesPage  container-fluid overflow-auto"
        style={{ backgroundColor: " #E3E8F8" }}
      >
        <div className="topForm">
        <Formik
        initialValues={initialValues}
        validationSchema={userScehma}
        enableReinitialize={true}
        onSubmit={(values)=>{
            let newArray = [...userData]//immutable deep copy
            newArray.splice(params.id,1,values)
            setData(newArray)//state update
            navigate('/dashboard')
          }}
        >
            {({ values,errors,touched,handleBlur,handleSubmit,handleChange})=>(<Form onSubmit={handleSubmit} className=" headForm">
        <Form.Group>
            <Form.Label>
              Add a Note
            </Form.Label>
            {/* <br /> */}
            <Form.Control
              className="form-control  titlePlaceholder"
              type="text"
              placeholder="Title"
              name='heading'
              value = {values.heading}
              onBlur={handleBlur} onChange={handleChange}
            //   onChange={(e)=>console.log(userData,e)}
            />
            {errors.heading && touched.heading ? <div style={{color:"red"}}>{errors.heading}</div>:null}
            </Form.Group>
            <br />
            <Form.Group>
            <textarea
              className="form-control  notesPlaceholder "
              rows="3"
              placeholder="TAke a note...."
              name='paragraph'
              value = {values.paragraph}
              onBlur={handleBlur} onChange={handleChange}
            //   onChange={(e)=>setParagraph(e.target.value)}
              ></textarea>
              {errors.paragraph && touched.paragraph ? <div style={{color:"red"}}>{errors.paragraph}</div>:null}
              </Form.Group>
              <Button type='submit'>submit</Button>
          </Form>
          )}
          
        </Formik>
          </div>
          </div>
  </>
}

export default Edit