const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('gender', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      //autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
};

// Genero con las siguientes propiedades:
// ID
// Nombre