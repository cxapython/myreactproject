import {getUser} from "../services/user"
/*
如果是同步行为会直接通过 Reducers 改变 State ，
如果是异步行为会先触发 Effects 然后流向 Reducers 最终改变 State 。
* */
export default {
    //namespace是该模型的命名空间
    namespace: 'indexpage',
    //在routes组件中，我们可以用this.props.某命名空间获取state（根节点）中某命名空间的数据。
    state: {
        columns: [{
            title: '姓名',
            dataIndex: 'name',
        }, {
            title: '性别',
            dataIndex: 'gender',
        }],
        data: [{
            "key": "1",
            "name": "王大斌",
            "gender": "男"
        }, {
            "key": "2",
            "name": "刘小洋",
            "gender": "男"
        }]
    },

    subscriptions: {
        setup({dispatch, history}) {  // eslint-disable-line
            //表示进入主页就进行请求接口 "indexpage/addUser"
            history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({
                        type: "indexpage/addUser",
                    });
                }
            });
        },
    },

    effects: {
        * addUser({params}, {call, put}) {  // eslint-disable-line
            const response = yield call(getUser, params)
            yield put({
                type: 'ADD_USER',
                payload: response,
            });
        },
    },

    reducers: {
        ADD_USER(state, action) {
            //state,action获取到payload和type
            return {
                ...state,
                data: state.data.concat(action.payload.data)
            };
        },
    },

};
