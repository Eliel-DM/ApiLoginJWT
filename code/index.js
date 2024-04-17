const express = require('express');
const server = express();

server.use(express.json());



const usuarios = [
    { id: 1, usuario: 'teste@gmail.com', senha: 'sourica2023' },
    { id: 2, usuario: 'teste123', senha: 'careca10' },
];

server.post('/auth', (req, res) => {
    const  {usuario,senha} = req.body;
    const usuarioCadastrado = usuarios.find(u => u.usuario === usuario);
    if (!usuarioCadastrado) {
        return res.json({message:'Usuário não cadastrado!'});

    } else {
        const usuarioAutenticado = usuarios.find(u => u.senha === senha);
        if(usuarioAutenticado){
            return res.json({massage:'Login feito com sucesso'});
        }else{
            return res.json({massage:'Senha incorreta'});
        }
    }


 });

 



server.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
