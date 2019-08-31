import Data from '../data/experience'

export default function(exp){
  let min, max, currentXp, neededXp, percentage
  
  for(let each in Object.values(Data)){
    min = Data[each][0][0] 
    max = Data[each][0][1]
    
    if(exp >= min && exp <= max) { 
      currentXp =  exp - min
      neededXp = Data[each][4]['req']
      percentage= currentXp / neededXp * 100
      
      return {
        rank: Data[each][1]['rank'],
        title: Data[each][2],
        quote: Data[each][3],
        neededXp,
        currentXp,
        image: Data[each][5],
        style: Data[each][6],
        percentage      
      }
    }       
  }
}
      
