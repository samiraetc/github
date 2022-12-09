import { formatDateByMonthYear } from '../../utils/formatDate';

export const COMPONENT_ID = 'card-repositories';

export type CardRepositoriesProps = {
  name: string;
  description: string;
  type: string;
  language: string;
  updated: string;
  id: number;
};

const CardRepositories = ({ name, description, type, language, updated, id }: CardRepositoriesProps) => {
  return (
    <div className={`${COMPONENT_ID}`} id={`${COMPONENT_ID}`} key={id}>
      <div className={`${COMPONENT_ID}__infos`}>
        <p className={`${COMPONENT_ID}__name`}>{name}</p>
        <p className={`${COMPONENT_ID}__type`}>{type}</p>
      </div>
      <p className={`${COMPONENT_ID}__description`}>{description}</p>
      <div className={`${COMPONENT_ID}__project`}>
        <p className={`${COMPONENT_ID}__language`}>{language}</p>
        <p className={`${COMPONENT_ID}__lastUpdated`}>Updated on {formatDateByMonthYear(updated)}</p>
      </div>
    </div>
  );
};

export default CardRepositories;
