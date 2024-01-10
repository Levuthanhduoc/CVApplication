import PropTypes from 'prop-types';
import { useState } from 'react';
import CvInput from './input';


function Add({data,setData,init}){
    
    const increase = ()=>{
        const addData = [...data,...init];
        console.log(data);
        setData(addData);
    }
    const decrease = ()=>{
        const addData = [...data];
        addData.pop();
        setData(addData);
    }
    
    return (
        <> 
            <div className="info-button-box">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </>
    )
} 
Add.propTypes={
    data:PropTypes.array,
    setData:PropTypes.func,
    init:PropTypes.array,
}

function CvForm({cvData,setData,setMode}){
    
    const [infoData,setInfoData] = useState(cvData.info);
    const [expData,setExpData] = useState(cvData.exp);
    const [PracticalData,setPracticalData] = useState(cvData.practical);
    const [isCollecting,setCollectState] = useState(false);

    const onClickSubmit = (e)=>{
        e.preventDefault();
        setCollectState(true);
    }

    function SavePopup(){
        const onClickSave = ()=>{
            const newData = {
                info:infoData,
                exp:expData,
                practical:PracticalData,
            }
            setData(newData);
            setMode(false);
        }
    
        const onClickCancel = ()=>{
            setCollectState(false);
        }
        if(isCollecting){
            return(
            
                <div className="block">
                    <div className='save-popup'>
                        <div>
                            <button className='save-button'onClick={onClickSave}>Save</button>
                            <button className='cancel-button' onClick={onClickCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )
        }
       
    }

    return (
        <>
            <div className="cvForm">
                <p>Information</p>
                    <CvInput datas={infoData} setData={setInfoData}/>
                <p>Education experience</p>
                <div className='edu-exp-box'>
                    <CvInput datas={expData} setData={setExpData}/>
                    <Add data={expData} setData={setExpData} init={cvData.exp} />  
                </div>
                <p>Practical experience</p>
                <div className='practical-exp-box'>
                <div className='edu-exp-box'>
                    <CvInput datas={PracticalData} setData={setPracticalData}/>
                    <Add data={PracticalData} setData={setPracticalData} init={cvData.practical} />  
                </div>
                </div>
                <button className='submit-button' onClick={onClickSubmit}>Submit</button> 
            </div>
            <SavePopup/> 
             
        </>
    )
}
CvForm.propTypes={
    cvData:PropTypes.object,
    setMode:PropTypes.func,
    setData:PropTypes.func,   
}
export default CvForm;