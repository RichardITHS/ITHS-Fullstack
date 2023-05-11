CREATE TABLE Users (
    UserID int PRIMARY KEY,
    Name varchar(255),
    Email varchar(255)
);

CREATE TABLE Orders (
    OrderID int PRIMARY KEY,
    Date date,
    Total decimal(10,2),
    UserID int,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);
