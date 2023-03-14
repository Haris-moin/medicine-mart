import cartReducer from './cartReducer';
import authReducer from './authReducer';

export {authReducer, cartReducer};
// import {productsData} from '../../data/productsMock';
// const initState = {
//   items: productsData,
//   addedItems: [],
//   total: 0,
//   isUserLoggedIn: false,
// };
// const cartReducer = (state = initState, action) => {
//   if (action.type === 'ADD_TO_CART') {
//     let addedItem = state.items.find(item => item.id === action.id);
//     let existed_item = state.addedItems.find(item => action.id === item.id);
//     if (existed_item) {
//       // existed_item.quantity += 1;
//       return {
//         ...state,
//         total: state.total + Number(existed_item.balance),
//       };
//     } else {
//       let newTotal = state.total + Number(addedItem.balance);
//       return {
//         ...state,
//         addedItems: [...state.addedItems, {...addedItem, quantity: 1}],
//         total: newTotal,
//       };
//     }
//   }
//   if (action.type === 'ADD_QUANTITY') {
//     let addedItem = state.items.find(item => item.id === action.id);
//     let existed_item = state.addedItems.find(item => action.id === item.id);
//     if (existed_item) {
//       existed_item.quantity += 1;
//       return {
//         ...state,
//         total: state.total + Number(existed_item.balance),
//       };
//     } else {
//       let newTotal = state.total + Number(addedItem.balance);
//       return {
//         ...state,
//         addedItems: [...state.addedItems, {...addedItem, quantity: 1}],
//         total: newTotal,
//       };
//     }
//   }
//   if (action.type === 'SUB_QUANTITY') {
//     let existed_item = state.addedItems.find(item => action.id === item.id);
//     if (existed_item.quantity === 1) {
//       let new_items = state.addedItems.filter(item => item.id !== action.id);
//       let newTotal = state.total - Number(existed_item.balance);
//       return {
//         ...state,
//         addedItems: new_items,
//         total: newTotal,
//       };
//     } else {
//       existed_item.quantity -= 1;
//       let newTotal = state.total - Number(existed_item.balance);
//       return {
//         ...state,
//         total: newTotal,
//       };
//     }
//   }
//   if (action.type === 'IS_USER_SIGN_IN') {
//     console.log('!!action.id: ', !!action.id);
//     return {...state, isUserLoggedIn: !!action.id};
//   } else {
//     return state;
//   }
// };

// export default cartReducer;
