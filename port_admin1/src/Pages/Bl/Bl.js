import React, { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Bl = () => {
    const[verify,setverify]=useState([])
    const[data,setData]=useState([])

    useEffect(()=>{
        const auth = localStorage.getItem("auth")
        if(auth===null){
      
        }else{
         const decord = jwtDecode(auth)
         setverify(decord)
        }
       },[]);

       useEffect(()=>{
        axios.get("/bl/allbl")
        .then((res)=>{
            setData(res.data);
        })
       })

       var i=1;

  return (
     <div className="main-content">
    <div className="page-content">
    <div class="col">
            <div className="card">
           <div className="card-body">
            <div className='d-flex justify-content-between'>
            <h4 className="card-title">BL table</h4>
            <form className="app-search d-none d-lg-block pt-0">
            {/* <div className="position-relative">
              <input type="text" className="form-control" placeholder="Search by port number..." onChange={searchHandaler} />
              <span className="bx bx-search-alt" />
            </div> */}
          </form>
          {verify.role === 'superadmin' ?<Link to={"/newbl"} className='btn btn-primary vesel'>Add BL</Link>:""}
            </div>
              
           <div className="table-responsive">
            <table className="table table-borderless mb-0">
            <thead>
          <tr>
            <th>No</th>
            <th>portname</th>
            <th>vesselname</th>
            <th>Eta</th>
            <th>Arrived</th>
            <th>Berthed</th>
            <th>Sailed</th>
            <th> Agent</th>
            <th> consignee</th>
            <th> product</th>
            <th>Quantity In Mt</th>
            <th>Shipper</th>
            <th>Load port</th>
            <th> Day Over Sail </th>
            <th>Operation</th>
          </tr>
        </thead>

        <tbody>
      {data.map((data)=>(
       
            <tr >
            <th scope="row">{i++}</th>
            <td>{data.portname}</td>
            <td>{data.vesselname}</td>
            <td>{data.eta}</td>
            <td>{data.arrivetime}</td>
            <td>{data.berthed}</td>
            <td>{data.sailed}</td>
            <td>{data.agent}</td>
            <td>{data.consignee}</td>
            <td>{data.product}</td>
            <td>{data.quantity}</td>
            <td>{data.shipper}</td>
            <td>{data.loadPort}</td>
            <td>{data.dayoversail}</td>
            <td>
                <div className='d-flex'>
                {verify.role === 'superadmin' ? <Link to={`/editadminbl/${data._id}`}><button className='btn btn-success mx-2'>Edit</button></Link>:""}
                 <Link to={`/addallbl/${data._id}`}><button className='btn btn-success mx-2'>Added BL</button></Link>
                 <Link to={`/allbl/${data._id}`}><button className='btn btn-success mx-2'>View BL</button></Link>
              </div>
            </td> 
          </tr>
         
          ))}
        
           </tbody>
          </table>
          
            </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Bl