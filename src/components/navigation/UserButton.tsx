import React, { Dispatch } from "react";
import { Menu, Dropdown, Button } from 'antd';
import { UserOutlined, DownOutlined, LoginOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { UserAuthenticationActionTypes } from "../../store/types/userAuth";
import { userLogout } from "../../store/actions";


type UserButtonProps = {
  username?: string,
}

export default function UserButton({username}: UserButtonProps) {
  const dispatch: Dispatch<UserAuthenticationActionTypes> = useDispatch();
  const history = useHistory();

  const onMenuItemClick = (event: any) => {
    if(event.key === "Logout") {
      dispatch(userLogout());  
    }
  };

  const menu = (
    <Menu onClick={onMenuItemClick}>
      <Menu.Item key="profile">
        My profile
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="sales">
        My sales
      </Menu.Item>
      <Menu.Item key="shopping">
        My shopping
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="Logout">
        Logout
      </Menu.Item>
    </Menu>
  );

  if(username) {
    return (
      <Dropdown overlay={menu} placement="bottomCenter" arrow >
        <Button type={"text"} style={{color: "rgba(255, 255, 255, 0.65)"}}>
          <UserOutlined /> {username} <DownOutlined />
        </Button>
      </Dropdown>
      )
  } else {
    return (
      <Button 
        type={"text"} 
        style={{ color: "rgba(255, 255, 255, 0.65)" }}
        onClick={() => history.push('/login')}
      >
        <LoginOutlined /> Log In 
      </Button>
    );
  }

}