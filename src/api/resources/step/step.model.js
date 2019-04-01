import Sequelize from 'sequelize';
import { connect } from '../../../db';

const schema = {
    step_id: Sequelize.UUID,
    photo_id: Sequelize.UUID,
    description: Sequelize.STRING,
};

const Step = connect().sequelize.define('step', schema, {
    underscored: true,
    freezeTableName: true,
});

export default Step;