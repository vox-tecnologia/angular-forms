import { Group, GroupType } from '.';
import { Question } from '../question';

export class Fieldset extends Group<Question<any>[]> {

  public constructor(
    code: string,
    title: string,
    questions: Question<any>[],
    description: string,
  ) {
    super(code, title, GroupType.FIELDSET, questions, description);
  }

  public getQuestionByName(name: string): Question<any> {
    for (const question of this._questions) {
      if (question.name === name) {
        return question;
      }
    }
  }
}
