import { test, expect } from '@playwright/test';
import { Todo } from './model/todo';
import { TodoPage } from './po/todo-page';

let page: TodoPage;

test.beforeEach(async ({ page: playwrightPage }) => {
  page = new TodoPage(playwrightPage);
  await page.navigate();
  await page.localStorage.clear();
});

test.describe('New Todo', () => {
  test('should allow me to add todo items', async () => {
    await page.enterNew('KC TypeScript course');
    await expect(page.todos).toHaveCount(1);
  });

  test('should add todo in local storage', async () => {
    const expectedTodo: Pick<Todo, 'title' | 'completed'> = {
      title: 'KC TypeScript course',
      completed: false,
    };
    await page.enterNew(expectedTodo.title);
    expect(await page.localStorage.todos()).toMatchObject([expectedTodo]);
  });
});

test.describe('with items', () => {
  test.beforeEach(async () => {
    await page.localStorage.setTodos([
      { id: '1', title: 'Follow KC TS Course', completed: false },
      { id: '2', title: 'State of the Web 2022', completed: true }
    ]);
    await page.navigate();
  });

  test('should show the items', async () => {
    await expect(page.todos).toHaveCount(2);
  });
  test('should show not completed item as not checked', async () => {
    await expect(page.getTodoCheckBox('Follow KC TS Course')).not.toBeChecked();
  });
  test('should show completed item as checked', async () => {
    await expect(page.getTodoCheckBox('State of the Web 2022')).toBeChecked();
  });
});
