//converts dd/mm/yyyy to mm/dd/yyyy
function stringToDate(dateString) {
  let dateArray = dateString.split('/')
  let tempDay = dateArray[0];
  dateArray[0] = dateArray[1];
  dateArray[1] = tempDay;
  return dateArray.join('/')
}

export const dateOfToday = () => {
  const date = new Date();
  let dd = date.getDate();
  let mm = date.getMonth() + 1;
  let yy = date.getFullYear();
  
  if (dd < 10) {
      dd = "0" + dd;
  }
  if (mm < 10) {
      mm = "0" + mm;
  }
  let today = dd + '/' + mm + '/' + yy;
  return today;
};

export const calcCounter = (dates) => {
  let counter = 0
  if(!dates.length) {
    return counter
  }
  let tempDate, nextDate, timeDiff
  dates.forEach(date => {
    nextDate = new Date(stringToDate(date)).getTime()

    if(tempDate === undefined){
      tempDate = new Date(stringToDate(date))
      return counter++
    }
  
    timeDiff = (nextDate - tempDate) / (1000 * 3600 * 24) 
    
    if(timeDiff === 0) {
      return counter
    }

    if(timeDiff === 1) {
      counter++
      tempDate = nextDate
      return counter 
    } 
    
    if(timeDiff > 1){
      counter = 1
      tempDate = nextDate
      return counter 
    }   
  })
  return counter
}




















