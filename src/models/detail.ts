export default {
  namespace: 'detail',
  state: {
    count: 1,
  },
  reducers: {
    add(state: any) {
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    },
  },
  effects: {},
};
