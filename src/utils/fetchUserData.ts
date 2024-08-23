import { usersData } from "../data/users";

export async function FetchUserData(userId: string) {
  // Simula una llamada a una API para obtener los datos del usuario
  // En un caso real, reemplaza esto con una llamada a un endpoint real
  return new Promise((resolve, reject) => {
    /* 
      ! Ejemplo de uso de api
        const user = await fetch(`https://api.example.com/users/${userId}`);
        if (!user.ok) {
            reject(new Error("User not found"));
        }
        resolve(response.json()); 
    */
    const user = usersData[userId];
    if (user) {
      resolve(user);
    } else {
      reject(new Error("User not found"));
    }
  });
}

export async function FetchAllUsersData() {
  return new Promise((resolve) => {
    const allUsers = Object.entries(usersData).map(([id, user]) => ({
      id,
      ...user,
    }));
    resolve(allUsers);
  });
}
