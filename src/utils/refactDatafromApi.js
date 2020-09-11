import {nanoid} from 'nanoid';

const refactData = (data) => {
   return  data.map(elem => {
       elem.userId = nanoid(8);
       return elem;
    })
}

export default refactData;