function setNewPayment(data) {
  const spendSheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("BaseGasto");
  spendSheet.appendRow(["1734721099591", "20/12/2024", "01/12/2024", "Boleto", "Conta de energia", "Debito", "R$ 550,00", "01/01/2025"]);
}