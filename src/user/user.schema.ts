import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Transform } from 'class-transformer';
import { collectionsNames } from 'configurations/configurations.configs';
import { ClassModel } from 'general/model';

@Schema({ collection: collectionsNames.users })
export class UserModel extends ClassModel {
  @Prop() firstname: string;

  @Prop() lastname: string;

  @Prop() description: string;

  @Prop() phoneNumber: string;

  @Prop() profilePicture: string;

  @Prop() isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

export const userModelDefinition: ModelDefinition = { name: UserModel.name, schema: UserSchema };
