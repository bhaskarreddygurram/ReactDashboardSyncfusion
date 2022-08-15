/*import React from 'react';
import { TabComponent, TreeViewComponent, TabItemDirective, TabItemsDirective, DragEventArgs, DragAndDropEventArgs } from '@syncfusion/ej2-react-navigations';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

const Tabs = () => {
    let headerText = [{ text: "Grid" }, { text: "Chart" }, { text: "Schedule" }];
  return (
        <div className='control-pane'>
            <div className='control-section tab-control-section row'>
                <div id="TabContainer">
                    <div className="col-lg-8 content-wrapper control-section">
                        <TabComponent id="draggableTab" ref={(tab) => { this.tabObj = tab }} created={this.onTabCreate.bind(this)} dragArea="#TabContainer" onDragStart={this.onTabDragStart.bind(this)} dragged={this.onDraggedTab.bind(this)} allowDragAndDrop={this.allowDragAndDrop} >
                            <TabItemsDirective>
                                <TabItemDirective header={headerText[0]} content={this.Grid} />
                                <TabItemDirective header={headerText[1]} content={this.Chart} />
                                <TabItemDirective header={headerText[2]} content={this.Schedule} />
                            </TabItemsDirective>
                        </TabComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tabs;*/