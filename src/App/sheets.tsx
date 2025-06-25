import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import { TasksSheet } from "@/pages/application/pomodoro/tasks-sheet";
import { NewTaskSheet } from "@/pages/application/manage/new-task-sheet";

registerSheet("tasks-sheet", TasksSheet);
registerSheet("new-task-sheet", NewTaskSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "tasks-sheet": SheetDefinition;
    "new-task-sheet": SheetDefinition;
  }
}

export {};
