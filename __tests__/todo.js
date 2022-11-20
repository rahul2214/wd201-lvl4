/* eslint-disable no-undef */
const todo = require("../todo");
const { all, add, markAsComplete, overdue, dueToday, dueLater } = todo();
const now = new Date();
const yestr = new Date(new Date().setDate(now.getDate() - 1));
const tmr = new Date(new Date().setDate(now.getDate() + 1));

describe("TODO test suite", () => {
  beforeAll(() => {
    add({
      title: "Wake Up",
      dueDate: now.toLocaleDateString("en-CA"),
      completed: false,
    });
  });
  test("Add task", () => {
    let lntBefore = all.length;
    add({
      title: "Eat",
      dueDate: now.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(all.length).toBe(lntBefore + 1);
  });
  test("Mark task as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Over due tasks", () => {
    const overduecount = overdue().length;
    add({
      title: "work",
      dueDate: yestr.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(overdue().length).toBe(overduecount + 1);
  });
  test("Due today tasks", () => {
    const duetodaycount = dueToday().length;
    add({
      title: "work1",
      dueDate: now.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueToday().length).toBe(duetodaycount + 1);
  });
  test("Due later tasks", () => {
    const duelatercount = dueLater().length;
    add({
      title: "work2",
      dueDate: tmr.toLocaleDateString("en-CA"),
      completed: false,
    });
    expect(dueLater().length).toBe(duelatercount + 1);
  });
});
