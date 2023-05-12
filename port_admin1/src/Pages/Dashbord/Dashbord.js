import axios from 'axios';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const Dashbord = () => {
  const[verify,setverify]=useState([])
  const [data,setdata] = useState([])
  const [filterdta,setFilterdata] = useState([])
  const [work,setWork] = useState([])
const [acccount,setaccount] = useState([])
  useEffect(()=>{
    const auth = localStorage.getItem("auth")
    if(auth===null){
    }else{
     const decord = jwtDecode(auth)
     setverify(decord)
    }
   },[]);
   useEffect(()=>{
    axios.get("/consignment/viewconsignmenetbt")
    .then((res)=>{
      if(verify.role=="accounts"||verify.role=="superadmin"||verify.role=="all"){
        setdata(res.data)
      }else{
        const filterData = res.data.filter(data =>data.port===verify.portaccess)
        setdata(filterData);
      }
      
    }).catch((res)=>{
      console.log(res);
    })
    axios.get("/allconsignment/viewAllconsignmenteta")
    .then((res)=>{
      if(verify.role=="accounts"||verify.role=="superadmin"||verify.role=="all"){
        setWork(res.data)
      }else{
        const filterData = res.data.filter(data =>data.consignmentId.port===verify.portaccess)
        setWork(filterData)
      }
      
    }).catch((res)=>{
      console.log(res);
    })

   },[verify.portaccess])

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">Working Vessel</h4>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0">
                      <thead className="table-light">
                        <tr>
                          <th className="align-middle">Port Name</th>
                          <th className="align-middle">Vessel Name</th>
                          <th className="align-middle">Arrived Time</th>
                          <th className="align-middle">Berthed</th>
                          <th className="align-middle">PDA Reed on</th>
                         {verify.role=="accounts" ||verify.role=="port" ||verify.role=="all" ? <th className="align-middle">Operation</th>:""}
                        </tr>
                      </thead>
                      <tbody>
                        {work.map((data)=>(
                        <tr>
                          <td>{data.consignmentId.port}</td>
                          <td>{data.consignmentId.vesselName}</td>
                          <td>
                            {data.etas}
                          </td>
                          <td>
                          {data.ETB}
                          </td>
                          <td>
                             {moment(data.accountId.Adddate).format("YYYY-MM-DD")}
                          </td> 
                          <td>
                          {verify.role=="accounts"?
                           <Link to={`/editaccounts/${data.consignmentId._id}`}><button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                              View Details
                            </button></Link>
                            :""}
                           {verify.role=="port"?
                            <div className=''>
                           <Link to={`/portshow/${data.consignmentId._id}`}><button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                              View Details
                            </button></Link>
                             <Link to={`/alldate/${data.consignmentId._id}`}><button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                             View Date
                           </button></Link>
                           </div>
                          :""}
                          </td>
                        </tr>
                        )) }
                      </tbody>
                    </table>
                  </div>
        
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title mb-4">ETA Vessel</h4>
                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0">
                      <thead className="table-light">
                        <tr>
                        <th className="align-middle">Port</th>
                          <th className="align-middle">Vessel Name</th>
                          <th className="align-middle">ETA</th>
                          <th className="align-middle">ETB</th>
                          <th className="align-middle">PDA Reed on</th>
                          {verify.role=="accounts" ||verify.role=="port"||verify.role=="all" ? <th className="align-middle">Operation</th>:""}
                        </tr>
                      </thead>
                      <tbody>
                      {data.map((data)=>(
                        <tr>
                          <td>{data.port}</td>
                          <td>{data.vesselName}</td>
                          <td>
                          {data.eta}
                          </td>
                          <td>
                      
                          </td>
                        { data.pdaComplete?<td className=' text-success h5'>
                            True
                          </td>:<td className=' text-danger h5'>False</td>}
                          <td>
                            {verify.role=="accounts"?
                           <Link to={`/editaccounts/${data._id}`}><button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                              View Details
                            </button></Link>
                            :""}
                           {verify.role=="port"?
                           <div>
                           <Link to={`/portshow/${data._id}`}><button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                              View Details
                            </button></Link>
                            <Link to={`/alldate/${data._id}`}><button type="button" className=" mx-2 btn btn-primary btn-sm btn-rounded waves-effect waves-light">
                            View Date
                          </button></Link>
                          </div>
                          :""}
                          </td>
                        </tr>
                         )) }
                      </tbody>
                    </table>
                  </div>
        
                </div>
              </div>
            </div>
          </div>
   
        </div>

      </div>
    
     
    </div>
  )
}
