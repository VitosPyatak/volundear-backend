import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, SchemaTypes } from 'mongoose';
import { collectionsNames } from 'configurations/configurations.configs';
import { UserModel } from 'user/user.schema';
import { VolunteerRequestStatus } from 'user/user.types';

@Schema({ collection: collectionsNames.volunteerRequests })
export class VolunteerRequestModel {
  @Prop({ type: String }) title: string;

  @Prop({ type: String }) description: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: UserModel.name }) owner: ObjectId | UserModel;

  @Prop({ type: String, enum: Object.values(VolunteerRequestStatus) }) status: VolunteerRequestStatus;

  // TODO: create categories enum
  @Prop({ type: String }) category: string;

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: UserModel.name }] }) assingees: ObjectId | UserModel;
}

export const VolunteerRequestSchema = SchemaFactory.createForClass(VolunteerRequestModel);

export const volunteerRequestModelDefinition: ModelDefinition = { name: VolunteerRequestModel.name, schema: VolunteerRequestSchema };
