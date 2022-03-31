import React, { useEffect, useState } from 'react'
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row, Modal } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import logo from '../../logo.jpg';
import { useNavigate } from 'react-router-dom';
//import "antd/dist/antd.css"
const { Paragraph } = Typography;


const Header = (props) => {
    const onUpdateProfile = () =>{
        alert("update profile")
      
        navigate('/update-profile')
    }
    const menu = (
        <Menu>
            <Menu.Item>
                <a onClick={onUpdateProfile} >
                   Update Profile
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    2nd menu item
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    3rd menu item
                </a>
            </Menu.Item>
        </Menu>
    );
    
    const DropdownMenu = () => (
        <Dropdown key="more" overlay={menu}>
            <Button
                style={{
                    border: 'none',
                    padding: 0,
                }}
            >
                <EllipsisOutlined
                    style={{
                        fontSize: 20,
                        verticalAlign: 'top',
                    }}
                />
            </Button>
        </Dropdown>
    );
    
    const routes = [
        {
            path: 'index',
            breadcrumbName: 'First-level Menu',
        },
        {
            path: 'first',
            breadcrumbName: 'Second-level Menu',
        },
        {
            path: 'second',
            breadcrumbName: 'Third-level Menu',
        },
    ];
    
    const IconLink = ({ src, text }) => (
        <a className="example-link">
            <img className="example-link-icon" src={src} alt={text} />
            {text}
        </a>
    );
    
    const content = (
        <>
            <Paragraph>
                Ant Design interprets the color system into two levels: a system-level color system and a
                product-level color system.
            </Paragraph>
            <Paragraph>
                Ant Design&#x27;s design team preferred to design with the HSB color model, which makes it
                easier for designers to have a clear psychological expectation of color when adjusting colors,
                as well as facilitate communication in teams.
            </Paragraph>
            <div>
                <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                    text="Quick Start"
                />
                <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                    text=" Product Info"
                />
                <IconLink
                    src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                    text="Product Doc"
                />
            </div>
        </>
    );
    
    const Content = ({ children, extraContent }) => (
        <Row>
            <div style={{ flex: 1 }}>{children}</div>
            <div className="image">{extraContent}</div>
        </Row>
    );
   // const navigate=useNavigate()
    const authData = JSON.parse(localStorage.getItem('users'))
    const isLoggedIn = Boolean(authData.token)
    const [getLoggedIn, setLoggedIn] = useState(false)
    const [getModalOpan, setModalOpen] = useState(false)
    console.log("props values are", props)
    const navigate = useNavigate();
    const onHandleLogin = () => {
        console.log("change");
        if (getLoggedIn) {
            setModalOpen(true)
        } else {
            navigate('/user-login')
        }

    }
    const handleOk = () => {
        localStorage.setItem('users','')
        setModalOpen(true)
        navigate('/user-login')
    }
    const handleCancel = () => {
        setModalOpen(false)
    }
    
    useEffect(() => {
        setLoggedIn(isLoggedIn)
    },[])

    return (
        <React.Fragment>
            <PageHeader
                title="Singh Transport"
                className="site-page-header"
                extra={[
                    <Button onClick={onHandleLogin} key="1" type="primary">
                        {getLoggedIn ? 'Logout' : 'Login'}
                    </Button>,
                    <DropdownMenu key="more" />,
                ]}
                avatar={{ src: logo }}
            >
            </PageHeader>

            <Modal title="Logout" visible={getModalOpan} onOk={handleOk} onCancel={handleCancel}>
                <p>Are You Sure Want to Logout...</p>
                
            </Modal>


        </React.Fragment>
    )

}
export default Header