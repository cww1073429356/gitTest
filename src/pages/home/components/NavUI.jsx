import React from 'react'

export default function(props){
    let {data} = props;
    return (
        <nav className="channels-nav">
        <p><span>技术频道</span></p>
        {
            data.map((item, index)=>{
                return (
                    <li key={item.id}>
                        <img alt="" src={item.iconUrl}/>
                        <span>{item.name}</span>
                    </li>
                )
            })
        }
        </nav>
    )
}