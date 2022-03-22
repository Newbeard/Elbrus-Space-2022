const {
  User,
  City,
  Country,
  Campus,
} = require('../db/models');

const initProfile = async (req, res) => {
  try {
    const {
      id,
    } = req.session.user;
    const user = await User.findOne({
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
    console.log(user);
    res.json({
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(401)
      .json({
        message: error.message,
      }).end();
  }
};

const editProfile = async (req, res) => {
  const {
    id,
  } = req.session.user;
  const data = req.body;
  console.log(req.body);
  const {
    name,
    surName,
    telegram,
    github,
    countryName,
    cityName,
    campusName,
    currentCountryName,
    currentCityName,
    dateOfBirth,
    yearFinishDate,
    monthFinishDate,
  } = data;

  try {
    const country = await Country.findOne({
      where: {
        countryName,
      },
    });
    const city = await City.findOne({
      where: {
        cityName,
      },
    });
    let campus = {
      id: null,
    };
    let currentCountry = {
      id: null,
    };
    let currentCity = {
      id: null,
    };

    if (campusName && campusName !== 'Кампус') {
      campus = await Campus.findOne({
        where: {
          campusName,
        },
      });
    }
    if (currentCountryName) {
      currentCountry = await Country.findOne({
        where: {
          countryName: currentCountryName,
        },
      });
      if (currentCityName) {
        currentCity = await City.findOne({
          where: {
            cityName: currentCityName,
          },
        });
      }
      if (currentCountry === null) {
        currentCountry = await Country.create({
          countryName: currentCountryName,
        });
        if (currentCityName) {
          currentCity = await City.create({
            cityName: currentCityName,
            countrysId: currentCountry.id,
          });
        }
        if (!country) {
          const newCountry = await Country.create({
            countryName,
          });
          const newCity = await City.create({
            cityName,
            countrysId: newCountry.id,
          });
          await User.update({
            name,
            surName,
            telegram,
            github,
            countryId: newCountry.id,
            cityId: newCity.id,
            campusId: campus.id,
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          }, {
            where: {
              id,
            },
          });
        } else if (!city) {
          const newCity = await City.create({
            cityName,
            countrysId: country.id,
          });
          await User.update({
            name,
            surName,
            countryId: country.id,
            cityId: newCity.id,
            campusId: campus.id,
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          }, {
            where: {
              id,
            },
          });
        } else {
          await User.update({
            name,
            surName,
            countryId: country.id,
            cityId: city.id,
            campusId: campus.id,
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          }, {
            where: {
              id,
            },
          });
        }
      } else if (currentCity === null) {
        if (currentCityName) {
          currentCity = await City.create({
            cityName: currentCityName,
            countrysId: currentCountry.id,
          });
        }
        if (!country) {
          const newCountry = await Country.create({
            countryName,
          });
          const newCity = await City.create({
            cityName,
            countrysId: newCountry.id,
          });
          await User.update({
            name,
            surName,
            countryId: newCountry.id,
            cityId: newCity.id,
            campusId: campus.id,
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          }, {
            where: {
              id,
            },
          });
        } else if (!city) {
          const newCity = await City.create({
            cityName,
            countrysId: country.id,
          });
          await User.update({
            name,
            surName,
            countryId: country.id,
            cityId: newCity.id,
            campusId: campus.id,
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          }, {
            where: {
              id,
            },
          });
        } else {
          await User.update({
            name,
            surName,
            countryId: country.id,
            cityId: city.id,
            campusId: campus.id,
            currentCountryId: currentCountry.id,
            currentCityId: currentCity.id,
            telegram,
            github,
            dateOfBirth,
            yearFinishDate,
            monthFinishDate,
          }, {
            where: {
              id,
            },
          });
        }
      }
    } else if (!country) {
      const newCountry = await Country.create({
        countryName,
      });
      const newCity = await City.create({
        cityName,
        countrysId: newCountry.id,
      });
      await User.update({
        name,
        surName,
        countryId: newCountry.id,
        cityId: newCity.id,
        campusId: campus.id,
        currentCountryId: currentCountry.id,
        currentCityId: currentCity.id,
        telegram,
        github,
        dateOfBirth,
        yearFinishDate,
        monthFinishDate,
      }, {
        where: {
          id,
        },
      });
    } else if (!city) {
      const newCity = await City.create({
        cityName,
        countrysId: country.id,
      });
      await User.update({
        name,
        surName,
        countryId: country.id,
        cityId: newCity.id,
        campusId: campus.id,
        currentCountryId: currentCountry.id,
        currentCityId: currentCity.id,
        telegram,
        github,
        dateOfBirth,
        yearFinishDate,
        monthFinishDate,
      }, {
        where: {
          id,
        },
      });
    } else {
      await User.update({
        name,
        surName,
        countryId: country.id,
        cityId: city.id,
        campusId: campus.id,
        currentCountryId: currentCountry.id,
        currentCityId: currentCity.id,
        telegram,
        github,
        dateOfBirth,
        yearFinishDate,
        monthFinishDate,
      }, {
        where: {
          id,
        },
      });
    }
    const result = await User.findOne({
      where: {
        id,
      },
    });
    const user = {
      name: result.name,
      surName: result.surName,
      countryId: result.countryId,
      cityId: result.cityId,
      campusId: result.campusId,
      currentCountryId: result.currentCountryId,
      currentCityId: result.currentCityId,
      telegram: result.telegram,
      github: result.github,
      dateOfBirth: result.dateOfBirth,
      yearFinishDate: result.yearFinishDate,
      monthFinishDate: result.monthFinishDate,
    };
    res.json({ user });
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports = {
  initProfile,
  editProfile,
};
