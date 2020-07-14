const fs = require('fs');

var Create = function() {
  function listMajors(auth) {
    var sheets = google.sheets("v4");
    var SPREADSHEET_ID = "************";
    var range = "**********";
    var requestInsert = {
      auth: auth,
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: "RAW",
      resource: {
        range: range,
        majorDimension: "ROWS",
        values: [["name", "list"]],
      },
    };
    sheets.spreadsheets.values.update(requestInsert, function(err, response) {
      if (err) {
        throw err;
      }
      console.log(response, " record Inserted.");
    });
  }
  // Load client secrets from a local file.
  fs.readFile('./credentials.json', function processClientSecrets(
    err,
    content
  ) {
    if (err) {
      console.log("Error loading client secret file: " + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Sheets API.
    authorize(JSON.parse(content), listMajors);
  });
};
// TODO: create operation
Create();

var Read = function() {
  function listMajors(auth) {
    var sheets = google.sheets("v4");
    var SPREADSHEET_ID = "************";
    var range = "**********";
    var request = {
      auth: auth,
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    };
    //To get all rows form spreadsheet
    sheets.spreadsheets.values.get(request, function(err, response) {
      if (err) {
        throw err;
      }
      console.log(response, " records.");
    });
  }
  // Load client secrets from a local file.
  fs.readFile('./credentials.json', function processClientSecrets(
    err,
    content
  ) {
    if (err) {
      console.log("Error loading client secret file: " + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Sheets API.
    authorize(JSON.parse(content), listMajors);
  });
};
//TODO: read operation
Read();

var Delete = function() {
  // Print the names and majors of students in a sample spreadsheet:
  function listMajors(auth) {
    var sheets = google.sheets("v4");
    var SPREADSHEET_ID = "************";
    var range = "**********";
    var sheetId = "****";
    var deleteRequest = {
      auth: auth,
      spreadsheetId: process.env.SPREADSHEET_ID,
      resource: {
        requests: [
          {
            deleteDimension: {
              range: {
                sheetId: sheetId,
                dimension: "ROWS",
                startIndex: range,
                endIndex: range + 1,
              },
            },
          },
        ],
      },
    };
    sheets.spreadsheets.batchUpdate(deleteRequest, function(err, response) {
      if (err) {
        console.log(err);
      }
      console.log(response, "Deleted");
    });
  }
  // Load client secrets from a local file.
  fs.readFile('./credentials.json', function processClientSecrets(
    err,
    content
  ) {
    if (err) {
      console.log("Error loading client secret file: " + err);
      return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Google Sheets API.
    authorize(JSON.parse(content), listMajors);
  });
};
//TODO: Delete operation
Delete();
