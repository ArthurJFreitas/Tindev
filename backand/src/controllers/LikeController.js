const Dev = require('../models/Dev');

module.exports = {
   async store(req, res){

        const { devId } = req.params;
        const { user } = req.headers
     
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if(!targetDev){
            return res.status(400).json({Erro: "Dev not exists"});
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        console.log('Deu match')

        return res.json(loggedDev)
    }
};