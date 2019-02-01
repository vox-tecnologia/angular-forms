import { assert } from 'chai';
import { DataTable } from '../../src/group';
import { Text } from '../../src/question/text';
import { Required } from '../../src/validation';

describe('AngularForms :: Group :: DataTable', () => {
  it('should be instantiable', () => {
    assert.ok(new DataTable('G-01', 'A simple group', [[], []], [], 'A simple group description'));
  });

  it('should getQuestionByName method', () => {
    const dataTable: DataTable = new DataTable('G-01', 'A simple group', [[new Text('Q-01', 'A simple question')]], [], 'A simple group description');

    assert.isTrue(dataTable.getQuestionByName('Q-01') instanceof Text);
  });

  it('should isRequired method', () => {
    const dataTable1: DataTable = new DataTable('G-01', 'A simple group', [], [new Required('Required')], 'A simple group description');
    const dataTable2: DataTable = new DataTable('G-01', 'A simple group', [], [], 'A simple group description');

    assert.isTrue(dataTable1.isRequired());
    assert.isFalse(dataTable2.isRequired());
  });
});
