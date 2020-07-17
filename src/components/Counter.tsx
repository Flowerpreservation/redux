import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import {addGUN, removeGUN} from '../redux/reducer';
// import { StoreState } from '../types';

// 创建类型接口
export interface IProps {
    value: any,
    onIncrement: () => void,
    onDecrement: () => void
}
// @ts-ignore
@connect(
    (state: any) => ({ value: state.count }),
    {
     onIncrement: addGUN,
     onDecrement: removeGUN
    }
)
// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.PureComponent {
    constructor(props:any) {
        super(props);
        this.state = {
            count: 100,
            name: '21212'
        };
    }

    public render() {
        console.log(this.props, 'this.props');
        // @ts-ignore
        const { value, onIncrement, onDecrement } = this.props;
        // console.log(value, 'value')
        return (
            <p>
                点击次数: { value.countNumber }
                <br/>
                随机: { value.name }
                <br />
                <br />
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  增加</button>
                <button onClick={ onDecrement }> - 减少</button>
            </p>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
// const mapStateToProps = (state: any): { value: any } => ({
//     value: state.count
// });

// 将 对应action 插入到组件的 props 中
// const mapDispatchToProps = (dispatch:Dispatch) => {
//     return {
//         onDecrement: () => {
//             dispatch(removeGUN())
//         },
//         onIncrement: () => {
//             dispatch(addGUN())
//         }
//     }
// }
// 使用 connect 高阶组件对 Counter 进行包裹
export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
