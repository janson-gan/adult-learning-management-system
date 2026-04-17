// import {
//   Column,
//   DataType,
//   Default,
//   PrimaryKey,
//   Table,
//   Unique,
//   Model
// } from 'sequelize-typescript';
// import { CreationOptional } from 'sequelize';

// @Table({
//   tableName: 'students',
//   timestamps: true,
// })
// export class Student extends Model<Student> {
//   @PrimaryKey
//   @Default(DataType.UUID)
//   @Column({
//     type: DataType.UUID,
//     allowNull: false,
//   })
//   declare student_id: CreationOptional<string>;

//   @Column({
//     allowNull: false,
//     type: DataType.STRING,
//   })
//   declare name: string;

//   @Unique
//   @Column({
//     allowNull: false,
//     type: DataType.STRING,
//   })
//   declare email: string;

//   @Column(DataType.STRING)
//   declare phone: string;
// }

import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Col,
} from '@sequelize/core';
import {
  Attribute,
  PrimaryKey,
  AutoIncrement,
  NotNull,
  AllowNull,
  Default,
  Unique,
} from '@sequelize/core/decorators-legacy';
import { v4 as uuidV4 } from 'uuid';

export class Student extends Model<
  InferAttributes<Student>,
  InferCreationAttributes<Student>
> {
  @Attribute(DataTypes.UUID)
  @PrimaryKey
  @NotNull
  @Default(() => uuidV4)
  declare student_id: CreationOptional<string>;

  @Attribute(DataTypes.STRING)
  @NotNull
  declare name: string;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  declare email: string;

  @Attribute(DataTypes.STRING)
  @AllowNull
  declare phone: string;

  @Attribute(DataTypes.DATE)
  @Default(DataTypes.NOW)
  declare created_at: CreationOptional<Date>;

  @Attribute(DataTypes.DATE)
  @Default(DataTypes.NOW)
  declare updated_at: CreationOptional<Date>;
}
