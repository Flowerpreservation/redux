import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import {addGUN, removeGUN} from '../redux/reducer';
// import { StoreState } from '../types';


// 创建类型接口
export interface IProps {
    value: any,
    onIncrement: () => void,
    onDecrement: () => void
}

// 使用接口代替 PropTypes 进行类型校验
class Counter extends React.PureComponent<IProps> {
    constructor(props:any) {
        super(props);
        this.state = {
            count: 100,
            name: '21212'
        };
    }
    public render() {
        const { onIncrement, onDecrement } = this.props;
        console.log(this.props.value.countNumber, 'this.props');
        return (
            <p>
                Clicked: { this.props.value.countNumber } times
                <br/>
                name: { this.props.value.name }
                <br />
                <br />
                <button onClick={ onIncrement } style={{ marginRight: 20 }}> +  </button>
                <button onClick={ onDecrement }> - </button>
            </p>
        )
    }
}

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个reducer的时候，多个的时候需要选传入哪个reducer
// const { test, count } = state
const mapStateToProps = (state: any): { value: any } => ({
    value: state.count
});
// const mapStateToProps = (state:any): { value: number } => ({
//     value: state.count
// });

// 将 对应action 插入到组件的 props 中
// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onDecrement: () => dispatch(removeGUN()),
//     onIncrement: () => dispatch(addGUN())
// });
const mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        onDecrement: () => {
            dispatch(removeGUN())
        },
        onIncrement: () => {
            dispatch(addGUN())
        }
    }
}
// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
