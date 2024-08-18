import { Op } from 'sequelize';
import { UnauthorizedException } from '../../../common/exceptions/index.js'; 
import { Store } from '../../../common/database/models/index.js'; // Adjust the import path as needed

const getStores = async ({ user, q, statusFilter, page = 1, pageSize }) => {
  const offset = (page - 1) * pageSize;
  let whereClause = {};

  // Filter by userID if user is provided
  if (user && user.id) {
    whereClause.userID = user.id;
  }

  // Filter by store name if q is provided
  if (q) {
    whereClause.name = {
      [Op.like]: `${q.toLowerCase()}%`
    };
  }

  // Filter by status if statusFilter is provided
  if (statusFilter) {
    console.log("Received Status Filter: ", statusFilter);
    if (statusFilter === 'active') {
      whereClause.status = 'active';
    } else if (statusFilter === 'inactive') {
      whereClause.status = 'inactive';
    } else {
      throw new UnauthorizedException('Incorrect Filter');
    }
  }

  // Fetch stores with count and rows
  const { count, rows } = await Store.findAndCountAll({
    where: whereClause,
    limit: pageSize,
    offset: offset,
    order: [['name', 'ASC']]
  });

  return {
    totalStores: count,
    currentPage: page,
    totalPages: Math.ceil(count / pageSize),
    stores: rows
  };
};

export default { getStores };
