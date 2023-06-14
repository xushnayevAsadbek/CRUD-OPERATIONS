import { BellOutlined, PlayCircleOutlined, SearchOutlined } from '@ant-design/icons';
import img from './img/img.png'

import './header.css'
export const Header = () =>{
    return(
        <div>
        <div className='sider'>
            <h1 className='sider-heading1'>CRUD OPERATIONS</h1>
            <div className='sider-img'>
                <img style={{
                    borderRadius:'50%',
                    marginTop:'20px',
                    padding:'0 60px  0 64px ',
                   
                }} src={img} alt="img" />
                <h3 className='sider-heading3'>Karthi Madesh</h3>
                <p>
                Admin
                </p>
            </div>
      </div>
        <div className='container' >
       <div className='header-box'>
   <p>
   <PlayCircleOutlined style={{
    color:'#C4C4C4',
    width:'17.44px',
    height:'17.44px',
    marginTop:'21.2px',
    marginBottom:'20px',
   }} />
   </p>
 <div style={{
    display:'flex',
    gap:'10px',
    justifyContent:'space-between',
    alignItems:'center',
 }}>
    <input className='header-box--search' type="search" placeholder='Search...' icon={<SearchOutlined />} />
    <p>
 <BellOutlined  style={{
     color:'#C4C4C4',
     width:'17px',
     height:'17px',
     marginTop:'10px',
     fontSize:'20px',
     marginBottom:'20px',

 }}/>
 </p>
 </div>
 

       </div>
        </div>
        </div>
    )
}