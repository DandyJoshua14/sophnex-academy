// MongoDB initialization script for SophNex Academy
// This script runs when the MongoDB container starts for the first time

// Switch to the sophnex_academy database
db = db.getSiblingDB('sophnex_academy');

// Create collections with proper validation
db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "phone", "password", "course", "status", "createdAt"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "Full name must be a string and is required"
                },
                email: {
                    bsonType: "string",
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
                    description: "Email must be a valid email address and is required"
                },
                phone: {
                    bsonType: "string",
                    description: "Phone number must be a string and is required"
                },
                password: {
                    bsonType: "string",
                    description: "Hashed password must be a string and is required"
                },
                course: {
                    enum: ["python", "javascript"],
                    description: "Course must be either 'python' or 'javascript' and is required"
                },
                status: {
                    enum: ["pending", "verified", "cancelled"],
                    description: "Status must be one of: pending, verified, cancelled and is required"
                },
                paymentStatus: {
                    enum: ["pending", "paid", "failed"],
                    description: "Payment status must be one of: pending, paid, failed"
                },
                paymentReference: {
                    bsonType: "string",
                    description: "Payment reference from Paystack"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Creation timestamp must be a date and is required"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Last update timestamp"
                }
            }
        }
    }
});

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "phone": 1 });
db.users.createIndex({ "status": 1 });
db.users.createIndex({ "course": 1 });
db.users.createIndex({ "createdAt": 1 });

// Create payments collection
db.createCollection('payments', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["userId", "amount", "currency", "reference", "status", "createdAt"],
            properties: {
                userId: {
                    bsonType: "objectId",
                    description: "User ID must be an ObjectId and is required"
                },
                amount: {
                    bsonType: "int",
                    minimum: 1,
                    description: "Amount must be a positive integer and is required"
                },
                currency: {
                    bsonType: "string",
                    description: "Currency must be a string and is required"
                },
                reference: {
                    bsonType: "string",
                    description: "Payment reference must be a string and is required"
                },
                status: {
                    enum: ["pending", "success", "failed"],
                    description: "Status must be one of: pending, success, failed and is required"
                },
                paystackData: {
                    bsonType: "object",
                    description: "Paystack response data"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Creation timestamp must be a date and is required"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Last update timestamp"
                }
            }
        }
    }
});

// Create indexes for payments collection
db.payments.createIndex({ "reference": 1 }, { unique: true });
db.payments.createIndex({ "userId": 1 });
db.payments.createIndex({ "status": 1 });
db.payments.createIndex({ "createdAt": 1 });

// Create courses collection for future course management
db.createCollection('courses', {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["id", "name", "price", "description", "isActive", "createdAt"],
            properties: {
                id: {
                    bsonType: "string",
                    description: "Course ID must be a string and is required"
                },
                name: {
                    bsonType: "string",
                    description: "Course name must be a string and is required"
                },
                price: {
                    bsonType: "int",
                    minimum: 0,
                    description: "Price must be a non-negative integer and is required"
                },
                description: {
                    bsonType: "string",
                    description: "Course description must be a string and is required"
                },
                features: {
                    bsonType: "array",
                    items: {
                        bsonType: "string"
                    },
                    description: "Course features must be an array of strings"
                },
                isActive: {
                    bsonType: "bool",
                    description: "Active status must be a boolean and is required"
                },
                createdAt: {
                    bsonType: "date",
                    description: "Creation timestamp must be a date and is required"
                },
                updatedAt: {
                    bsonType: "date",
                    description: "Last update timestamp"
                }
            }
        }
    }
});

// Create indexes for courses collection
db.courses.createIndex({ "id": 1 }, { unique: true });
db.courses.createIndex({ "isActive": 1 });

// Insert default courses
db.courses.insertMany([
    {
        id: "python",
        name: "Introduction to Python",
        price: 10000,
        description: "Learn the fundamentals of Python programming language",
        features: [
            "Basic syntax and data types",
            "Control structures",
            "Functions and modules",
            "File handling",
            "Practical projects"
        ],
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "javascript",
        name: "Introduction to JavaScript",
        price: 10000,
        description: "Master the basics of JavaScript for web development",
        features: [
            "Variables and data types",
            "Functions and scope",
            "DOM manipulation",
            "Event handling",
            "Basic web applications"
        ],
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

print("MongoDB initialization completed successfully!");
print("Database: sophnex_academy");
print("Collections created: users, payments, courses");
print("Default courses inserted: Python, JavaScript"); 