const BASE_URL = "https://699eb5ac78dda56d396b14ec.mockapi.io/"; 

export async function getPosts() {
  const response = await fetch(`${BASE_URL}/posts`);
  
  if (!response.ok) {
    throw new Error("Ошибка загрузки данных");
  }

  return response.json();
}
