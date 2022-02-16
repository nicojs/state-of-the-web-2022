import { Page as PlaywrightPage } from '@playwright/test';
import { Todo } from '../model/todo';

export abstract class Page {
  constructor(protected page: PlaywrightPage){}

  public localStorage = new LocalStorage(this.page);
}


class LocalStorage  {
  constructor(private page: PlaywrightPage){}

  async clear() {
    await this.page.evaluate(() => {
      localStorage.clear();
    });
  }

  async todos(): Promise<Todo[]> {
    return this.page.evaluate(() => {
      return JSON.parse(localStorage['react-todos']);
    });
  }
  
  async setTodos(todos: Todo[]) {
    return this.page.evaluate((todos) => {
      localStorage.setItem('react-todos', JSON.stringify(todos));
    }, todos);
  }

  // async checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  //   return await page.waitForFunction(e => {
  //     return JSON.parse(localStorage['react-todos']).length === e;
  //   }, expected);
  // }
  
  // async function checkNumberOfCompletedTodosInLocalStorage(page: Page, expected: number) {
  //   return await page.waitForFunction(e => {
  //     return JSON.parse(localStorage['react-todos']).filter(i => i.completed).length === e;
  //   }, expected);
  // }
  
  // async function checkTodosInLocalStorage(page: Page, title: string) {
  //   return await page.waitForFunction(t => {
  //     return JSON.parse(localStorage['react-todos']).map(i => i.title).includes(t);
  //   }, title);
  
}
