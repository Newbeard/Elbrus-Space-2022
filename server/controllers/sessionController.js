const sessionController = async (req, res) => {
  try {
    if (req.session.user) {
      res.json({ id: req.session.user.id });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.log(err.message);
    res.status(401).end();
  }
};

module.exports = { sessionController };
