export interface UiTableColumn {
  title: string;
  key: string;
  width: string;
}

export interface UiTableState {
  columns: UiTableColumn[];
  rows: any[];
  allSelected: boolean;
}

export interface UiTableAction {
  type: string;
  value: any;
}
