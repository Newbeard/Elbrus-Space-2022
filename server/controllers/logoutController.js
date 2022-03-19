const logoutController = async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_id');
  res.status(200).end();
};

module.exports = { logoutController };
