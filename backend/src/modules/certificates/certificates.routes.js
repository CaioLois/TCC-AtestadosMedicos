const express = require('express');
const router = express.Router();

// Middleware de autenticação
const { authenticate } = require('../auth/auth.middleware');

// Controller
const {
  createCertificate,
  getUserCertificates
} = require('./certificates.controller');

// Upload (multer)
const { upload } = require('./certificates.service');

// Todas as rotas abaixo exigem usuário autenticado
router.use(authenticate);

// POST /certificates
// Envia um novo atestado com arquivo
router.post(
  '/',
  (req, res, next) => {
    upload.single('file')(req, res, function (err) {

      // Tratamento de erro do multer
      if (err) {
        return res.status(400).json({
          error: err.message
        });
      }

      next();
    });
  },
  createCertificate
);

// GET /certificates
// Lista os atestados do usuário logado
router.get(
  '/',
  getUserCertificates
);

module.exports = router;