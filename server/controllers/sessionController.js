const sessionController = async (req, res) => {
  try {
    if (req.session.user) {
      res.json({ session: true });
    } else {
      res.json({ session: false });
    }
  } catch (err) {
    console.log(err.message);
    res.status(401).end();
  }
};

module.exports = { sessionController };
