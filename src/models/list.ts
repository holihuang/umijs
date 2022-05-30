export default {
  namespace: 'list',
  state: {
    list: [
      {
        name: 'name1',
      },
    ],
  },
  reducers: {
    add(state: any) {
      const { list } = state;
      const len = list.length;
      return {
        ...state,
        list: list.concat({ name: `name${len + 1}` }),
      };
    },
  },
};
