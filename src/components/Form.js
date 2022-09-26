import React, { useState } from 'react'
import Studentdetail from './Studentdetail'

const Form = () => {
    const [student,setStudent]= useState({name:"",email:"",website:"",imgurl:"",gender:"",skills:""})
    let allstudents = localStorage.getItem("EnrolledStudents")
    let studentlist = []
    if(allstudents===null){
        studentlist = []
    }
    else{
        studentlist=JSON.parse(allstudents);
    }
    const [EnrolledStudents,setEnrolledstudents]=useState(studentlist)
    const onChange = (e) => {
        setStudent({ ...student, [e.target.name]: e.target.value });
    }
    const reset = ()=>{
        setStudent({name:"",email:"",website:"",imgurl:"",gender:"",skills:""});
    }
    const updatestudents = ()=>{
        let arr = EnrolledStudents;
        arr.push(student)
        setEnrolledstudents(arr)
        localStorage.setItem("EnrolledStudents",JSON.stringify(arr))
        setStudent({name:"",email:"",website:"",imgurl:"",gender:"",skills:""});
    }
    return (
        <>
            <div className='registration'>Registration Form</div>
            <div className='grid ml-150'>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <label htmlFor="name" className='w-100 m-10 p-10 text-bold'>Name</label>
                        <input type="text" className='w-200 border m-10 p-10' id='name' name='name' value={student.name} onChange={onChange} />
                    </div>
                    <div className="flex flex-row">
                        <label htmlFor="email" className='w-100 m-10 p-10 text-bold'>Email</label>
                        <input type="email" className='w-200 border m-10 p-10' id='email' name='email' value={student.email} onChange={onChange} />
                    </div>
                    <div className="flex flex-row">
                        <label htmlFor="website" className='w-100 m-10 p-10 text-bold'>Website</label>
                        <input type="url" className='w-200 border m-10 p-10' id='website' name='website' value={student.website} onChange={onChange} />
                    </div>
                    <div className="flex flex-row">
                        <label htmlFor="imagelink" className='w-100 m-10 p-10 text-bold'>Image Link</label>
                        <input type="url" className='w-200 border m-10 p-10' id='imgurl' name='imgurl' value={student.imgurl} onChange={onChange} />
                    </div>
                    <div className="flex flex-row">
                        <label htmlFor="gender" className='w-100 m-10 p-10 text-bold'>Gender</label>
                        <div id="gender" className='m-10 p-10'>
                            <input type="radio" id="male" name="gender" value="Male" onChange={onChange} />
                            <label for="male">Male</label><br />
                            <input type="radio" id="female" name="gender" value="Female" onChange={onChange} />
                            <label for="female">Female</label><br />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <label htmlFor="skills" className='w-100 m-10 p-10 text-bold'>Skills</label>
                        <div id="skills" className='m-10 p-10'>
                            <input type="radio" id="java" name="skills" value="JAVA" onChange={onChange} />
                            <label for="java">JAVA</label><br />
                            <input type="radio" id="html" name="skills" value="HTML" onChange={onChange} />
                            <label for="html">HTML</label><br />
                            <input type="radio" id="css" name="skills" value="CSS" onChange={onChange} />
                            <label for="css">CSS</label><br />
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="btn bg-green" onClick={updatestudents}>Enroll Student</div>
                        <div className="btn bg-red" onClick={reset}>Clear</div>
                    </div>
                </div>
                <div className="h-100 w-auto flex flex-col">
                         <h1 className={`${(EnrolledStudents.length===0)? "mt-100":"hidden"}`}>No student enrolled</h1>
                         <div className={`flex flex-col justify-center content-center ${(EnrolledStudents.length===0)? "hidden":""}`}>
                            <h1 className='m-10'>Enrolled Student</h1>
                            <div className="flex flex-row">
                                <div className="w200 border">
                                        Description
                                </div>
                                <div className="w100 border">
                                    Image
                                </div>
                            </div>
                            {
                                EnrolledStudents.map((stu,index)=>{
                                    return (
                                        <Studentdetail key={index} name={stu.name} email={stu.email} website={stu.website} imgurl={stu.imgurl} gender={stu.gender} skills={stu.skills}/>
                                    )
                                })
                            }
                         </div>
                </div>
            </div>
        </>
    )
}

export default Form
