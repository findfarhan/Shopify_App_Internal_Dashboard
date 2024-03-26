export enum EnumHttpStatusCodes {
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum EnumUserType {
  ADMIN = 'admin',
  CLIENT = 'client',
}

export enum EnumAPIResponseStatusType {
  SUCCESS = 'success',
  ERROR = 'client',
}

export enum EnumCompetitionRunningStatus {
  NOT_STARTED = 'not_started',
  CONTINUED = 'continued',
  COMPLETED = 'compelted',
}

export enum EnumTicketBuyType {
  DIRECT_BUY = 'direct_buy',
  TRANSFERED = 'transfered',
}

export enum EnumCompetitionRoomType {
  A = 'a',
  B = 'b',
}

export enum EnumCompetitionRoomCategory {
  Category1 = 'category1',
  Category2 = 'category2',
  Category3 = 'category3',
}
