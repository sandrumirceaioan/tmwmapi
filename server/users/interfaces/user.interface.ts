import * as mongoose from 'mongoose';

export interface User extends mongoose.Document {
    firstName: string;
    lastName: string;
    userName: string;
    emailAddress: string;
    invitationCode: string;
    password: string;
    userType?: number;
    token?: string;
    team?: any
  }