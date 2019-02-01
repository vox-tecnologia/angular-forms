import { GroupBuilder } from '.';
import { DataTable } from '../group';
import { Question } from '../question';
import { Validation } from '../validation';

export class DataTableBuilder extends GroupBuilder<Question<any>[]> {

  public constructor(
    code: string,
    title: string,
    private validations: Validation[] = [],
    description: string,
  ) {
    super(code, title, description);
    this.questions = [];
  }

  public addQuestion(question: Question<any>[]): void {
    this.questions.push(question);
  }

  public build(): DataTable {
    return new DataTable(
      this.code,
      this.title,
      this.questions,
      this.validations,
      this.description
    );
  }
}
