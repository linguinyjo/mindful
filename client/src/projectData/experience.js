import Baby from '../art/smallbaby.png'
import Monk from '../art/meditating_monk_burned.png'
import Childplaying from '../art/childplaying.png'
import Meditatingman from '../art/meditatingman.png'
import MasterBuddha from '../art/masterbuddha_burned.png'
import CalmGuy from '../art/calm_guy_meditating.png'
import BuddhistMonk from '../art/Buddhist_Monk.png'


const Data = {
  0: [[0, 3], {rank: 1},"Little, tiny cry baby", '"...what a fool"', {req: 4}, Baby, {width: "100%", height: "auto", marginTop: "15px"}],
  1: [[4, 9], {rank: 2}, "Distracted child", '"You still have much to learn in the ways of meditation young one"', {req: 6}, Childplaying, {width: "31%", height: "auto", marginTop: "15px"} ],
  2: [[10, 18], {rank: 3}, "Arrogant guy", '"Careful, arrogance is not your path foolish one"', {req: 9}, Meditatingman, {width: "60%", height: "auto", marginTop: "15px"}],
  3: [[19, 30], {rank: 4}, "CalmGuy", '"You are still troubled by your thoughts; look a little closer"', {req: 12}, CalmGuy, {width: "60%", height: "auto", marginTop: "15px"}],  
  4: [[31, 50], {rank: 5}, "Young monk", '"Your mind grows stronger yet, little Monk, but your path does not end here"', {req: 20}, Monk, {width: "37%", height: "auto", marginTop: "15px"}],
  5: [[51, 80], {rank: 6}, "Middle Monk", '"You are wise beyond your years, but meditation always has more to teach"', {req: 30}, BuddhistMonk, {width: "55%", height: "auto", marginTop: "15px"}],
  6: [[81, 10120], {rank: 7}, "The Buddha", '"Please teach me about the art, Master"', {req: 999999}, MasterBuddha, {width: "55%", height: "auto", marginTop: "15px"}]
}
  

export default Data


//You still have much to learn in the ways of meditation young one
//You are still troubled by your thoughts; look a little closer
//The path to enlightenment draws ever closer
//Nothing worthwhile is ever easy child
//You are still troubled by your thoughts; look a little closer