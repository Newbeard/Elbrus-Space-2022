const logoutController = async (req, res) => {
  res.clearCookie('user_id');
  req.session.destroy();
  res.status(200).end();
};

module.exports = { logoutController };
