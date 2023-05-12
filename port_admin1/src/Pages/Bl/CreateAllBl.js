
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CreateAllBl = () => {
    const name = useParams()
   const[count,setCount] = useState(0)
   const[select,setSelect] = useState(null)


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
     const [inputlist,setinputlist] = useState([{
        vesselOwner:"",
        blNo:"",
        blDate:"",
        blQuantity:"",
        typeloi:"",
        otherDoc:"",
        orgloi:"",
        orgblrecd:"",
        copyofbl:"",
        bgreturned:"",
        blreturn:"",
        couriesNo:"",
        remarks:""
   }])
   const [allbl,setAllbl] = useState([{
        vesselOwner:"",
        blNo:"",
        blDate:"",
        blQuantity:"",
        typeloi:"",
        otherDoc:"",
        orgloi:"",
        orgblrecd:"",
        copyofbl:"",
        bgreturned:"",
        blreturn:"",
        couriesNo:"",
        remarks:""
   }])


    useEffect(()=>{
   setSelect(count)
 },[count])

 useEffect(()=>{
    axios.get(`/bl/onebl/${name.id}`)
    .then((res)=>{
        setdata(res.data)
    }).catch((res)=>{
        console.log(res);
    })
 },[])


    const handleinputchanger = (e,index)=>{
      const {name,value} = e.target;
      const list = [...inputlist];
      setAllbl({...allbl,[name]:value})
      list[index][name] = value;
      setinputlist(list); 
    }

    const addMore=(e)=>{
        setCount(count+1);
        e.preventDefault();
        setinputlist([...inputlist,{
        vesselOwner:"",
        blNo:"",
        blDate:"",
        blQuantity:"",
        typeloi:"",
        otherDoc:"",
        orgloi:"",
        orgblrecd:"",
        copyofbl:"",
        bgreturned:"",
        blreturn:"",
        couriesNo:"",
        remarks:""
        }])
        
   }

   const toggle=(i)=>{
     if(select==i){
     setSelect(null) 
     }else{
       setSelect(i)
     }
   }

   const submit=(e)=>{
     e.preventDefault();
     axios.post("/bl/newAllbl",{id:name.id,inputlist:inputlist})
     .then((res)=>{
      window.location='/bl'
     }).catch((res)=>{

     })

   }




  return (
    <div className="main-content">
         <div className="page-content">
          {allbl.vesselOwner}
             <div className=" w-75 m-auto">
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Port Name
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.portname}  id="inputEmail3" />
                 </div>
               </div>
              
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Vessel name
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.vesselname}  id="inputEmail3" />
                 </div>
               </div>
              
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
                    ETA
                 </label>
                 <div className="col-sm-10">
                   <input type="datetime-local" className="form-control" value={data.eta}   id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Arrived
                 </label>
                 <div className="col-sm-10">
                   <input type="time" className="form-control" value={data.arrivetime}  id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Berthed
                 </label>
                 <div className="col-sm-10">
                   <input type="time" className="form-control" value={data.berthed}  id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Sailed
                 </label>
                 <div className="col-sm-10">
                   <input type="time" className="form-control" value={data.sailed}  id="inputEmail3" />
                 </div>
               </div>
    
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Agent
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.agent}  id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                   consignee
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.consignee}  id="inputEmail3" />
                 </div>
               </div>
    
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    product
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.product}  id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Quantity In Mt
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.quantity}  id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Shipper
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.shipper} id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Load port
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.loadPort} id="inputEmail3" />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Day Over Sail 
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={data.dayoversail}  id="inputEmail3" />
                 </div>
               </div>
               {
                 inputlist.map((x,i)=>{
                   return(    
               <>
                <button className={(select===i?true:false)?"accordion mb-2 active":"accordion mb-2 "} onClick={()=>toggle(i)} >Add Bl No - {i+1}</button>
                {(select===i?true:false)?
                <>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    vessel Owner Name
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.vesselOwner} name="vesselOwner" id={`vesselOwner`}  onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Bl No
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.blNo} name="blNo"  onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Bl Date
                 </label>
                 <div className="col-sm-10">
                   <input type="date" className="form-control" value={allbl.blDate} name="blDate"  onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Bl Quantity
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.blQuantity} name="blQuantity" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Type of LOI/BG
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.typeloi} name="typeloi" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Any Other Doc
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.otherDoc} name="otherDoc" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                   Org LOI/BG recdon
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.orgloi} name="orgloi" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    Org BL Recd On
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.orgblrecd} name="orgblrecd" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                    How Many Copy Of BL
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.copyofbl} name="copyofbl" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                 LOI/BG returned on
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control"value={allbl.bgreturned} name="bgreturned" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
                 BL Returned On
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.blreturn} name="blreturn" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
             
               <div className="row mb-3">
                 <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">  
                 Couries No
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.couriesNo} name="couriesNo" id="inputEmail3"  onChange={e=>handleinputchanger(e,i)} />
                 </div>
               </div>
               <div className="row mb-3">
                 <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
                 Remarks
                 </label>
                 <div className="col-sm-10">
                   <input type="text" className="form-control" value={allbl.remarks} name="remarks" id="inputEmail3"  onChange={(e)=>handleinputchanger(e,i)} />
                 </div>
               </div>
             </>:""}
               </>
                   )
        })
          }
               <div className='d-flex justify-content-between'>
               <button type="submit" className="btn btn-primary" onClick={submit}>
                 Add new BL
               </button>
             <button type="submit" className="btn btn-primary mx-5" onClick={addMore} >
                 Add more
               </button>
               </div>
             </div>
             </div>
           </div>
  )
}

export default CreateAllBl











//  import React from 'react'

//  const CreateAllBl = () => {
//    return (
//      <div>CreateAllBl</div>
//    )
//  }

//  export default CreateAllBl
//  import React from 'react'
//  import { useEffect } from 'react'
//  import { useState } from 'react'
//  import jwtDecode from 'jwt-decode';
//  import axios from 'axios'

//  const Createbl = () => {







//  useEffect(()=>{
//    axios.get("http:localhost:4000/bl/onebl")
//    .then((res)=>{
//      console.log(res.data);
//       setBldata(res.data)
//       setdata(res.data)
//    }).catch((res)=>{
//      console.log(res);
//    })
//     axios.get("http:localhost:4000/bl/blAddedFind")
//     .then((res)=>{
//       setinputlist([res.data]);
//     })
//  },[])


//  useEffect(()=>{
//    const auth = localStorage.getItem("auth")
//    if(auth===null){

//    }else{
//     const decord = jwtDecode(auth)
//     setverify(decord)
//    }
//   },[]);






//    return (
//      <div className="main-content">
//      <div className="page-content">
//          <div className=" w-75 m-auto">
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Port Name
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.portname} name={verify.role==="superadmin"?"portname":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
          
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Vessel name
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.vesselname} name={verify.role==="superadmin"?"vesselname":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
          
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >
//                 ETA
//              </label>
//              <div className="col-sm-10">
//                <input type="datetime-local" className="form-control" value={data.eta} name={verify.role==="superadmin"?"eta":""}  id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Arrived
//              </label>
//              <div className="col-sm-10">
//                <input type="time" className="form-control" value={data.arrivetime} name={verify.role==="superadmin"?"arrivetime":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Berthed
//              </label>
//              <div className="col-sm-10">
//                <input type="time" className="form-control" value={data.berthed} name={verify.role==="superadmin"?"berthed":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Sailed
//              </label>
//              <div className="col-sm-10">
//                <input type="time" className="form-control" value={data.sailed} name={verify.role==="superadmin"?"sailed":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>

//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Agent
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.agent} name={verify.role==="superadmin"?"agent":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                consignee
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.consignee} name={verify.role==="superadmin"?"consignee":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>

//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 product
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.product} name={verify.role==="superadmin"?"product":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Quantity In Mt
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.quantity} name={verify.role==="superadmin"?"quantity":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Shipper
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.shipper} name={verify.role==="superadmin"?"shipper":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Load port
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.loadPort} name={verify.role==="superadmin"?"loadPort":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Day Over Sail 
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={data.dayoversail} name={verify.role==="superadmin"?"dayoversail":""} id="inputEmail3" onChange={handleData} />
//              </div>
//            </div>
//            {
//              inputlist.map((allbl,i)=>{
//                return(    
//            <>
//             <button className={(select===i?true:false)?"accordion mb-2 active":"accordion mb-2 "} onClick={()=>toggle(i)} >Add Bl No - {i+1}</button>
//             {(select===i?true:false)?
//             <>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 vessel Owner Name
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.vesselOwner} name="vesselOwner" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Bl No
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.blNo} name="blNo" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Bl Date
//              </label>
//              <div className="col-sm-10">
//                <input type="date" className="form-control" value={allbl.blDate} name="blDate" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Bl Quantity
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.blQuantity} name="blQuantity" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Type of LOI/BG
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.typeloi} name="typeloi" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Any Other Doc
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.otherDoc} name="otherDoc" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                Org LOI/BG recdon
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.orgloi} name="orgloi" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 Org BL Recd On
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.orgblrecd} name="orgblrecd" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//                 How Many Copy Of BL
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.copyofbl} name="copyofbl" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
//              LOI/BG returned on
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control"value={allbl.bgreturned} name="bgreturned" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
//              BL Returned On
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.blreturn} name="blreturn" id="inputEmail3" onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
         
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">  
//              Couries No
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.couriesNo} name="couriesNo" id="inputEmail3"  onChange={e=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//            <div className="row mb-3">
//              <label htmlFor="inputEmail3"  className="col-sm-2 col-form-label">
//              Remarks
//              </label>
//              <div className="col-sm-10">
//                <input type="text" className="form-control" value={allbl.remarks} name="remarks" id="inputEmail3"  onChange={(e)=>handleinputchanger(e,i)} />
//              </div>
//            </div>
//          </>:""}
//            </>
//                )
//     })
//       }
//            <div className='d-flex justify-content-between'>
//            <button type="submit" className="btn btn-primary" onClick={submit}>
//              Add new BL
//            </button>
//          <button type="submit" className="btn btn-primary mx-5" onClick={addMore} >
//              Add more
//            </button>
//            </div>
//          </div>
//          </div>
//        </div>
//    )
//  }

//  export default Createbl