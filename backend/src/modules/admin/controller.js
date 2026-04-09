const adminService = require('./service');

async function listarAtestados(req, res) {
    try{
        const atestados = await adminService.listarAtestados();
        return res.status(200).json(atestados);
    } catch (error) {
        console.error('Erro ao listar atestados:', error);
        return res.status(500).json({ error: 'Erro interno do servidor' });
    }
}

module.exports = {
    listarAtestados,
}