/* eslint-disable no-undef */
const todoList = () => {
  // eslint-disable-next-line no-undef
  all = [];
  const add = (todoItem) => {
    // eslint-disable-next-line no-undef
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    // eslint-disable-next-line no-undef
    all[index].completed = true;
  };
  let myDate = new Date();
  let todayDate = myDate.toISOString().split("T")[0];
  const overdue = () => {
    // eslint-disable-next-line no-undef
    let overduearray = all.filter(
      (task) => Date.parse(task.dueDate) < Date.parse(todayDate)
    );
    return overduearray;
  };

  const dueToday = () => {
    // eslint-disable-next-line no-undef
    let todayduearray = all.filter((task) => task.dueDate === todayDate);
    return todayduearray;
  };

  const dueLater = () => {
    // eslint-disable-next-line no-undef
    let duelaterarray = all.filter(
      (task) => Date.parse(task.dueDate) > Date.parse(todayDate)
    );
    return duelaterarray;
  };

  const toDisplayableList = (list) => {
    let displayarray = list.map((work) => {
      let workstatus = work.completed ? "x" : " ";
      if (work.dueDate === todayDate) {
        return `[${workstatus}] ${work.title}`;
      } else {
        return `[${workstatus}] ${work.title} ${work.dueDate}`;
      }
    });
    return displayarray.join("\n");
  };

  // eslint-disable-next-line no-undef
  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
