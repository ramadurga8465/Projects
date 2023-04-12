import React from 'react';
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS, COLUMS} from './Columns.js';
export const BasicTable = () => {
 useTable({
    columns:COLUMNS,
    data:MOCK_DATA
 })
  return (
    <div>BasicTable</div>
  )
}
