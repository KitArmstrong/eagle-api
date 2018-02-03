 module.exports = require ('../models')('Application', {
    _addedBy         : { type:'ObjectId', ref:'User', default:null },
    _proponent       : { type:'ObjectId', ref:'Organization', default:null },
    code             : { type: String, trim: true, default: ''},
    name             : { type: String, trim: true },
    // Note: Default on tag property is purely for display only, they have no real effect on the model
    // This must be done in the code.
    tags             : [[{ type: String, trim: true, default: '[["sysadmin"]]' }]],
    type             : { type: String },
    subtype          : { type: String },
    purpose          : { type: String },
    subpurpose       : { type: String },
    status           : { type: String },
    region           : { type: String },
    location         : { type: String, default: '' },
    latitude         : { type: Number, default: 0.00 },
    longitude        : { type: Number, default: 0.00 },
    areaHectares     : { type: Number, default: 0.00 },
    projectDate      : { type: Date, default: Date.now },
    businessUnit     : { type: String },
    legalDescription : { type: String },
    agency           : { type:String, default: '' },
    cl_files         : [{ type:Number, default: 0 }],
    mapsheet         : { type:String, default: '' },
    description      : { type:String, default: '' },
    tantalisID       : { type:Number, default: 0 },
    stageCode        : { type:String, default: '' },
    internalID       : { type:Number, default: 0 },
    interestID       : { type:Number, default: 0 },
    postID           : { type:Number, default: 0 }
});
