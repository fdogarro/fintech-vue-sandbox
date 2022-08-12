export class DataSource{
  constructor(mockServer, gridOptions){
    this.mockServer = mockServer;
    this.gridOptions = gridOptions;
  }
  getRows(params){
    console.log('EnterpriseDatasource.getRows: params = ', params, this);
    let self = this;
    this.mockServer.getData(params.request,
        (resultForGrid, lastRow, secondaryCols) => {
            params.successCallback(resultForGrid, lastRow);
            let secondaryColDefs = self.buildSecondaryColDef(secondaryCols);
            self.gridOptions.columnApi.setSecondaryColumns(secondaryColDefs);
    });
  }
  buildSecondaryColDef(valueCols){
      if (valueCols) {
          return valueCols.map((col) => {
              return {
                  headerName: col.displayName,
                  field: col.field
              }
          });
      } else {
          return null;
      }
  }
}

export class MockServer{
  constructor(allData){
    this.allData = allData;
    this.connections = {};
    this.nextConnectionId = 0;
    console.log("Mock Server", this);
  }

  getData(request, callback){

    console.log("Request", request); 
      let rowGroupCols = request.rowGroupCols;
      let groupKeys = request.groupKeys;
      let valueCols = request.valueCols;
      let pivotCols = request.pivotCols;
      let pivotActive = request.pivotMode && pivotCols.length > 0 && valueCols.length > 0;
      let filterModel = request.filterModel;
      let sortModel = request.sortModel;
      let rowData = this.allData;
      if(pivotActive){
          let pivotResult = this.pivot(pivotCols, rowGroupCols, valueCols, rowData);
          rowData = pivotResult.data;
          valueCols = pivotResult.aggCols;
      }

      if (rowGroupCols.length > 0) {
          rowData = this.filterOutOtherGroups(rowData, groupKeys, rowGroupCols);
          let groupingActive = rowGroupCols.length > groupKeys.length;
          if (groupingActive) {
              rowData = this.buildGroupsFromData(rowData, rowGroupCols, groupKeys, valueCols);
          }
      }
      let lastRowFound = (rowData.length <= request.endRow);
      let lastRow = lastRowFound ? rowData.length : null;
      rowData = rowData.slice(request.startRow, request.endRow);

      setTimeout(() => {
          let secondaryCols = pivotActive ? valueCols : null;
          callback(rowData, lastRow, secondaryCols);
      }, 1000);

  }

  iterateObject(object, callback){
    if (!object) {
        return;
    }
    let keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let value = object[key];
        callback(key, value);
    }
  }

  pivot(pivotCols, rowGroupCols, valueCols, data){
    // assume 1 pivot col and 1 value col for this example
    var pivotCol = pivotCols[0];
    var valueCol = valueCols[0];

    var valField = valueCol.id;
    var pivotField = pivotCol.id;

    var pivotData = [];
    var aggColsList = [];
    var aggColsMap = {};

    data.forEach( function(item) {
        var value = item[valField];
        var pivotValue = item[pivotField].toString();

        if (!aggColsMap[pivotValue]) {
            var newCol = {
                id: pivotValue,
                displayName: valueCol.aggFunc + '(' + pivotValue + ')',
                field: pivotValue,
                aggFunc: valueCol.aggFunc
            };
            aggColsList.push(newCol);
            aggColsMap[pivotValue] = true;
        }

        var pivotItem = {};
        pivotItem[pivotValue] = value;

        rowGroupCols.forEach( function(rowGroupCol) {
            var rowGroupField = rowGroupCol.id;
            pivotItem[rowGroupField] = item[rowGroupField];
        });

        pivotData.push(pivotItem);
    });

    return {
        data: pivotData,
        aggCols: aggColsList
    };
  }

  buildGroupsFromData(rowData, rowGroupCols, groupKeys, valueCols){
    var rowGroupCol = rowGroupCols[groupKeys.length];
    var field = rowGroupCol.id;
    var mappedRowData = this.groupBy(rowData, field);
    var groups = [];

    this.iterateObject(mappedRowData, function(key, rowData) {
        var groupItem = {};
        groupItem[field] = key;

        valueCols.forEach(function(valueCol) {
            var field = valueCol.id;

            var values = [];
            rowData.forEach( function(childItem) {
                var value = childItem[field];
                // if pivoting, value will be undefined if this row data has no value for the column
                if (value!==undefined) {
                    values.push(value);
                }
            });

            // the aggregation we do depends on which agg func the user picked
            switch (valueCol.aggFunc) {
                case 'sum':
                    var sum = 0;
                    values.forEach( function(value) {
                        sum += value;
                    });
                    groupItem[field] = sum;
                    break;
                case 'min':
                    var min = null;
                    values.forEach( function(value) {
                        if (min===null || min > value) {
                            min = value;
                        }
                    });
                    groupItem[field] = min;
                    break;
                case 'max':
                    var max = null;
                    values.forEach( function(value) {
                        if (max===null || max < value) {
                            max = value;
                        }
                    });
                    groupItem[field] = max;
                    break;
                case 'random':
                    groupItem[field] = Math.random(); // just make up a number
                    break;
                default:
                    console.warn('unrecognised aggregation function: ' + valueCol.aggFunc);
                    break;
            }

        });

        groups.push(groupItem);
    });
    return groups;
  }

  filterOutOtherGroups(originalData, groupKeys, rowGroupCols){
    var filteredData = originalData;
    var that = this;
    groupKeys.forEach(function(groupKey, index) {
        var rowGroupCol = rowGroupCols[index];
        var field = rowGroupCol.id;

        filteredData = that.filter(filteredData, function(item) {
            return item[field] == groupKey;
        });
    });

    return filteredData;
  }

  groupBy(data, field){
    var result = {};
    data.forEach( function(item) {
        var key = item[field];
        var listForThisKey = result[key];
        if (!listForThisKey) {
            listForThisKey = [];
            result[key] = listForThisKey;
        }
        listForThisKey.push(item);
    });
    return result;
  }

  filter(data, callback){
    var result = [];
    data.forEach( function(item) {
        if (callback(item)) {
            result.push(item);
        }
    });
    return result;
  }
}
