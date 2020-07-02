import {Menu} from "antd";
import {Link} from "dva/router"
import {Component} from "react";

class Header extends Component{
  render() {
    return(
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">
                    <Link to="/">Index</Link>
              </Menu.Item>
              <Menu.Item key="2">
                    <Link to="/aaa">AAA</Link>
              </Menu.Item>
              <Menu.Item key="3">
                    <Link to="/bbb">BBB</Link>
              </Menu.Item>
            </Menu>
    )
  }

}
export default Header
