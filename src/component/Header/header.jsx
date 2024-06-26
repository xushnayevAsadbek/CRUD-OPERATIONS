import { BellOutlined, FileOutlined, HomeOutlined, LogoutOutlined, PlayCircleOutlined, SearchOutlined, MoneyCollectOutlined , SnippetsOutlined} from '@ant-design/icons';
import img from './img/img.png'
import './header.css'
import { NavLink } from 'react-router-dom';
import { useContext, useRef } from 'react';
// import { context } from '../../context';
export const Header = () => {

    // const { mode } = useContext(context);
    const selectRef = useRef(null);
    // const headerStyle = {
    //     backgroundColor: mode === 'Light' ? "black" : "white",
    //     color: mode === 'Light' ? "white" : "black"
    // }
    // console.log(selectRef?.current?.value);

    // console.log(headerStyle);
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
                    <NavLink to="/" className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Home
                        </p>
                    </NavLink>

                    <NavLink to="/course" className='sider-box' >
                        <SnippetsOutlined  style={{
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
                    <NavLink to="/payment" className='sider-box'>
                        <MoneyCollectOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Payment
                        </p>
                    </NavLink>
                    <NavLink to="/user">
                    <div className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            User
                        </p>
                    </div>
                    </NavLink>
                    <div className='sider-box'>
                        <HomeOutlined style={{
                            paddingLeft: '45px',
                        }} />

                        <p className='sider-box__text'>
                            Settings
                        </p>
                    </div>
                </div>
                <NavLink to="/auth/login" style={{
                    position: 'absolute',
                    bottom: '33px',
                    left: '80px'
                }} >
                    <button className='sider-btn'>Logout   <LogoutOutlined style={{
                        paddingLeft: '23px',
                    }} /></button>
                </NavLink>
            </div>
            <div className='container' >
                <div className='header-box'>
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
                        <select ref={selectRef} className='select-dark' >
                            {/* <option disabled selected >Light/Dark</option> */}
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>

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