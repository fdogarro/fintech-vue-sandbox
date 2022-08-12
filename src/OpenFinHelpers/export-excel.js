const Excel = require('../extensions/openfin.excel/ExcelApi.js');
const installFolder = '%localappdata%\\OpenFin\\shared\\assets\\excelAddin';

// exports.Excel = fin.desktop.Excel = Excel;
// console.log("Excel", Excel)

// export function ExcelContainer(){
//   let positionsGrid = document.getElementById("positions-grid");
//   console.log("Positions Grid", positionsGrid);
//
// }
// window.addEventListener("DOMContentLoaded", () => {

export function ExcelContainer(){

}

ExcelContainer.prototype.initialize = function(){
  window.addEventListener("DOMContentLoaded", () => {
      console.log("Excel Init", this);
      fin.desktop.main(() => {
        fin.desktop.Excel.init();
        Promise.resolve()
              .then(this.simluatePluginService)
              .then(this.connectToExcel)
              .then(this.onExcelConnected)
              .catch(err => console.log(err));

      })
  })
}

ExcelContainer.prototype.onExcelConnected = function(){
  console.log("Connected")
  let legacyApi = fin.desktop.Excel.legacyApi;
  fin.desktop.Excel.addEventListener("workbookAdded", onWorkbookAdded);
  fin.desktop.Excel.addEventListener("workbookOpened", onWorkbookAdded);
  fin.desktop.Excel.addEventListener("workbookClosed", onWorkbookRemoved);
  fin.desktop.Excel.addEventListener("workbookSaved", onWorkbookSaved);
  fin.desktop.Excel.getWorkbooks(workbooks => {
            for (var i = 0; i < workbooks.length; i++) {
                addWorkbookTab(workbooks[i].name);
                workbooks[i].addEventListener("workbookActivated", onWorkbookActivated);
                workbooks[i].addEventListener("sheetAdded", onWorksheetAdded);
                workbooks[i].addEventListener("sheetRemoved", onWorksheetRemoved);
                workbooks[i].addEventListener("sheetRenamed", onWorksheetRenamed);

            }

            if (workbooks.length) {
                selectWorkbook(workbooks[0]);
                setDisplayContainer(workbooksContainer);
            }
            else {
                setDisplayContainer(noWorkbooksContainer);
            }
        });
}

ExcelContainer.prototype.deployAddIn = function(servicePath, installFolder){
  return new Promise((resolve, reject) => {

          fin.desktop.System.launchExternalProcess({
              alias: 'excel-api-addin',
              target: servicePath,
              arguments: '-d "' + installFolder + '"',
              listener: function (args) {
                  console.log('Installer script completed! ' + args.exitCode);
                  resolve();
              }
          });
          console.log('Deploying Add-In');
      });

}

ExcelContainer.prototype.registerAddIn = function(servicePath, installFolder){
  window.addEventListener("DOMContentLoaded", () => {
    return new Promise((resolve, reject) => {
      console.log('Registering Add-In');
            fin.desktop.Excel.install(ack => {
                resolve();
            });
    })
  })
}

ExcelContainer.prototype.simluatePluginService = function(){
  let installFolder = '%localappdata%\\OpenFin\\shared\\assets\\excel-api-addin';
  let servicePath = 'OpenFin.ExcelService.exe';
  let addInPath = 'OpenFin.ExcelApi-AddIn.xll';
  var statusElement = document.getElementById("status");

        if (statusElement.innerText === "Connecting...") {
            return;
        }

        statusElement.innerText = "Connecting...";

        return Promise.resolve()
            .then(() => this.deployAddIn(servicePath, installFolder))
            .then(() => this.startExcelService(servicePath, installFolder))
            .then(() => this.registerAddIn(servicePath, installFolder));
}

ExcelContainer.prototype.startExcelService = function(service, folder){
  // window.addEventListener("DOMContentLoaded", () => {
    let serviceUuid = '886834D1-4651-4872-996C-7B2578E953B9';
    return new Promise((resolve, reject) => {
      console.log("Service Started");
        fin.desktop.System.getAllExternalApplications(extApps => {
            var excelServiceIndex = extApps.findIndex(extApp => extApp.uuid === serviceUuid);

            if (excelServiceIndex >= 0) {
                console.log('Service Already Running');
                resolve();
                return;
            }

            var onServiceStarted = () => {
                console.log('Service Started');
                fin.desktop.Excel.instance.removeEventListener('started', onServiceStarted);
                resolve();
            };

            chrome.desktop.getDetails(function (details) {
                fin.desktop.Excel.instance.addEventListener('started', onServiceStarted);

                fin.desktop.System.launchExternalProcess({
                    target: installFolder + '\\OpenFin.ExcelService.exe',
                    arguments: '-p ' + details.port,
                    uuid: serviceUuid,
                }, process => {
                    console.log('Service Launched: ' + process.uuid);
                }, error => {
                    reject('Error starting Excel service');
                });
            });
        });
    });
  // })
}

ExcelContainer.prototype.connectToExcel = function(){
  return new Promise((resolve, reject) => {
          fin.desktop.Excel.instance.getExcelInstances(instances => {
              if (instances.length > 0) {
                  console.log("Excel Already Running");
                  resolve();
              } else {
                  console.log("Launching Excel");
                  fin.desktop.Excel.run(resolve);
              }
          });
      });
}

  // })
