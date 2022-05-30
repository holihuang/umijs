let initialCount = 1;

export default {
  namespace: 'tom',
  state: {
    count: initialCount,
  },
  reducers: {
    add(state: any, payload: any) {
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    },
    reset(state: any) {
      console.log(initialCount, 999);
      return {
        ...state,
        count: initialCount,
      };
    },
  },
};
