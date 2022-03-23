const {
  User,
  City,
  Country,
  Campus,
} = require('../db/models');

const initStudent = async (req, res) => {
  console.log(123);
  try {
    const { id } = req.body;
    const student = await User.findOne({
      where: {
        id,
      },
      raw: true,
      include: [{
        model: City,
        attributes: ['cityName'],
      },
      {
        model: Country,
        attributes: ['countryName'],
      },
      {
        model: Campus,
        attributes: ['campusName'],
      },
      {
        model: City,
        as: 'currentCit',
        attributes: ['cityName'],
      },
      {
        model: Country,
        as: 'currentCou',
        attributes: ['countryName'],
      },
      ],

    });
    console.log(student);
    res.json({
      student,
    });
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

module.exports = {
  initStudent,
};
