const sessionController = async (req, res) => {
  try {
    if (req.session.user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.log(err.message);
    res.status(401).end();
  }
};

module.exports = { sessionController };
