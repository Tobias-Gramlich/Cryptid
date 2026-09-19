import { DataTypes, Model, type Sequelize, type Optional } from 'sequelize';
const {sequelize}: {sequelize: Sequelize} = require('.') ;

interface ChatAttributes {
    id: string;
    hostid: string;
    receiverid: string;
}

interface ChatCreationAttributes 
    extends Optional<ChatAttributes, 'id'> {}

interface ChatInstance
    extends Model<ChatAttributes, ChatCreationAttributes>,
        ChatAttributes {
            createdAt?: Date;
            updatedAt?: Date;
        }

const Chat = sequelize.define<ChatInstance>(
    'Chats',
    {
        id: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.UUID,
            unique: true
        },
        hostid: {
            allowNull: false,
            type: DataTypes.UUID
        },
        receiverid: {
            allowNull: false,
            type: DataTypes.UUID
        }
    }
)

//TODO: Relations

export default Chat