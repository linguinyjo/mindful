import expData from '../data/experience'

export default function(exp){
  let min, max
  for(let each in Object.values(expData)){
    min = expData[each][0][0] 
    max = expData[each][0][1]
    if(exp >= min && exp <= max) { 
        return {
          rank: expData[each][1]['rank'],
          title: expData[each][2],
          quote: expData[each][3],
          neededXp: expData[each][4]['req'],
          currentXp: exp - min
          
        }
    }       
  }
}
      