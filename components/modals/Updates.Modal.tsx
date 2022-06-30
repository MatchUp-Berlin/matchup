import React from 'react';
import { Update } from '../../utils/types/Update.Type';
import { User } from '../../utils/types/User.Type';
import styles from './styles/Updates.Modal.module.scss';
import UpdatesMessageCard from '../cards/UpdatesMessage.Card';

export interface IUpdatesModalProps {
  updates?: Update[];
  organizer: User;
}

const UpdatesModal: React.FunctionComponent<IUpdatesModalProps> = (props) => {
  console.log(props.organizer);
  return (
    <>
      <div>
        {props.updates?.map((update) => {
          return <UpdatesMessageCard update={update} organizer={props.organizer} />;
        })}
      </div>
    </>
  );
};

export default UpdatesModal;
