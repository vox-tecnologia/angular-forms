import { GroupType } from '.';
import { Question } from '../question';

export abstract class Group<QuestionListType> {

  public constructor(
    protected _code: string,
    protected _title: string,
    protected _type: GroupType,
    protected _questions: QuestionListType,
    protected _description: string
  ) { }

  public get code(): string {
    return this._code;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get type(): GroupType {
    return this._type;
  }

  public get questions(): QuestionListType {
    return this._questions;
  }

  public abstract getQuestionByName(name: string): Question<any>;
}
