import PropTypes from 'prop-types';



function CvView({datas,setMode}){
    console.log(datas);
    return (
        <div className='cvView'>
            <div className='infoView'>
                <p>{datas.info[0].Name}</p>
                <p>Email: {datas.info[0].Email}</p>
                <p>Phone: {datas.info[0].Phone}</p>
            </div>
            <div className='expView'>
                <h2>Education experience</h2>
                {datas.exp.map((data,index)=>{
                    console.log(data)
                    return(
                    <div key={"exp"+ index}>
                        <div className='expView-box'>
                            <p>{data.Date}</p>
                        </div>
                        <div className='expInfo-box'>
                            <p>{data.School}</p>
                            <p>{data.Major}</p>
                        </div>
                    </div>
                    )
                })}
                
            </div>
            <div className='practicalView'>
                <h3>Practical experience</h3>
                {datas.practical.map((data,index)=>{
                return(    
                <div key={"practical" + index}>
                    <div className='practicalView-box'>
                        <p>{data.Date}</p>
                    </div>
                    <div className='practicalInfo-box'>
                        <p>{data.Company}</p>
                        <p>{data.Position}</p>
                        <p>{data.Responsibilities}</p>
                    </div>
                </div>)
                })}
            </div>
            <div className='button-box'><button onClick={()=>setMode(true)}>Edit</button></div>
        </div>
    )
}
CvView.propTypes={
    datas:PropTypes.object,
    setMode:PropTypes.func,
}


export default CvView;