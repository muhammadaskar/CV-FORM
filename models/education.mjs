import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";
class Education extends Model { }
Education.init({
  profile_code: DataTypes.INTEGER,
  school: DataTypes.STRING,
  degree: DataTypes.STRING,
  startDate: DataTypes.STRING,
  endDate: DataTypes.STRING,
  city: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Education',
});

export default Education