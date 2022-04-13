import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { collectionsNames } from 'configurations/configurations.configs';
import { ClassModel } from 'general/model';

@Schema({ collection: collectionsNames.users })
export class UserModel extends ClassModel {
  @Prop({ type: String }) firstname: string;

  @Prop({ type: String }) lastname: string;

  @Prop({ type: String }) description: string;

  @Prop({ type: String }) phoneNumber: string;

  @Prop({ type: String }) profilePicture: string;

  @Prop({ type: Boolean }) isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

export const userModelDefinition: ModelDefinition = { name: UserModel.name, schema: UserSchema };
