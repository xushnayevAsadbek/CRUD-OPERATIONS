import { BellOutlined, FileOutlined, HomeOutlined, LogoutOutlined, PlayCircleOutlined, SearchOutlined } from '@ant-design/icons';
import img from './img/img.png'
import './header.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../context';
export const Header = ({ setMode }) => {

    const { mode } = useContext(context)

    const headerStyle = {
        backgroundColor: mode === 'Light' ? "black" : "white",
        color: mode === 'Light' ? "white" : "black"
    }

    console.log(headerStyle);
    return (
        <div>
            <div className='sider'>
                <h1 className='sider-heading1'>CRUD OPERATIONS</h1>
                <div className='sider-img'>
                    <img style={{
                        borderRadius: '50%',
                        marginTop: '20px',
                        padding: '0 60px  0 64px ',

                    }} src={img} alt="img" />
                    <h3 className='sider-heading3'>Karthi Madesh</h3>
                    <p className='sider-text'>
                        Admin
                    </p>
                </div>

                <div>
                    <div className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Home
                        </p>
                    </div>

                    <NavLink to="/course" className='sider-box' >
                        <FileOutlined style={{
                            paddingLeft: '45px',
                        }} />
                        <p className='sider-box__text'>

                            Course
                        </p>
                    </NavLink>


                    <NavLink to="/student" className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Students
                        </p>

                    </NavLink>
                    <div className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Payment
                        </p>
                    </div>
                    <div className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Report
                        </p>
                    </div>
                    <div className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Settings
                        </p>
                    </div>
                </div>
                <div style={{
                    position: 'absolute',
                    bottom: '33px',
                    left: '80px'
                }} >
                    <button className='sider-btn'>Logout   <LogoutOutlined style={{
                        paddingLeft: '23px',
                    }} /></button>
                </div>
            </div>
            <div className='container' >
                <div className='header-box' style={headerStyle}>
                    <p>
                        <PlayCircleOutlined style={{
                            color: '#C4C4C4',
                            width: '17.44px',
                            height: '17.44px',
                            marginTop: '21.2px',
                            marginBottom: '20px',
                        }} />
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '10px',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                        <select  className='select-dark' onChange={(e) => { setMode(e.target.value) 
                            localStorage.setItem('them' , e.target.value)
                         } }>
                            <option disabled selected >select</option>
                            <option>Light</option>
                            <option>Dark</option>

                        </select>
                        <input className='header-box--search' type="search" placeholder='Search...' icon={<SearchOutlined />} />
                        <p>
                            <BellOutlined style={{
                                color: '#C4C4C4',
                                width: '17px',
                                height: '17px',
                                marginTop: '10px',
                                fontSize: '20px',
                                marginBottom: '20px',

                            }} />
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}