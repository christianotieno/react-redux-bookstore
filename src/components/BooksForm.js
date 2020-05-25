import React from 'react';

const categories = [
    "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"
];

const BooksForm = () => (
    <div>
        <form>
            <label for="title">Title:</label><br/>
            <input type="text" id="title" name="title"/><br/>
            <label for="category">Category:</label><br/>
            <select nam='category'>
                {categories.map((category) => {
                    `<option value="${category}">${category}</option>`
                })}
            </select>

            <input type="submit" value="Submit"/>
        </form>
    </div>
);
