import { Response } from 'express';

export class ResponseCommon<T> {
  async response(entity: T | T[], res: Response, msg: string) {
    res.json({
      msg: msg,
      data: entity,
    });
  }
}
