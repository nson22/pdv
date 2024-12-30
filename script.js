const SHEET_ID = '1vjcqidUTmgLdqrXQ1NkqR3A8zJp1HGY4VRgQu3RYXKc'
const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("Relatório");

function getPreviousDateRange() {
  var rangeData = sheet.getRange('B1:B2').getValues();
  var formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return [formatter.format(rangeData[0][0]), formatter.format(rangeData[1][0])]
}

function setDateRange(startDate, endDate) {
  var cellRange = sheet.getRange('B1');
  cellRange.setValue(startDate);
  var cellRange = sheet.getRange('B2');
  cellRange.setValue(endDate);
}

function getTotal(startDate, endDate) {
  const [previousStartDate, previousEndDate] = getPreviousDateRange()
  var total = 0
  setDateRange(startDate, endDate)
  total = sheet.getRange('D5').getValues()[0];
  setDateRange(previousStartDate, previousEndDate)
  return total
}

function addTransaction(data) {
  const { id, currentDate, firstDayDate } = getFormattedDates();
  const spendSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("BaseGasto");
  spendSheet.appendRow([id, currentDate, firstDayDate, data.transactionType, data.description, data.price, data.dueDate]);
}

function getFormattedDates() {
  const id = Date.now()
  const now = new Date(id);
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const formatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const formatter = new Intl.DateTimeFormat('pt-BR', formatOptions);

  const currentDate = formatter.format(now);
  const firstDayDate = formatter.format(firstDayOfMonth);

  return {
    id,
    currentDate,
    firstDayDate
  };
}

function fetchTableData() {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("BaseGasto");
  const [headers, ...data] = sheet.getDataRange().getValues();
  
  return data.map(row => {
    const rowData = {};
    headers.forEach((header, index) => {
      rowData[header] = row[index];
    });
    return rowData;
  });
}