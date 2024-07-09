const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const OTP = sequelize.define("OTP", {
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    otp: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    generationTime: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: Math.floor(Date.now() / 1000), // Default value set to current timestamp in seconds
        get() {
            // Custom getter to convert stored timestamp (in seconds) to Date object
            const generationTimeSeconds = this.getDataValue('generationTime');
            return generationTimeSeconds ? new Date(generationTimeSeconds * 1000) : null;
        },
        set(value) {
            // Custom setter to store Date object as timestamp in seconds
            this.setDataValue('generationTime', Math.floor(value.getTime() / 1000));
        }
    }
}, {
    timestamps: false // Disable timestamps (createdAt and updatedAt columns)
});

module.exports = OTP;
