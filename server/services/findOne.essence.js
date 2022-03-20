const findOneEssence = async (model, param) => {
  await model.findOne({
    where: {
      param,
    },
  });
};

module.exports = findOneEssence;
