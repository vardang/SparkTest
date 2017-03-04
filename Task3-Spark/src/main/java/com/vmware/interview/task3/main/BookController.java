package com.vmware.interview.task3.main;

import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import spark.Request;
import spark.Response;
import spark.Route;
import spark.Spark;

import java.io.IOException;

import static Utils.JsonUtil.json;
import static spark.Spark.after;
import static spark.route.HttpMethod.get;

/**
 * Created by vardang on 2/28/17.
 */
public class BookController {
    private final BookDAO bookDAO;

    public static void main(String[] args) throws IOException {
        if (args.length == 0) {
            new BookController("mongodb://localhost");
        } else {
            new BookController(args[0]);
        }
    }



    public BookController(String mongoURIString) throws IOException {
        final MongoClient mongoClient = new MongoClient(new MongoClientURI(mongoURIString));
        final MongoDatabase blogDatabase = mongoClient.getDatabase("bookTest");
        bookDAO = new BookDAO(blogDatabase);

        Spark.get("/", new Route() {
            public Object handle(final Request request, final Response response) {
                return new BookDAO(blogDatabase).getBooks();
            }
        });

        Spark.get("/books", (req, res) -> new BookDAO(blogDatabase).getBooks());

        after("/books", (req, res) -> {
            res.type("application/json");
        });

    }
}
