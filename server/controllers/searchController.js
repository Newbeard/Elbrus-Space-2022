const {
  User,
  Campus,
  Country,
  City,
} = require('../db/models');

const searchController = async (req, res) => {
  try {
    const result = await User.findAll({
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
    const students = result.map((student) => student = {
      id: student.id,
      name: student.name,
      surName: student.surName,
      email: student.email,
      emailIsApproved: student.emailIsApproved,
      telegram: student.telegram,
      github: student.github,
      city: student['City.cityName'],
      country: student['Country.countryName'],
      campus: student['Campus.campusName'],
      currentCity: student['currentCit.cityName'],
      currentCountry: student['Country.countryName'],
      dateOfBirth: student.dateOfBirth,
      monthFinishDate: student.monthFinishDate,
      yearFinishDate: student.yearFinishDate,
    });
    res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

const filterController = async (req, res) => {
  try {
    const params = req.body;
    const arrayInclude = [];
    const objWhere = {};

    if (params.campusName) {
      arrayInclude.push({
        model: Campus,
        where: {
          campusName: params.campusName,
        },
      });
    }
    if (params.countryName) {
      arrayInclude.push({
        model: Country,
        as: 'currentCou',
        where: {
          countryName: params.countryName,
        },
      });
    }
    if (params.cityName) {
      arrayInclude.push({
        model: City,
        where: {
          cityName: params.cityName,
        },
      });
    }
    if (params.yearFinishDate) {
      objWhere.yearFinishDate = params.yearFinishDate;
    }
    if (params.monthFinishDate) {
      objWhere.monthFinishDate = params.monthFinishDate;
    }

    const students = await User.findAll({
      where: objWhere,
      include: arrayInclude,
      raw: true,
      order: [
        ['createdAt', 'ASC'],
      ],
    });

    res.json(students);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  searchController,
  filterController,
};
