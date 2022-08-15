/*import 'handsontable/dist/handsontable.full.css';

import ReactDOM from 'react-dom';
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { createSpreadsheetData } from 'handsontable-helpers';

// register Handsontable's modules
registerAllModules();

const hotData = createSpreadsheetData(6, 10);

const Handsontable = () => {
  return (
    <div>
      <HotTable
        settings={{
          data: hotData,
          colHeaders: true,
          rowHeaders: true,
          height: 'auto',
          licenseKey: 'non-commercial-and-evaluation'
        }}
      />
    </div>
  )
}

export default Handsontable;*/
import 'handsontable/dist/handsontable.full.css';

import ReactDOM from 'react-dom';
import { HotTable, HotColumn } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import { handsonData, handsonDataNew } from '../data/dummy';

// register Handsontable's modules
registerAllModules();

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13]
];

const Handsontable = () => {
  return (
    <div id="hot-app">
        <div className="hot-app-container">HandsonTable</div>
      <HotTable
        data={handsonDataNew}
        colWidths={[140, 126, 192, 100, 100, 90, 90, 110, 97]}
        colHeaders={[
            "Company name",
            "Country",
            "Name",
            "Sell date",
            "Order ID",
            "In stock",
            "Qty",
            "Progress",
            "Rating"
        ]}
        hiddenColumns={{
            indicators: true
          }}
          
        contextMenu={true}
        multiColumnSorting={true}
        filters={true}
        rowHeaders={true}
        /*afterGetColHeader={alignHeaders}
        beforeRenderer={addClassesToRows}
        afterGetRowHeader={drawCheckboxInRowHeaders}
        afterOnCellMouseDown={changeCheckboxCell}*/
        manualRowMove={true}
        licenseKey="non-commercial-and-evaluation"
        
        
      >
        <HotColumn data={1} />
        <HotColumn data={2} />
        <HotColumn data={3} />
        <HotColumn data={4} type="date" allowInvalid={false} />
        <HotColumn data={5} />
        <HotColumn data={6} type="checkbox" className="htCenter" />
        <HotColumn data={7} type="numeric" />
        <HotColumn data={8} readOnly={true} className="htMiddle">
            {/* @ts-ignore Element inherits some props. It's hard to type it. */}
            {/*<ProgressBarRenderer hot-renderer />*/}
        </HotColumn>
        <HotColumn data={9} readOnly={true} className="htCenter">
            {/* @ts-ignore Element inherits some props. It's hard to type it. */}
            {/*<StarsRenderer hot-renderer /> */}
        </HotColumn>
        </HotTable>
    </div>
  );
}
export default Handsontable;