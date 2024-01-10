import PropTypes from 'prop-types';

function Input({name,val,change,index,...props}){
    return (
        <div {...props}>
            <label htmlFor={name + index} > {name}</label>
            <input
            type="text"
            id={name + index}
            name= {name}
            value={val[name]}
            onChange={(e) =>
            change({e,index})}
        />
           
        </div>
        
    )                
}
Input.propTypes={
    name:PropTypes.string,
    val:PropTypes.object,
    change:PropTypes.func,
    index:PropTypes.number,
}

export default function CvInput({datas,setData}){
    const onChange = ({e,index})=>{
        let text = e.target.name;  
        let newData = datas.slice();
        let oldData = datas[index]
        newData[index] = {...oldData,[text]:e.target.value};
        setData(newData);
    }
    return(
        <>
            {
                datas.map((data,index)=>{
                    return (
                    <div className='info-box' key={index}>
                        {
                            Object.keys(data).map((dataName)=>(
                                <Input key={dataName + index} name ={dataName} val={data} change={onChange} index ={index}/>
                            ))
                        }
                    </div>
                    )
                })
            }
        </>
        
    )
}
CvInput.propTypes ={
    datas:PropTypes.array,
    setData:PropTypes.func
}