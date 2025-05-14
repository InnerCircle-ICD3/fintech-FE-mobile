type User = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

const users: User[] = [];

export const auth = {
  login: (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const found = users.find((u) => u.email === email && u.password === password);
      setTimeout(() => resolve(!!found), 500); // 0.5초 지연
    });
  },

  register: (user: User): Promise<boolean> => {
    return new Promise((resolve) => {
      const exists = users.some((u) => u.email === user.email);
      if (exists) return resolve(false);
      users.push(user);
      setTimeout(() => resolve(true), 500);
    });
  },
};
