import { Page } from './page';

export class TodoPage extends Page {
  async navigate() {
    await this.page.goto('/todomvc');
  }

  async enterNew(item: string){
    const newTodo  = this.page.locator('.new-todo');
    await newTodo.fill(item);
    await newTodo.press('Enter');
  }

  todos = this.page.locator('.view label');

  getTodoCheckBox(title: string) {
    return this.page.locator(`.view:has(label:has-text("${title}"))`).locator('input[type="checkbox"]');
  }
}
