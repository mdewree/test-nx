import { Entity, State  } from './.reducer';
import { Query } from './.selectors';

describe(' Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getId = (it) => it['id'];

  let storeState;

  beforeEach(() => {
     const create = ( id:string, name = '' ): Entity => ({
       id,
       name: name || `name-${id}`
     });
     storeState = {
       : {
        list : [
            create( 'PRODUCT-AAA' ),
            create( 'PRODUCT-BBB' ),
            create( 'PRODUCT-CCC' )
          ],
          selectedId : 'PRODUCT-BBB',
          error      : ERROR_MSG,
          loaded     : true
       }
     };
  });

  describe(' Selectors', () => {

    it('getAll() should return the list of ', () => {
      const results = Query.getAll(storeState);
      const selId = getId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = Query.getSelected(storeState);
      const selId = getId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getLoaded() should return the current \'loaded\' status', () => {
      const result = Query.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it('getError() should return the current \'error\' storeState', () => {
      const result = Query.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });

  });
});
