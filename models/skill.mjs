import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.mjs";
class Skill extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}
Skill.init({
  profile_code: DataTypes.INTEGER,
  skill: DataTypes.STRING,
  level: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Skill',
});
export default Skill