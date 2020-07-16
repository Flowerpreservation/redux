import { CountState } from './types'
const ADD_GUN='加机关枪';
const REMOVE_GUN = '减机关枪';
//reducer
//通过老的state和action 生成新的state

const initialState: CountState = {
    countNumber: 11,
    name: 'test'
};

export function count(state = initialState, action:any) {
    console.log(initialState, 'initialState');
    console.log(state, 'state')
    switch (action.type) {
        case ADD_GUN:
            const countNumber:any = state.countNumber + 1;
            // @ts-ignore
            const name:any = Math.random(10000);
            return {
                ...state,
                countNumber,
                name
            };
        case REMOVE_GUN:
            const countNumber3:any = state.countNumber - 1;
            // @ts-ignore
            const name2:any = Math.random(9999);
            return {
                ...state,
                countNumber: countNumber3,
                name: name2
            };
        default:
            return state
    }
}

//action create
export function addGUN(value?:number) {
    return { type:ADD_GUN, payload: value }
}

export function removeGUN(value?:number) {
    return { type:REMOVE_GUN, payload: value }
}
//异步提交

export function addGunAsync() {
    return (dispatch: (arg0: { type: string; }) => void)  =>  {
        setTimeout(()=>{
            dispatch(addGUN())
        },1000)
    }
}
