import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { collectionsNames } from 'configurations/configurations.configs';

@Schema({ collection: collectionsNames.users })
export class UserModel {
  @Prop() firstname: string;

  @Prop() lastname: string;

  @Prop() description: string;

  @Prop() phoneNumber: string;

  @Prop() profilePicture: string;

  @Prop() isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

export const userModelDefinition: ModelDefinition = { name: UserModel.name, schema: UserSchema };
