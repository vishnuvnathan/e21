const express = require('express');
const pool = require('../config/db');
const Vote = require('../models/Vote');
const voteRoutes = express.Router();
const hash = require('object-hash');
const requestIp = require('request-ip');
const csrf = require('csurf')
const csrfProtection = csrf({  cookie: {
    key: 'H#^$*D&E&*F@HF',
    httpOnly: true,
    maxAge: 90 // 1-hour
} })



voteRoutes.get('/csrf', csrfProtection, function (req, res) {
    
    res.status(200).json({ csrfToken: req.csrfToken() });
})

voteRoutes.post("/add_vote",csrfProtection ,async (req,res) => {

    let {voter_id,party_id,alliance_id,constituency_id,
        candidate_name,datetime,browser_name,os_name,os_version,
        device_platform,voter_ip} = req.body;


        console.log(req.body);

    let voter_uid = hash({
        voter_id:voter_id,
        ip:voter_ip
    })

    try {
		pool.query(Vote.addVote(),[voter_uid,party_id,alliance_id,constituency_id,
            candidate_name,datetime,browser_name,os_name,os_version,
            device_platform,voter_ip]).then((response)=>{
                res.status(200).json({type:'success'})
            });
	} catch (err) {
		console.log(err);
	}
    
})
module.exports =  voteRoutes;