const express = require('express');
const router = require('express').Router();
const rectCon = require('../controllers/rectifiers');
const validation = require('../middleware/validate');

/* ***************************
 * ROUTES TO HANDLE THE INFORMATION COLLECTION
 * **************************/
// GET RECTIFIER INFO
router.get('/info', rectCon.getAllRectifierInfo);
router.get('/info/:id', rectCon.getOneRectifierInfo);

// CREATE RECTIFIER INFO
router.post('/info', validation.saveRectifierInfoValidate, rectCon.createRectifierInfo);

// UPDATE RECTIFIER INFO
router.put('/info/:id', validation.saveRectifierInfoValidate, rectCon.updateRectifierInfo);

// DELETE RECTIFIER INFO
router.delete('/info/:id', rectCon.delecteRectifierInfo);

/* **************************
 * ROUTES TO HANDLE THE INSPECTION COLLECTION
 * *************************/
// GET RECTIFIER INSPECTION
router.get('/inspect', rectCon.getAllRectifierInspections);
router.get('/inspect/:id', rectCon.getOneRectifierInspection);

// CREATE RECTIFIER INSPECTION
router.post('/inspect', validation.saveRectifierInspecValidate, rectCon.createRectifierInspection);

// UPDATE RECTIFIER INSPECTION
router.put('/inspect/:id', validation.saveRectifierInspecValidate, rectCon.updateRectifierInspection);

// DELETE RECTIFIER INSPECTION
router.delete('/inspect/:id', rectCon.deleteRectifierInspection);

module.exports = router;