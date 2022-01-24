import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Wrapper } from './styled';
import Button from '../Button';
import { 
  toggleHideDone, 
  setAllDone, 
  selectAreTasksEmpty, 
  selectHideDone, 
  selectIsEveryTaskDone, 
  // ___________________
  fetchExampleTasks,
  // ___________________
} from '../../tasksSlice';

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      {/* _____________________________________________ */}
      <Button onClick={() => dispatch(fetchExampleTasks())}>
      {/* _____________________________________________ */}
      Télécharger des exemples de tâches
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Montrer" : "Cacher"} tâches terminées
          </Button>
          <Button 
            onClick={() => dispatch(setAllDone())}
            disabled={isEveryTaskDone}
          >
            Terminez toutes les tâches
          </Button>
        </>
      )}
    </Wrapper> 
  );
};

export default Buttons;