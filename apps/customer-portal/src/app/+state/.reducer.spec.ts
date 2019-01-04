import { Loaded } from './.actions';
import { State, Entity, initialState, Reducer } from './.reducer';

describe(' Reducer', () => {
  const getId = it => it['id'];
  let create;

  beforeEach(() => {
    create = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid  actions ', () => {
    it('should return set the list of known ', () => {
      const s = [create('PRODUCT-AAA'), create('PRODUCT-zzz')];
      const action = new Loaded(s);
      const result: State = Reducer(initialState, action);
      const selId: string = getId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = Reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
