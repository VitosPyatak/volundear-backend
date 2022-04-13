import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, SchemaTypes } from 'mongoose';
import { collectionsNames } from 'configurations/configurations.configs';
import { UserModel } from 'user/user.schema';
import { VolunteerRequestCategory, VolunteerRequestStatus } from 'user/user.types';
import { ClassModel } from 'general/model';

@Schema({ collection: collectionsNames.volunteerRequests })
export class VolunteerRequestModel extends ClassModel {
  @Prop({ type: String }) title: string;

  @Prop({ type: String }) description: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: UserModel.name }) owner: ObjectId | UserModel | string;

  @Prop({ type: String, enum: Object.values(VolunteerRequestStatus), default: VolunteerRequestStatus.active })
  status: VolunteerRequestStatus;

  @Prop({ type: String, enum: Object.values(VolunteerRequestCategory) }) category: VolunteerRequestCategory;

  @Prop({ type: [{ type: SchemaTypes.ObjectId, ref: UserModel.name }] }) assingees: (ObjectId | UserModel | string)[];
}

export const VolunteerRequestSchema = SchemaFactory.createForClass(VolunteerRequestModel);

export const volunteerRequestModelDefinition: ModelDefinition = { name: VolunteerRequestModel.name, schema: VolunteerRequestSchema };
