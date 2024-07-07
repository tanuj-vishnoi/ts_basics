function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
  }

console.log(costOfMonitors(5,4))
  
  