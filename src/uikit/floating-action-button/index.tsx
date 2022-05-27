import { useState } from 'react';
import { EditIcon } from 'uikit/icons/edit.icons';
import { PencilIcon } from 'uikit/icons/pencil.icon';
import classes from './styles.module.scss';

const CreateRequestAction = () => {
  return (
    <div className={classes.action}>
      <EditIcon />
    </div>
  );
};

export const FloatingActionButton = () => {
  return (
    <div className={classes.container}>
      <div className={classes.button}>
        <div className={classes.icon}>
          <PencilIcon size={20} />
        </div>
      </div>
    </div>
  );
};
