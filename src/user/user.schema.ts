import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { collectionsNames } from 'configurations/configurations.configs';
import { ClassModel } from 'general/model';
import { defaultSchemaOptions } from 'utils/schemaOptions';

@Schema(defaultSchemaOptions(collectionsNames.users))
export class UserModel extends ClassModel {
  @Prop({ type: String }) firstname: string;

  @Prop({ type: String }) lastname: string;

  @Prop({ type: String }) description: string;

  @Prop({ type: String, required: true }) phoneNumber: string;

  @Prop({ type: String }) profilePicture: string;

  @Prop({ type: Boolean, default: false }) isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

export const userModelDefinition: ModelDefinition = { name: UserModel.name, schema: UserSchema };
