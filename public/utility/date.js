function stringToDate(raw)
{
  var rawMonth = raw.substring(0, raw.indexOf(" "));
  var month = -1;
  var day = raw.substring(raw.indexOf(" ")+1, raw.indexOf(","));
  var year = raw.substring(raw.indexOf(",")+1, raw.indexOf("("));

  if(rawMonth == "January") {
    month = 1;
  }
  if(rawMonth == "Feburary") {
    month = 2;
  }
  if(rawMonth == "March") {
    month = 3;
  }
  if(rawMonth == "April") {
    month = 4;
  }
  if(rawMonth == "May") {
    month = 5;
  }
  if(rawMonth == "June") {
    month = 6;
  }
  if(rawMonth == "July") {
    month = 7;
  }
  if(rawMonth == "August") {
    month = 8;
  }
  if(rawMonth == "September") {
    month = 9;
  }
  if(rawMonth == "October") {
    month = 10;
  }
  if(rawMonth == "November") {
    month = 11;
  }
  if(rawMonth == "December") {
    month = 12;
  }

  var result = new Date(year,month-1,day, 1, 1, 1, 1);

  return result;
}
