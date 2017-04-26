/**
 * Get Home Page
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('pages/index', {
    title: 'Finance Bot'
  });
};