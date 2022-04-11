import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserModel {
  @Prop() firstname: string;

  @Prop() lastname: string;

  @Prop() description: string;

  @Prop() phoneNumber: string;

  @Prop() isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);

export const userModelDefinition: ModelDefinition = { name: UserModel.name, schema: UserModel };
