var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var PageSchema = new mongoose.Schema({
   entry: String
});
PageSchema.plugin(mongoosePaginate);

mongoose.model("Page", PageSchema);
