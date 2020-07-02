import {getUser} from "../services/user"

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
        //初次加载页面的时候会进来
        setup({dispatch, history}) {  // eslint-disable-line
            history.listen(({pathname}) => {
                if (pathname === '/') {
                    dispatch({
                        type: "indexpage/addUser",
                    });
                }
            })
        },
    },
    effects: {
        * addUser({payload, callback}, {call, put}) {  // eslint-disable-line
            const response = yield call(getUser, payload)
            yield put({
                type: 'ADD_USER',
                payload: response,
            });
        },
    },
    reducers: {
        ADD_USER(state, action) {
            return {
                ...state,
                data: state.data.concat(action.payload.data)
            };
        },
    },

};
