import { AuthService } from "../services/index.js";
const getStores = async (req, res, next) => {
  const user = req.user;
  const { q, "filter:status": statusFilter, page = 1 } = req.query;

  let pageSize = 10;
  // Call the service to get the stores
  const stores = await AuthService.getStores({
    user,
    q,
    statusFilter,
    page,
    pageSize,
  });
  res.json(stores); // Send the stores in the response
};

export default { getStores };
