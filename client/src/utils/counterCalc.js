//converts dd/mm/yyyy to mm/dd/yyyy
function stringToDate(dateString) {
  let dateArray = dateString.split('/')
  let tempDay = dateArray[0];
  dateArray[0] = dateArray[1];
  dateArray[1] = tempDay;
  return dateArray.join('/')
}

const calcCounter = (dates) => {
  let counter = 1
  let tempDate, nextDate, timeDiff
  dates.forEach(date => {
    nextDate = new Date(stringToDate(date)).getTime()

    if(tempDate == undefined){
      tempDate = new Date(stringToDate(date))
    }
    
    timeDiff = (nextDate - tempDate) / (1000 * 3600 * 24) 
    
    if(timeDiff <= 1) {
      counter = counter + 1
      tempDate = nextDate
    } 
    
    if(timeDiff > 1){
      counter = 1
      tempDate = nextDate
    }   
  })
  return counter
}

export default calcCounter





















