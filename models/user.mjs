import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";

class User extends Model { }

User.init(
  {
    wantedJobTitle: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    phone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    country: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    postalCode: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    drivingLicense: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    nationality: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    placeOfBirth: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    workingExperience: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    photoUrl: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);
export default User;
