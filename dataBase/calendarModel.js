let CalendarSchema = mongoose.Schema({
  name : [String]
});

let Calendar = mongoose.model('Calendar', CalendarSchema);
// module.exports = {
// 	save : (name, Calendar) => {