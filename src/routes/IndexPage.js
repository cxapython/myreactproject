import React, {Component} from 'react';
import {connect} from 'dva';
import {Button, Table} from "antd";
class IndexPage extends Component{
    changeData = () => {
      const {dispatch} = this.props;
      dispatch({
        type:"indexpage/addUser"
      })
    };

    render() {
      console.log(this.props);
        const { columns, data } = this.props.indexpage; //获取indexpage中的state
        console.log(this.props);
        return (
            <div>
                <Button type="primary" onClick={this.changeData}>修改数据</Button>
                <div>
                    <Table columns={columns} dataSource={data}/>
                </div>
            </div>
        )
    }
}

export default connect(({ indexpage }) => ({
  indexpage,
}))(IndexPage);
