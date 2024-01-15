final List<String> formato = [
  'CSV',
  'XLS',
  'XLSX',
];

int getValue(String value) {
  return formato.indexOf(value);
}