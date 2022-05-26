import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 for empty array', () => {
    const sum = selectExpensesTotal([]);
    expect(sum).toBe(0);
});

test('should correctly add up single expense', () => {
    const sum = selectExpensesTotal([expenses[0]]);
    expect(sum).toBe(195);
});

test('should sum amounts from array', () => {
    const sum = selectExpensesTotal(expenses);
    expect(sum).toBe(114195);
});

