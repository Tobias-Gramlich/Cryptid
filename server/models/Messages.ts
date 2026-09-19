import { DataTypes, Model, type Sequelize, type Optional } from 'sequelize';
const {sequelize}: {sequelize: Sequelize} = require('.') ;

interface MessageAttributes {
    id: string;
    senderid: string;
    content: string;
    sendat: Date;
}

interface MessageCreationAttributes 
    extends Optional<MessageAttributes, 'id'> {}

interface MessageInstance
    extends Model<MessageAttributes, MessageCreationAttributes>,
        MessageAttributes {
            createdAt?: Date;
            updatedAt?: Date;
        }

const Message = sequelize.define<MessageInstance>(
    'Messages',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true
        },
        senderid: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        content: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        sendat: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }
)

//TODO: Relations

export default Message