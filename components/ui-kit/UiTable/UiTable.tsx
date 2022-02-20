import {
  ChangeEventHandler,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import UiButton from '../UiButton';
import { TableContext, TableContextProvider } from './context';
import { UiTableState } from './interfaces';

interface UiTableParams {
  rows?: any;
  columns?: any;
}

const UiTable: React.FC<UiTableParams> = ({ rows, columns }) => {
  const initial_rows = [
    { name: 'Fireball', level: '3rd', time: 'Action' },
    { name: 'Wish', level: '9th', time: 'Action' },
    { name: 'Chill Touch', level: 'Cantrip', time: 'Action' },
    { name: 'Mighty Fortress', level: '8th', time: '1 Min.' },
  ];

  const initial_columns = [
    { title: 'Name', key: 'name', width: '1/3' },
    { title: 'Level', key: 'level', width: '1/3' },
    { title: 'Time', key: 'time', width: '1/3' },
  ];

  const inital = {
    rows: initial_rows,
    columns: initial_columns,
    allSelected: false,
  };

  return (
    <main className="flex flex-col gap-2 basis-full grow shrink-0 p-4">
      <TableContextProvider initial={inital}>
        <UiTableFilters />
        {/* FILERS */}

        <section className="border rounded">
          <UiTableColumns />
          {/* COLUMNS */}
          <UiTableRows />
          {/* ROWS */}
        </section>
      </TableContextProvider>
    </main>
  );
};

export default UiTable;

// FILTERS COMPONENT
interface UiTableFiltersParams {}

const UiTableFilters: React.FC<UiTableFiltersParams> = params => {
  return (
    <section className="flex justify-self-stretch items-stretch w-full">
      <UiButton className="rounded-r-none">Filter</UiButton>
      <input
        className="border w-full p-2 shadow-none outline-none focus-visible:border-black focus-visible:border"
        type="text"
        placeholder="Search"
      />
      <UiButton className="rounded-l-none">Reset</UiButton>
    </section>
  );
};

// COLUMNS COMPONENT
interface UiTableColumnsParams {}

const UiTableColumns: React.FC<UiTableColumnsParams> = params => {
  const { state, dispatch } = useContext(TableContext);
  console.log('initial state: ', state);
  const [allSelect, setAllSelect] = useState(state.allSelected);
  const columns = state.columns;

  useEffect(() => {
    console.log(`allSelect changed : `, allSelect);
  }, [allSelect]);

  return (
    <div className="flex border-b">
      <div className={` p-2 border-r`}>
        <input
          type="checkbox"
          checked={allSelect}
          onChange={() => setAllSelect(!allSelect)}
        />
      </div>

      {columns.map((column, index) => {
        return (
          <div
            key={column.key}
            className={`w-${column.width ?? 'full'} p-2 ${
              index && 'border-l'
            }`}>
            <strong>{column.title}</strong>
          </div>
        );
      })}
    </div>
  );
};

interface UiTableRowsParams {}

const UiTableRows: React.FC<UiTableRowsParams> = () => {
  const { state } = useContext(TableContext);

  console.log('RENDERED ROWS');

  const columns = state.columns;
  const [rows, setRows] = useState(
    state.rows.map(row => ({ data: row, meta: { selected: false } }))
  );

  const handleSelection = (row: any, index: number) => {
    row.meta.selected = !row.meta.selected;
    rows.splice(index, 1, row);
    setRows(rows);
  };

  useEffect(() => {
    console.log('EFFECT : ', state);
  });

  return (
    <>
      {rows.map((row: any, index) => (
        <div
          key={index}
          className={`flex ${index < rows.length - 1 && 'border-b'}`}>
          <div className={` p-2 border-r`}>
            <input
              type="checkbox"
              value={row.meta.selected}
              onChange={() => handleSelection(row, index)}
            />
          </div>

          {columns.map((column, cindex) => (
            <div
              key={column.key}
              className={`w-${column.width ?? 'full'} p-2 ${
                cindex && 'border-l'
              }`}>
              {row.data[column.key]}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
