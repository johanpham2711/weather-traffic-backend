import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ITrafficImagesWithName } from 'src/interfaces';

@Table({
  tableName: 'report',
  underscored: true,
})
export class Report extends Model {
  @Column
  time: Date;

  @Column({
    allowNull: false,
    type: DataType.JSONB,
  })
  location: ITrafficImagesWithName;
}
