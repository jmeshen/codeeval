function printMultiplicationTables() {
  // 12x12 table
  // create a multidimensional array
  // if idx === 11, add '\n' else add '   '
  // approach: create first row, each row will be an array
  // add a value to each column
  var max = 12;
  var space = ' ';
  var table = [];
  var spacedTable = '';
  var row = [];

  for (var i = 1; i <= max; i++) {
    row.push(i);
    if (row.length === 12) {
      table.push(row);
      row = [];
    }
  }

  for (var j = 2; j <= max; j++) {
    table[0].forEach(function(num) {
      row.push(j * num)
    })
    table.push(row)
    row = [];
  }
  // kinda yucky..
  table.forEach(function(line) {
    for (var k = 0; k < line.length; k++) {
      if (line.indexOf(line[k]) === line.length - 1) {
        spacedTable += line[k] + '\n';
      } else {
        if (k === 0 && String(line[k]).length === 2) {
          spacedTable += line[k] + space;
        }
        else if (String(line[k].length === 1)) {
          spacedTable += line[k] + space.repeat(4 - String(line[k+1]).length);
        } else {
          spacedTable += line[k] + space.repeat(4 - String(line[k+1]).length);
        }
      }
    }
  })
  console.log(spacedTable)
}

printMultiplicationTables()