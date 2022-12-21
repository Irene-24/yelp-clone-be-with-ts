import RestaurantRepo from "@repos/restaurants.repo";

const getRestaurants = async (limit?: number) => {
  return await RestaurantRepo.getAll(limit);
};

const getRestaurantById = async (limit?: number) => {
  return await RestaurantRepo.getAll(limit);
};

const createRestaurant = async (limit?: number) => {
  return await RestaurantRepo.getAll(limit);
};

const deleteRestaurant = async (limit?: number) => {
  return await RestaurantRepo.getAll(limit);
};

const restaurantsService = {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  deleteRestaurant,
};

export default restaurantsService;
