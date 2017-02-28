package com.vmware.interview.task3.main;

import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;

import static com.mongodb.client.model.Projections.excludeId;

/**
 * Created by vardang on 2/28/17.
 */
public class BookDAO {

    MongoCollection<Document> booksCollection;

    public BookDAO(final MongoDatabase blogDatabase) {
        booksCollection = blogDatabase.getCollection("books");
        getBooks();
    }

    public String getBooks() {
        String json = "{\n" +
                "    \"text\": \"Root\",\n" +
                "    \"Children\": [";
        FindIterable<Document> books = booksCollection.find().projection(excludeId());
        for (Document book : books) {
            json += book.toJson();
        }
        json += "]}";
        return json;
    }
}
