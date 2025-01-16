class APIClients {
  async getFetch(endpoint, headers) {
    try {
      const response = await fetch(
        `https://two2-maktab.onrender.com/api/${endpoint}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            ...headers,
          },
        }
      );

      if (!response.ok && response.status != 401) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      } else if (response.ok == false && response.status == 401) {
        return response;
      }
      return await response.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const apiClients = new APIClients();
export { apiClients };
