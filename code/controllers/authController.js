const Auth = require('../models/authModels');
//const bcrypt = require ('../utils/bcryptUtils');

async function postAuth(req, res){
    const  {usuario,senha} = req.body;

    const usuarioCadastrado = usuarios.find(u => u.usuario === usuario);
    if (!usuarioCadastrado) {
        return res.json({message:'Usuário não cadastrado!'});
    }
    try {
        const usuarioAutenticado = usuarios.find(u => u.senha === senha);
        return res.json({massage:'Login feito com sucesso'});
    }catch (error){
        return res.jason({msg:'Senha incorreta'})   
    }
}


module.exports = {postAuth};