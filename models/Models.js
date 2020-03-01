const mongoose = require('mongoose');

module.exports = mongoose.model('gerund', require('./CommonPatternOfModel'));
module.exports = mongoose.model('infinitive', require('./CommonPatternOfModel'));
module.exports = mongoose.model('irregular', require('./CommonPatternOfModel'));
module.exports = mongoose.model('phrase', require('./CommonPatternOfModel'));
module.exports = mongoose.model('separable', require('./CommonPatternOfModel'));
module.exports = mongoose.model('stative', require('./CommonPatternOfModel'));
module.exports = mongoose.model('vocabulary', require('./CommonPatternOfModel'));