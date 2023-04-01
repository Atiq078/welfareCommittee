module.exports = (sequelize, Sequelize) => {
  //const User = sequelize.define("users", {
    const User = sequelize.define("candidate", {
    name: {
      type: Sequelize.STRING
    },
    hidden: {
      type: Sequelize.STRING
    },
    inactive: {
      type: Sequelize.STRING
    },
    mode: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    bankdetails: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
