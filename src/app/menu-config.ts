export interface MenuItem {
    children: MenuItem[];
    key: string;
    label: string;
  }
  
  export const menuConfig: MenuItem[] = [
    { children: [], key: 'test', label: 'test' },
    {
      children: [
        { key: 'sub-test-1-0', label: 'sub-test-1-0', children: [] },
        { key: 'sub-test-1-1', label: 'sub-test-1-1', children: [] },
        {
          key: 'sub-test-1-2',
          label: 'sub-test-1-2',
          children: [
            {
              key: 'sub-sub-test-1-0',
              label: 'sub-test-1-0',
              children: [],
            },
          ],
        },
        { key: 'sub-test-1-3', label: 'sub-test-1-3', children: [] },
      ],
      key: 'test1',
      label: 'test1',
    },
    {
      children: [
        {
          key: 'sub-test-2',
          label: 'sub-test-2',
          children: [
            {
              key: 'sub-sub-test-2',
              label: 'sub-sub-test2',
              children: [
                {
                  key: 'sub-sub-sub-test-2',
                  label: 'sub-sub-sub-test2',
                  children: [],
                },
              ],
            },
          ],
        },
      ],
      key: 'test2',
      label: 'test2',
    },
  ];
  