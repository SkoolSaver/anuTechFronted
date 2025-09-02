// models/Contact.js
import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize.js';

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobno: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'contacts',
  timestamps: false, // since you're using created_at manually
});

export default Contact;
