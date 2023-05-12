import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddNewConsignment = () => {
    const [port,setport] = useState([])
    const [owner,setowner] = useState([])
    const [broker,setBroker] = useState([])
    const [consignment, setConsignment] = useState({
       port:"",
       vesselName:"",
       charter:"",
       broker:"",
       epda:"",
       eta:"",
       ownerName:""
      })

      useEffect(()=>{
        axios.get("/portmember/allportmember")
        .then((res)=>{
            setport(res.data);
        }).catch((res)=>{
          console.log(res);
        })
        axios.get("/broker/viewbroker")
        .then((res)=>{
            setBroker(res.data);
        }).catch((res)=>{
          console.log(res);
        })
        axios.get('/owner/viewowner').then(res => {
            setowner(res.data)
      })
      },[])
      
      const handleData = (e) => {
        setConsignment({ ...consignment, [e.target.name]: e.target.value })
      }
      
      const submit =( e) => {
        e.preventDefault()
        console.log(consignment);
        axios
          .post('/consignment/newconsignment',consignment)
          .then((res)=>{
            window.location = "/newconsignment"
          })
          .catch((res)=>{
              toast.error(res.response.data, {
              position: toast.POSITION.TOP_CENTER,
              })
          })
      }    
  return (
    <div className='main-content'>
    <div className='page-content'>
      <form className=' w-75 m-auto'>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Port Name
          </label>   
          <div className='col-sm-10'>
          <select name="port" className='form-control' onChange={handleData} >
                <option hidden> --select port name -- </option>
                {
                    port.map((data)=>(
                        <option value={data.portname} >{data.portname}</option>
                    ))
                }
            </select>
          </div>
        </div>
        
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Vessel Name
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='vesselName'
              id='inputEmail3'
        
              onChange={handleData}
              required
            />
          </div>
        </div>
        
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Charter
          </label>
          <div className='col-sm-10'>
            <input
              type='text'
              className='form-control'
              name='charter'
              id='inputEmail3'
              onChange={handleData}
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          Broker
          </label>
          <div className='col-sm-10'>
          <select name="broker" className='form-control' onChange={handleData} >
          <option hidden> --select Broker name -- </option>
                {
                    broker.map((data)=>(
                        <option value={data.name} >{data.name}</option>
                    ))
                }
            </select>
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          EPDA Amount
          </label>
          <div className='col-sm-10'>
            <input
              type='number'
              className='form-control'
              name='epda'
              id='inputEmail3'
              onChange={handleData}
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
          ETA
          </label>
          <div className='col-sm-10'>
            <input
              type='time'
              className='form-control'
              name='eta'
              id='inputEmail3'
              onChange={handleData}
              required
            />
          </div>
        </div>
        <div className='row mb-3'>
          <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
            Owner Name
          </label>
          <div className='col-sm-10'>
          <select name="ownerName" className='form-control' onChange={handleData} >
          <option hidden> --select Owner name -- </option>
                {
                    owner.map((data)=>(
                        <option value={data.name} >{data.name}</option>
                    ))
                }
            </select>
          </div>
        </div>
        <button type='submit' className='btn btn-primary' onClick={submit}>
          Add new Consignment
        </button>
      </form>
    </div>
    <ToastContainer className={' mb-7'} />
  </div>
  )
}

export default AddNewConsignment