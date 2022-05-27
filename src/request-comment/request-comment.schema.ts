import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { collectionsNames } from 'configurations/configurations.configs';
import { ClassModel } from 'general/model';
import { ObjectId, SchemaTypes } from 'mongoose';
import { UserModel } from 'user/user.schema';
import { defaultSchemaOptions } from 'utils/schemaOptions';
import { VolunteerRequestModel } from 'volunteer-request/volunteer-request.schema';

@Schema(defaultSchemaOptions(collectionsNames.comments))
export class RequestCommentModel extends ClassModel {
  @Prop({ type: String, required: true }) text: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: UserModel.name }) sender: ObjectId | UserModel | string;

  @Prop({ type: SchemaTypes.ObjectId, ref: VolunteerRequestModel.name }) request: ObjectId | VolunteerRequestModel | string;
}

export const RequestCommentSchema = SchemaFactory.createForClass(RequestCommentModel);

export const requestCommentModelDefinition: ModelDefinition = { name: RequestCommentModel.name, schema: RequestCommentSchema };
