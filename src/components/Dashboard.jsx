import React, { useContext, useState} from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


import {UserDataContext} from './context/UserContext'

function Dashboard() {
  let navigate = useNavigate()
  let {userData,setData}= useContext(UserDataContext)
  let [heading,setHeading] = useState("")
  let [paragraph,setParagraph] = useState("")

  let  handleChange=(e)=>{
    let newArray = [...userData]
    newArray.push({
      heading,
      paragraph

    })
    console.log(newArray)
   
  }
  let handleDelete=(index)=>{
    let newArray=[...userData]
  newArray.splice(index,1)
      setData(newArray)
  }

  

  
  
  return (
    <>
      <div
        className="notesPage  container-fluid overflow-auto"
        style={{ backgroundColor: " #E3E8F8" }}
      >
        <div className="topForm">
          <Form className=" headForm">
            <label>
              <span>Add a Note</span>
            </label>
            <br />
            <input
              className="form-control  titlePlaceholder"
              type="text"
              placeholder="Title"
              // onChange={(e)=>setHeading(e.target.value)}
            />
            <br />
            <textarea
              className="form-control  notesPlaceholder "
              rows="3"
              placeholder="TAke a note...."
              onChange={(e)=>setParagraph(e.target.value)}
              ></textarea>
          </Form>
        </div>
        <div className="cards ">
          <div className="mainTopic">
            <span className="myNotes">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <mask
                  id="mask0_209_12"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="32"
                  height="32"
                >
                  <rect width="32" height="32" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_209_12)">
                  <path
                    d="M10.6667 24H21.3333V21.3333H10.6667V24ZM10.6667 18.6667H21.3333V16H10.6667V18.6667ZM8.00001 29.3333C7.26668 29.3333 6.6389 29.0722 6.11668 28.55C5.59445 28.0278 5.33334 27.4 5.33334 26.6667V5.33333C5.33334 4.6 5.59445 3.97222 6.11668 3.45C6.6389 2.92778 7.26668 2.66667 8.00001 2.66667H18.6667L26.6667 10.6667V26.6667C26.6667 27.4 26.4056 28.0278 25.8833 28.55C25.3611 29.0722 24.7333 29.3333 24 29.3333H8.00001ZM17.3333 12V5.33333H8.00001V26.6667H24V12H17.3333Z"
                    fill="#203562"
                  />
                </g>
              </svg>
              &nbsp;My Notes
            </span>
            <p
              style={{
                color: "var(--accent, #203562)",
                fontSize: "16px",
                fontWeight: "600",
                padding: "1em 1em",
              }}
            >
              Recently viewed
            </p>
          </div>
          <div className="d-flex flex-row flex-nowrap overflow-auto" style={{paddingBottom:'5em'}}>
            {
            userData.map((e,i) => {
              return <div style={{ minWidth: "400px" }} key={i}>
                    <div
                      className="card "
                      style={{ maxWidth: "18rem", borderRadius: "16px" ,backgroundColor:'#F5F5F5'}}
                    >
                      <div
                        className="card-header  d-flex justify-content-between "
                        style={{
                            backgroundColor:'#F5F5F5',
                          borderBottom: "none !important",
                          color: "#203562",
                          padding: "20px",
                          paddingBottom: "0em",
                        }}
                      >
                        <p
                          style={{
                            color: "var(--accent, #203562)",
                            fontSize: "24px",
                            fontWeight: "600",
                          }}
                        >
                          {e.heading}{" "}
                        </p>
                        <h5>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none" 
                            onClick={()=>navigate(`/edit/${i}`)}
                          >
                            <mask
                              id="mask0_209_47"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_209_47)">
                              <path
                                d="M5 19H6.4L15.025 10.375L13.625 8.975L5 17.6V19ZM19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3042 2.75 17.8625 2.75C18.4208 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.57083 21.275 6.1125C21.2917 6.65417 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z"
                                fill="#203562"
                              />
                            </g>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            onClick={()=>handleDelete(i)}
                          >
                            <mask
                              id="mask0_209_51"
                              style={{ maskType: "alpha" }}
                              maskUnits="userSpaceOnUse"
                              x="0"
                              y="0"
                              width="24"
                              height="24"
                            >
                              <rect width="24" height="24" fill="#D9D9D9" />
                            </mask>
                            <g mask="url(#mask0_209_51)">
                              <path
                                d="M7 21C6.45 21 5.97917 20.8042 5.5875 20.4125C5.19583 20.0208 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8042 20.0208 18.4125 20.4125C18.0208 20.8042 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                                fill="#203562"
                              />
                            </g>
                          </svg>
                        </h5>
                      </div>
                      <div className="card-body">
                        <p
                          className="card-text"
                          style={{
                            color: "#303030",
                            fontSize: "16px",
                            fontWeight: "500",
                          }}
                        >
                          {e.paragraph}
                        </p>
                      </div>
                      <div
                        className="card-footer "
                        style={{ backgroundColor: "#F5F5F5" }}
                      >
                        <p
                          style={{
                            color: " #000",
                            fontSize: "16px",
                            fontWeight: "500",
                            opacity: "0.6",
                          }}
                        >
                          {e.since}
                        </p>
                      </div>
                    </div>
                  </div>
                
              
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
