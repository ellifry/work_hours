function saveTimeToSheet(time, type) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow();
  var newRow = lastRow + 1;

  sheet.getRange(newRow, 1).setValue(time);
  sheet.getRange(newRow, 2).setValue(type);
}
