import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";
class Employement extends Model { }

Employement.init({
  profile_code: DataTypes.INTEGER,
  jobTitle: DataTypes.STRING,
  employer: DataTypes.STRING,
  startDate: DataTypes.STRING,
  endDate: DataTypes.STRING,
  city: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Employement',
});

export default Employement