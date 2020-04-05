import { vec, mat } from '../../types';

const isMat = (item: vec | mat): item is mat => {
  return Array.isArray(item[0]);
};

export default isMat;
