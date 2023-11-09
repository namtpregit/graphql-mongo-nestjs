import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = User & Document;

@ObjectType()
@Schema()
@InputType({ isAbstract: true })
export class User {
  @Prop({ required: false })
  @Field()
  _id: string;

  @Prop({ required: true })
  @Field()
  name: string;

  @Prop({ required: true })
  @Field()
  description: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
