import { Group, GroupType } from '.';
import { Question } from '../question';
import { Pattern, Validation, ValidationType } from '../validation';

export class DataTable extends Group<Question<any>[][]> {

  public constructor(
    code: string,
    title: string,
    questions: Question<any>[][],
    private _validations: Validation[] = [],
    description: string
  ) {
    super(code, title, GroupType.DATATABLE, questions, description);
  }

  public getQuestionByName(name: string): Question<any> {
    for (const question of this._questions[0]) {
      if (question.name === name) {
        return question;
      }
    }
  }

  public isRequired(): boolean {
    for (const validation of this._validations) {
      if (ValidationType.REQUIRED === validation.type) {
        return true;
      }
    }

    return false;
  }

  public get validations(): Validation[] {
    return this._validations;
  }
}
