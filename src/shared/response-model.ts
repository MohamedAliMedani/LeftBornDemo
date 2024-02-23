import { ResponseStatus } from './enums/response-status';

export interface ResponseModel {
  result: object | null;
  pageIndex: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  message: string;
  statusEnum: ResponseStatus;
}
