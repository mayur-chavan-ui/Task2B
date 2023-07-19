import React, { useState } from 'react'


export function Form() {

    const [input, setInput] = useState({
        fname: "",
        lname: "",
        contact: "",
        email: "",
        phone: "",
    })

    const [data, setData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((pre) => ({ ...pre, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([...data, input])
        setInput({
            fname: "",
            lname: "",
            contact: "",
            email: "",
            phone: "",
        })
    }
    console.log(data)

    return (
        <>
            <div className='container col-sm-4'>
                <form className='shadow p-3 mb-5 bg-body-tertiary rounded' onSubmit={handleSubmit}>
                    <div className='d-flex justify-content-around'>
                        <div className='form-group'>
                            <label className='mx-4'>
                                First Name <br />
                                <input className='form-control' value={input.fname} name='fname' onChange={handleChange} />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label className='mx-2'>
                                Last Name <br />
                                <input className='form-control' value={input.lname} name='lname' onChange={handleChange} />
                            </label>
                        </div>
                    </div>
                    <div className='d-flex justify-content-around my-3'>
                        <div className='mx-4'>
                            <div><label>How should we contact you</label></div>
                            <div name="contact">
                                <div className='form-check form-check-inline'>
                                    <input className="form-check-input" type="radio" value="phone" name='contact' onClick={handleChange} />
                                    <label className="form-check-label">
                                        Phone
                                    </label>
                                </div>
                                <div className='form-check form-check-inline'>
                                    <input className="form-check-input" type="radio" value="email" name='contact' onClick={handleChange} />
                                    <label className="form-check-label" >
                                        Email
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div>
                            {input.contact === "phone" &&
                                <label> Phone <br />
                                    <input className='form-control' value={input.phone} name='phone' type='number' onChange={handleChange} />
                                </label> || input.contact === "email" &&
                                <label>
                                    Email <br />
                                    <input className='form-control' value={input.email} name='email' type='email' onChange={handleChange} />
                                </label>
                            }
                        </div>
                    </div>
                    <div className='d-flex mx-5 my-3'>
                        <button className="btn btn-primary" style={{ width: "300px", height: "40px" }} type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            {data.map((abc) => {
                return (<h3 className='text-center' style={{ boxShadow: "2px 6px 6px" }}>{abc.fname} {abc.lname} {abc.contact} - {abc.email} {abc.phone}
                </h3>)
            })}
        </>
    )
}

export default Form