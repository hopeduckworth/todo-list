type Task = {
  title: string;
  subtitle?: string;
  id: string;
};

type Category = {
  title: string;
  id: string;
  tasks: Task[];
};

export type ToDoList = {
  categories: Category[];
};

export const dummyData: ToDoList = {
  categories: [
    {
      id: "123",
      title: "Read all the books",
      tasks: [
        {
          id: "456",
          title: "Start a SJM Book Club",
          subtitle: "Start with Crescent City",
        },
        {
          id: "789",
          title: "Read Throne of Glass",
          subtitle: "Start with Assassin's Blade",
        },
        {
          id: "910",
          title: "Reread ACOTAR series",
        },
      ],
    },
    {
      id: "111",
      title: "Draw a bunch of dragons",
      tasks: [
        {
          id: "222",
          title: "Draw Abraxos",
          subtitle: "Add lots of flowers",
        },
        {
          id: "333",
          title: "Draw Andarna",
          subtitle: "Make gold paint first",
        },
        {
          id: "444",
          title: "Draw Tairn",
        },
        {
          id: "555",
          title: "Draw Andarna and Tairn together",
        },
      ],
    },
  ],
};
