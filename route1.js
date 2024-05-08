const express = require('express');
const router = express.Router();

const route1 = async (req,res)=>{
    return res.status(200).json({msg:'hey you..are in route 1'})
}

router.route('/').get(route1);
module.exports = router;

