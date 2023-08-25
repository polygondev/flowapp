const fs = require('fs');
const csv = require('csv-parser');

// Path to the GTFS data folder
const gtfsPath = './gtfs/';

// Path to the stops.txt file
const stopsFilePath = gtfsPath + 'stop_times.txt';

// Read and parse the stops.txt file
fs.createReadStream(stopsFilePath)
  .pipe(csv())
  .on('data', (row) => {
    // Process each row (stop information)
    console.log(row);
  })
  .on('end', () => {
    console.log('Parsing complete.');
  });
