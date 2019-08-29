const passport = require('passport')

module.exports = app => {

  app.post('/api/add_session', async (req, res) => {  
    req.user.experience += 1
    let obj = {}
    for(let key in req.body) {
       obj[key] = req.body[key]
    }
    req.user.session.push(obj)
    const user = await req.user.save()
    res.send(user)
    
  })
}
