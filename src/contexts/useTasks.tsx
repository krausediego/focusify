import * as React from 'react';

import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

interface TasksContextProps {
  tasksBottomSheetRef: React.RefObject<BottomSheetMethods>;
}

interface TasksProviderProps {
  children: React.ReactNode;
}

const TasksContext = React.createContext<TasksContextProps>(
  {} as TasksContextProps,
);

const TasksProvider: React.FC<TasksProviderProps> = ({ children }) => {
  const tasksBottomSheetRef = React.useRef<BottomSheet>(null);

  return (
    <TasksContext.Provider value={{ tasksBottomSheetRef }}>
      {children}
    </TasksContext.Provider>
  );
};

const useTasks = (): TasksContextProps => {
  return React.useContext(TasksContext);
};

export { TasksProvider, useTasks };
