'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SchoolSchema = new Schema({
    name: String,
    logo: String,
    bgImage: String,
    address: String,
    description: String,
    score_req: [String],
    tuition_fee : {
        intl_undergraduate: String,
        intl_postgraduate: String,
        dom_undergraduate: String,
        dom_postgraduate: String
    },
    room_board: String,
    total_students: Number,
    intl_students: Number,
    female_male_ratio: String,
    student_fac_ratio: String,
    campus_type: String,
    rankings : {
        the: Number,
        forbes: Number,
        usnews: Number,
        arwu: Number,
        qs: Number
    },
    programs: [String],
    map: ""
});

// database name, name of schema
module.exports = mongoose.model('Schools', SchoolSchema);