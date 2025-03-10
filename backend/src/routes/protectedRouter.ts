import Elysia from "elysia";
import { jwtConfig } from "../config/jwtConfig";
import { authorizationMiddleware } from "../middleware/authorization";
import { getBooks } from "../database";

export const protectedRouter = new Elysia()
    .use(jwtConfig)
    .derive(authorizationMiddleware)
    .guard(
        {
            beforeHandle: ({ user, error }) => {
                // 1. Check if the user is authenticated
                //    If not, return a 401 error
                if (!user) return error(401, "Not Authorized");
            }
        },
        (app) =>
            app
                .get("/me", ({ user, error }) => {
                    // 1. Check if the user object is present, indicating an authenticated user
                    //    If the user is not authenticated (user is null or undefined), return a 401 error
                    if (!user) return error(401, "Not Authorized");

                    // 2. If the user is authenticated, return the user
                    return { user };
                })
                .get("/books", async () => {
                    const books = await getBooks();
                    return JSON.stringify(books);
                })
    );