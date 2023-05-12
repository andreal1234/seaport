import axios from 'axios';
import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';

const Createbl = () => {
  const[verify,setverify]=useState([])
  const [data,setdata]= useState({
    portname:"",
    vesselname:"",
    vogno:"",
    eta:"",
    arrivetime:"",
    berthed:"",
    sailed:"",
    agent:"",
    consignee:"",
    product:"",
    quantity:"",
    shipper:"",
    loadPort:"",
    dayoversail:"",     
})

useEffect(()=>{
  const auth = localStorage.getItem("auth")
  if(auth===null){

  }else{
   const decord = jwtDecode(auth)
   setverify(decord)
  }
 },[]);

const handleData=(e)=>{
  setdata({...data,[e.target.name]:e.target.value});
}

const submit=()=>{
  axios.post("/bl/newbl",data)
  .then((res)=>{
    console.log(res.data);
    window.location='/bl'
  }).catch((res)=>{
    console.log(res);
  })
}



  return (
    <div className='main-content'>
      <div className='page-content'>
        <div className=' w-75 m-auto'>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Port Name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.portname}
                name={verify.role === 'superadmin' ? 'portname' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Vessel name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.vesselname}
                name={verify.role === 'superadmin' ? 'vesselname' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              ETA
            </label>
            <div className='col-sm-10'>
              <input
                type='datetime-local'
                className='form-control'
                value={data.eta}
                name={verify.role === 'superadmin' ? 'eta' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Arrived
            </label>
            <div className='col-sm-10'>
              <input
                type='time'
                className='form-control'
                value={data.arrivetime}
                name={verify.role === 'superadmin' ? 'arrivetime' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Berthed
            </label>
            <div className='col-sm-10'>
              <input
                type='time'
                className='form-control'
                value={data.berthed}
                name={verify.role === 'superadmin' ? 'berthed' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Sailed
            </label>
            <div className='col-sm-10'>
              <input
                type='time'
                className='form-control'
                value={data.sailed}
                name={verify.role === 'superadmin' ? 'sailed' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Agent
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.agent}
                name={verify.role === 'superadmin' ? 'agent' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              consignee
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.consignee}
                name={verify.role === 'superadmin' ? 'consignee' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>

          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              product
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.product}
                name={verify.role === 'superadmin' ? 'product' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Quantity In Mt
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.quantity}
                name={verify.role === 'superadmin' ? 'quantity' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Shipper
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.shipper}
                name={verify.role === 'superadmin' ? 'shipper' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Load port
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.loadPort}
                name={verify.role === 'superadmin' ? 'loadPort' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
          </div>
          <div className='row mb-3'>
            <label htmlFor='inputEmail3' className='col-sm-2 col-form-label'>
              Day Over Sail
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                className='form-control'
                value={data.dayoversail}
                name={verify.role === 'superadmin' ? 'dayoversail' : ''}
                id='inputEmail3'
                onChange={handleData}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3" onClick={submit}>
            Add new BL
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createbl
