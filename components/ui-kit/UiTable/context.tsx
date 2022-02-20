import { useReducer, createContext, useContext } from 'react';
import { UiTableAction, UiTableState } from './interfaces';

const default_state: UiTableState = {
  columns: [],
  rows: [],
  allSelected: false,
};

// Create a Context
const TableContext = createContext<{
  state: UiTableState;
  dispatch: React.Dispatch<UiTableAction>;
}>({
  state: default_state,
  dispatch: (() => {
    console.log('empty dispatch');
  }) as React.Dispatch<UiTableAction>,
});

// Reducer with the different actions for the image list
function uiTableReducer(state: UiTableState, action: UiTableAction) {
  let new_state = { ...state };

  console.log('uiTableReducer');

  switch (action.type) {
    case 'setData':
      new_state = {
        ...state,
        rows: action.value.rows,
        columns: action.value.columns,
      };
      break;
  }

  return new_state;
}

// Create provider that wraps the children and connects the reducer to the context
function TableContextProvider({ children, initial }: any) {
  const [state, dispatch] = useReducer(
    uiTableReducer,
    initial ?? default_state
  );

  const value = { state, dispatch };

  console.log('TableContextProvider : ', { value });

  return (
    <TableContext.Provider value={value}>{children}</TableContext.Provider>
  );
}

// We return only the provider, we assume the context will only be used with the `useContext` hook
export { TableContextProvider, TableContext };
