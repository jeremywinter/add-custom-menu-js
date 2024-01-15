/*
function onSelectionChange(e) {

  var range = e.range;
  var spreadSheet = e.source;
  var sheetName = spreadSheet.getActiveSheet().getName();
  var column = range.getColumn();
  var row = range.getRow();
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

  if(row > 1 && column === 6 && sheetName === 'DATA')
  {
    if(dataSheet.getRange(row,6).getValue() === 'X')
    {
      dataSheet.getRange(row,6).setValue('');
    }
    else
    {
      dataSheet.getRange(row,6).setValue('X');
    }
  }

}

function copyRows()
{ 
  var copySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('COPY TO SHEET');
  var dataSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('DATA');
  var dataRange = dataSheet.getDataRange();
  var dataValues = dataRange.getValues();

  for(var i = 1; i < dataValues.length; i++)
  {
    if(dataValues[i][5] === 'X')
    {
      copySheet.appendRow([dataValues[i][0], 
                          dataValues[i][1], 
                          dataValues[i][2], 
                          dataValues[i][3], 
                          dataValues[i][4]]);
    }
  }

  for(var i = 1; i < dataValues.length; i++)
  {
    if(dataValues[i][5] === 'X')
    {
      var clearRow = i+1;
      dataSheet.getRange('A' + clearRow + ':F' + clearRow).clear();
    }
  }
}
*/

function addMenu()
{
  var menu = SpreadsheetApp.getUi().createMenu('Custom'); // menu name
  menu.addItem('Copy Rows', 'copyRows'); // menu item, function name
  menu.addToUi(); 
}

function onOpen(e)
{
  addMenu(); 
}