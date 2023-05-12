import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

const Date = () => {
    const name = useParams();
    const [data,setdata]=useState({
        consignmentId:name.id,
        vesseletadate:"",
        igm:"",
        vessearr:"",
        drop:"",
        doc:"",
        dischange:"",
        reasons:"",
        heave:"",
        pilot:"",
        free:"",
        arrived:"",
        pilotchanged:"",
        LEFTLOCKGATEBBJ:"",
        ARRIVEDTOBERTH:"",
        PRIORENTRYWITHCUSTOMS:"",
        FINALENTRYWITHCUSTOMS:"",
        NOTICEOFREADINESSTENDEREDBYSHIP:"",
        NOTICEOFREADINESSACCEPTED:"",
        FIRSTLINEATBERTH:"",
        ALLFASTABERTH:"",
        GANGWAYPLACEDATBERTH:"",
        ALLCREWTHERMALCHECKINGCOMPLETED:"",
        ALLCARGOCONCERNONBOARD:"",
        COMMENCEDULLAGINGSAMPLINGCALCN:"",
        COMPLETEDULLAGING:"",
        CUSTOMSONBOARD:"",
        CUSTOMSCLEARED:"",
        SAFETYMEETINGCOMMENCED:"",
        SAFETYMEETINGCOMPLETED:"",
        RECEIVERNAME:"",
        CARGOTYPE:"",
        CARGOQUANTITY:"",
        LOADPORTCARGOQUANTITY:"",
        QUANTITYINONARRIVAL:"",
        QUANTITYINDISCHARGED:"",
        HOSECONNECTION:"",
        COMMENCEDDISCHARGE:"",
        COMPLETEDDISCHARGE:"",
        COMMENCEDAIRBLOWING:"",
        COMPLETEDAIRBLOWING:"",
        HOSEDISCONNECTION:"",
        COMMENCEDTANKINSPECTION:"",
        COMPLETEDTANKINSPECTION:"",
        DOCUMENTATIONCOMPLETED:"",
        HAULEDOUTFROBERTH:"",
        ARRIVEDLOCKGATE:"",
        PILOTCHANGE:"",
        LEFTLOCKGATE:"",
        PILOTDISEMBARKED:"",
        DELAYSFROM:"",
        DELAYSTO:"",
        REASONS:""
    })

    const [consign,setConsign] = useState([])
    const dateFormat=(date)=>{
       return date?moment(date).format("YYYY-MM-DD") :"" ;    
    }
   

    useEffect(()=>{
        setdata({...data,consignmentId:name.id})
        axios.get(`/consignment/oneconsignment/${name.id}`)
        .then((res)=>{
            setConsign(res.data);
        }).catch((res)=>{
  
        })
        axios.get(`/allconsignment/timedata/${name.id}`)
        .then((res)=>{
            if(res.data===''){

             }else{
                // console.log(dateFormat(res.data.igm));
                  setdata({...data,vesseletadate:dateFormat(res.data.vesseletadate),
                  igm:dateFormat(res.data.igm),
                  vessearr:dateFormat(res.data.vessearr),
                  drop:dateFormat(res.data.drop),
                  doc:dateFormat(res.data.doc),
                  dischange:dateFormat(res.data.dischange),
                  reasons:res.data.reasons,
                  heave:dateFormat(res.data.heave),
                  pilot:dateFormat(res.data. pilot),
                  free:dateFormat(res.data.free),
                  arrived:dateFormat(res.data.arrived),
                  pilotchanged:dateFormat(res.data.pilotchanged),
                  LEFTLOCKGATEBBJ:dateFormat(res.data.LEFTLOCKGATEBBJ),
                  ARRIVEDTOBERTH:dateFormat(res.data.ARRIVEDTOBERTH),
                  PRIORENTRYWITHCUSTOMS:dateFormat(res.data.PRIORENTRYWITHCUSTOMS),
                  FINALENTRYWITHCUSTOMS:dateFormat(res.data.FINALENTRYWITHCUSTOMS),
                  NOTICEOFREADINESSTENDEREDBYSHIP:dateFormat(res.data. NOTICEOFREADINESSTENDEREDBYSHIP),
                  NOTICEOFREADINESSACCEPTED:dateFormat(res.data.NOTICEOFREADINESSACCEPTED),
                  FIRSTLINEATBERTH:dateFormat(res.data.FIRSTLINEATBERTH),
                  ALLFASTABERTH:dateFormat(res.data.ALLFASTABERTH),
                  GANGWAYPLACEDATBERTH:dateFormat(res.data.GANGWAYPLACEDATBERTH),
                  ALLCREWTHERMALCHECKINGCOMPLETED:dateFormat(res.data.ALLCREWTHERMALCHECKINGCOMPLETED),
                  ALLCARGOCONCERNONBOARD:dateFormat(res.data.ALLCARGOCONCERNONBOARD),
                  COMMENCEDULLAGINGSAMPLINGCALCN:dateFormat(res.data.COMMENCEDULLAGINGSAMPLINGCALCN),
                  COMPLETEDULLAGING:dateFormat(res.data.COMPLETEDULLAGING),
                  CUSTOMSONBOARD:dateFormat(res.data.CUSTOMSONBOARD),
                  CUSTOMSCLEARED:dateFormat(res.data.CUSTOMSCLEARED),
                  SAFETYMEETINGCOMMENCED:dateFormat(res.data.SAFETYMEETINGCOMMENCED),
                  SAFETYMEETINGCOMPLETED:dateFormat(res.data.SAFETYMEETINGCOMPLETED),
                  RECEIVERNAME:res.data.RECEIVERNAME,
                  CARGOTYPE:res.data.CARGOTYPE,
                  CARGOQUANTITY:res.data.CARGOQUANTITY,
                  LOADPORTCARGOQUANTITY:res.data.LOADPORTCARGOQUANTITY,
                  QUANTITYINONARRIVAL:res.data.QUANTITYINONARRIVAL,
                  QUANTITYINDISCHARGED:res.data.QUANTITYINDISCHARGED,
                  HOSECONNECTION:dateFormat(res.data.HOSECONNECTION),
                  COMMENCEDDISCHARGE:dateFormat(res.data.COMMENCEDDISCHARGE),
                  COMPLETEDDISCHARGE:dateFormat(res.data. COMPLETEDDISCHARGE),
                  COMMENCEDAIRBLOWING:dateFormat(res.data.COMMENCEDAIRBLOWING),
                  COMPLETEDAIRBLOWING:dateFormat(res.data.COMPLETEDAIRBLOWING),
                  HOSEDISCONNECTION:dateFormat(res.data.HOSEDISCONNECTION),
                  COMMENCEDTANKINSPECTION:dateFormat(res.data.COMMENCEDTANKINSPECTION),
                  COMPLETEDTANKINSPECTION:dateFormat(res.data.COMPLETEDTANKINSPECTION),
                  DOCUMENTATIONCOMPLETED:dateFormat(res.data.DOCUMENTATIONCOMPLETED),
                  HAULEDOUTFROBERTH:dateFormat(res.data.HAULEDOUTFROBERTH),
                  ARRIVEDLOCKGATE:dateFormat(res.data.ARRIVEDLOCKGATE),
                  PILOTCHANGE:dateFormat(res.data.PILOTCHANGE),
                  LEFTLOCKGATE:dateFormat(res.data. LEFTLOCKGATE),
                  PILOTDISEMBARKED:dateFormat(res.data.PILOTDISEMBARKED),
                  DELAYSFROM:dateFormat(res.data.DELAYSFROM),
                  DELAYSTO:dateFormat(res.data.DELAYSTO),
                  REASONS:res.data.REASONS
                });
             } 
        }).catch((res)=>{
  
        })
        
    },[name.id])

    const handleData = (e)=>{
        setdata({...data,[e.target.name]:e.target.value,consignmentId:name.id})

    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(data);
        axios.post('/allconsignment/alldate',data)
        .then((res)=>{
            window.location='/';
        }).catch((res)=>{
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
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                            Port Name
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='portlName'
                                value={consign.port}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                            Vessel Name
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='vesselName'
                                value={consign.vesselName}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        VESSEL ETA AT EOSP
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='vesseletadate'
                                onChange={handleData}
                                value={data.vesseletadate}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        IGM FILED ON 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='igm'
                                onChange={handleData}
                                 value={data.igm}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        VESSEL  ARRIVED AT EOSP
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='vessearr'
                                onChange={handleData}
                                 value={data.vessearr}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        DROP ANCHOR 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='drop'
                                onChange={handleData}
                                 value={data.drop}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        DOC REDINESS
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='doc'
                                onChange={handleData}
                                 value={data.doc}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        DISCHARGE INSTRUCTION RECEIVED ON
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='dischange'
                                onChange={handleData}
                                 value={data.dischange}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        REASONS FOR DELAY BERTHING
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='reasons'
                                onChange={handleData}
                                 value={data.reasons}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        HEAVE- UP ANCHOR 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='heave'
                                onChange={handleData}
                                 value={data.heave}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        PILOT ON BOARD
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='pilot'
                                onChange={handleData}
                                 value={data.pilot}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        FREE PRATIQUE GRANTED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='free'
                                onChange={handleData}
                                 value={data.free}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        ARRIVED AT LOG GATE /BBJ ANCHORAGE
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='arrived'
                                onChange={handleData}
                                 value={data.arrived}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        PILOT CHANGED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='pilotchanged'
                                onChange={handleData}
                                value={data.pilotchanged}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        LEFT LOCK GATE/ BBJ ANCHORAGE
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='LEFTLOCKGATEBBJ'
                                onChange={handleData}
                                 value={data.LEFTLOCKGATEBBJ}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        ARRIVED TO BERTH
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='ARRIVEDTOBERTH'
                                onChange={handleData}
                                 value={data.ARRIVEDTOBERTH}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        PRIOR ENTRY WITH CUSTOMS
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='PRIORENTRYWITHCUSTOMS'
                                onChange={handleData}
                                 value={data.PRIORENTRYWITHCUSTOMS}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        FINAL ENTRY WITH CUSTOMS
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='FINALENTRYWITHCUSTOMS'
                                onChange={handleData}
                                 value={data.FINALENTRYWITHCUSTOMS}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        NOTICE OF READINESS TENDERED BY SHIP
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='NOTICEOFREADINESSTENDEREDBYSHIP'
                                onChange={handleData}
                                 value={data.NOTICEOFREADINESSTENDEREDBYSHIP}
                                required
                            />
                        </div>
                    </div><div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        NOTICE OF READINESS ACCEPTED 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='NOTICEOFREADINESSACCEPTED'
                                onChange={handleData}
                                 value={data.NOTICEOFREADINESSACCEPTED}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        FIRST LINE AT BERTH
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='FIRSTLINEATBERTH'
                                onChange={handleData}
                                 value={data.FIRSTLINEATBERTH}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        ALL FAST AT BERTH
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='ALLFASTABERTH'
                                onChange={handleData}
                                 value={data.ALLFASTABERTH}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        GANGWAY PLACED AT BERTH
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='GANGWAYPLACEDATBERTH'
                                onChange={handleData}
                                 value={data.GANGWAYPLACEDATBERTH}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        ALL CREW THERMAL CHECKING COMPLETED (COVID 19)
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='ALLCREWTHERMALCHECKINGCOMPLETED'
                                onChange={handleData}
                                 value={data.ALLCREWTHERMALCHECKINGCOMPLETED}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        ALL CARGO CONCERN ON BOARD
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='ALLCARGOCONCERNONBOARD'
                                onChange={handleData}
                                 value={data.ALLCARGOCONCERNONBOARD}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMMENCED ULLAGING/SAMPLING CALCN 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMMENCEDULLAGINGSAMPLINGCALCN'
                                onChange={handleData}
                                 value={data.COMMENCEDULLAGINGSAMPLINGCALCN}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMPLETED ULLAGING/SAMPLING CALCN. 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMPLETEDULLAGING'
                                onChange={handleData}
                                 value={data.COMPLETEDULLAGING}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        CUSTOMS ON BOARD
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='CUSTOMSONBOARD'
                                onChange={handleData}
                                 value={data.CUSTOMSONBOARD}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        CUSTOMS CLEARED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='CUSTOMSCLEARED'
                                onChange={handleData}
                                 value={data.CUSTOMSCLEARED}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        SAFETY MEETING COMMENCED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='SAFETYMEETINGCOMMENCED'
                                onChange={handleData}
                                 value={data.SAFETYMEETINGCOMMENCED}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        SAFETY MEETING COMPLETED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='SAFETYMEETINGCOMPLETED'
                                onChange={handleData}
                                 value={data.SAFETYMEETINGCOMPLETED}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        RECEIVER'S  NAME
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='RECEIVERNAME'
                                onChange={handleData}
                                value={data.RECEIVERNAME}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        CARGO TYPE
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='CARGOTYPE'
                                onChange={handleData}
                                value={data.CARGOTYPE}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        CARGO QUANTITY (MT)
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='number'
                                className='form-control'
                                name='CARGOQUANTITY'
                                onChange={handleData}
                                 value={data.CARGOQUANTITY}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        LOAD PORT CARGO QUANTITY (MT)
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='number'
                                className='form-control'
                                name='LOADPORTCARGOQUANTITY'
                                onChange={handleData}
                                 value={data.LOADPORTCARGOQUANTITY}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        QUANTITY IN ON ARRIVAL AS PER SURVEYOR (MT)
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='number'
                                className='form-control'
                                name='QUANTITYINONARRIVAL'
                                onChange={handleData}
                                 value={data.QUANTITYINONARRIVAL}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        QUANTITY IN DISCHARGED AS PER SURVEYOR (MT)
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='number'
                                className='form-control'
                                name='QUANTITYINDISCHARGED'
                                onChange={handleData}
                                 value={data.QUANTITYINDISCHARGED}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        HOSE CONNECTION 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='HOSECONNECTION'
                                onChange={handleData}
                                 value={data.HOSECONNECTION}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMMENCED DISCHARGE 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMMENCEDDISCHARGE'
                                onChange={handleData}
                                 value={data.COMMENCEDDISCHARGE}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMPLETED DISCHARGE 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMPLETEDDISCHARGE'
                                onChange={handleData}
                                 value={data.COMPLETEDDISCHARGE}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMMENCED AIR BLOWING 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMMENCEDAIRBLOWING'
                                onChange={handleData}
                                 value={data.COMMENCEDAIRBLOWING}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMPLETED AIR BLOWING 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMPLETEDAIRBLOWING'
                                onChange={handleData}
                                 value={data.COMPLETEDAIRBLOWING}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        HOSE DISCONNECTION 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='HOSEDISCONNECTION'
                                onChange={handleData}
                                 value={data.HOSECONNECTION}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMMENCED TANK INSPECTION
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMMENCEDTANKINSPECTION'
                                onChange={handleData}
                                 value={data.COMMENCEDTANKINSPECTION}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        COMPLETED TANK INSPECTION
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='COMPLETEDTANKINSPECTION'
                                onChange={handleData}
                                 value={data.COMPLETEDTANKINSPECTION}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        DOCUMENTATION COMPLETED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='DOCUMENTATIONCOMPLETED'
                                onChange={handleData}
                                 value={data.DOCUMENTATIONCOMPLETED}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        HAULED OUT FROM BERTH 
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='HAULEDOUTFROBERTH'
                                onChange={handleData}
                                value={data.HAULEDOUTFROBERTH}
                                required
                            />
                        </div>
                    </div>

                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        ARRIVED LOCK GATE
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='ARRIVEDLOCKGATE'
                                onChange={handleData}
                                 value={data.ARRIVEDLOCKGATE}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        PILOT CHANGE
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='PILOTCHANGE'
                                onChange={handleData}
                                 value={data.PILOTCHANGE}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        LEFT  LOCK GATE
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='LEFTLOCKGATE'
                                onChange={handleData}
                                 value={data.LEFTLOCKGATE}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        PILOT DISEMBARKED
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='PILOTDISEMBARKED'
                                onChange={handleData}
                                 value={data.PILOTDISEMBARKED}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        DELAYS FROM
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='DELAYSFROM'
                                onChange={handleData}
                                 value={data.DELAYSFROM}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        DELAYS TO
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='date'
                                className='form-control'
                                name='DELAYSTO'
                                onChange={handleData}
                                value={ data.DELAYSTO}
                                required
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <label htmlFor='' className='col-sm-2 col-form-label'>
                        REASONS
                        </label>
                        <div className='col-sm-10'>
                            <input
                                type='text'
                                className='form-control'
                                name='REASONS'
                                onChange={handleData}
                                value={data.REASONS}
                                required
                            />
                        </div>
                    </div>      
          <button type='submit' className='btn btn-primary' onClick={submit}>
            Add Account
          </button>
        </form>
      </div>
      <ToastContainer className={' mb-7'} />
    </div>
  )
}

export default Date