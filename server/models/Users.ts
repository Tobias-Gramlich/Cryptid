import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from ".";

interface UserAttributes {
    id: string;
    username: string;
    password: string;
    email: string;
}

interface UserCreationAttributes
    extends Optional<UserAttributes, 'id'> {}

interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes {
            createdAt?: Date;
            updatedAt?: Date;
        }

const User = sequelize.define<UserInstance>(
    'Users',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true
        },
        username: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        password: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        email: {
            allowNull: false,
            type: DataTypes.TEXT
        }
    }
)

//TODO: Relations

export default User;