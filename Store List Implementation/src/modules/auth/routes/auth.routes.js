import express from "express";
import { AuthController } from "../controllers/index.js";
import {
  AsyncMiddleware,
  AuthMiddleware,
} from "../../../common/middlewares/index.js";

const router = express.Router();

/**
 * @openapi
 * components:
 *   headers:
 *     CustomHeaderAuth:
 *       type: apiKey
 *       in: header
 *       name: X-Custom-Header
 *       schema:
 *         type: string
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Store:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Store ID
 *         name:
 *           type: string
 *           description: Store name
 *         status:
 *           type: string
 *           description: Store status (active/inactive)
 *     PaginatedStores:
 *       type: object
 *       properties:
 *         totalStores:
 *           type: integer
 *           description: Total number of stores
 *         currentPage:
 *           type: integer
 *           description: Current page number
 *         totalPages:
 *           type: integer
 *           description: Total number of pages
 *         stores:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Store'
 * /api/auth/stores:
 *   get:
 *     tags:
 *       - stores
 *     description: Get paginated stores with optional filters
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: q
 *         schema:
 *           type: string
 *         description: Filter stores by name starting with this value
 *       - in: query
 *         name: filter:status
 *         schema:
 *           type: string
 *           enum: [active, inactive, all]
 *         description: |
 *           Filter stores by status. Use one of the following values:
 *           - `active`: Returns only active stores.
 *           - `inactive`: Returns only inactive stores.
 *           - `all`: Returns all stores.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: header
 *         name: X-Custom-Header
 *         schema:
 *           type: string
 *         description: Custom header to include in requests
 *     responses:
 *       200:
 *         description: Returns a paginated list of stores
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedStores'
 *       400:
 *         description: Invalid filter value
 *       500:
 *         description: Internal server error
 */
router.get("/stores", AuthMiddleware, AsyncMiddleware(AuthController.getStores));

export default router;
