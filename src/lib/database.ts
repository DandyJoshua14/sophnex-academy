import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

// Database connection
let client: MongoClient;
let db: any;

// Get MongoDB URI from environment or use default
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sophnex_academy';

// Connect to MongoDB
export async function connectToDatabase() {
    if (client) {
        return { client, db };
    }

    try {
        client = new MongoClient(MONGODB_URI);
        await client.connect();
        db = client.db();
        console.log('Connected to MongoDB');
        return { client, db };
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        throw error;
    }
}

// User interface
export interface User {
    _id?: ObjectId;
    name: string;
    email: string;
    phone: string;
    password: string;
    course: 'python' | 'javascript';
    status: 'pending' | 'verified' | 'cancelled';
    paymentStatus: 'pending' | 'paid' | 'failed';
    paymentReference?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Payment interface
export interface Payment {
    _id?: ObjectId;
    userId: ObjectId;
    amount: number;
    currency: string;
    reference: string;
    status: 'pending' | 'success' | 'failed';
    paystackData?: any;
    createdAt: Date;
    updatedAt: Date;
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

// Verify password
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
}

// Create user
export async function createUser(userData: Omit<User, '_id' | 'status' | 'paymentStatus' | 'createdAt' | 'updatedAt'>): Promise<ObjectId> {
    const { db } = await connectToDatabase();

    const now = new Date();
    const user: User = {
        ...userData,
        status: 'pending',
        paymentStatus: 'pending',
        createdAt: now,
        updatedAt: now
    };

    const result = await db.collection('users').insertOne(user);
    return result.insertedId;
}

// Get user by email
export async function getUserByEmail(email: string): Promise<User | null> {
    const { db } = await connectToDatabase();
    return await db.collection('users').findOne({ email });
}

// Get user by ID
export async function getUserById(id: string): Promise<User | null> {
    const { db } = await connectToDatabase();
    return await db.collection('users').findOne({ _id: new ObjectId(id) });
}

// Update user status
export async function updateUserStatus(userId: ObjectId, status: User['status']): Promise<boolean> {
    const { db } = await connectToDatabase();

    const result = await db.collection('users').updateOne(
        { _id: userId },
        {
            $set: {
                status,
                updatedAt: new Date()
            }
        }
    );

    return result.modifiedCount > 0;
}

// Update user payment status
export async function updateUserPaymentStatus(userId: ObjectId, paymentStatus: User['paymentStatus'], paymentReference?: string): Promise<boolean> {
    const { db } = await connectToDatabase();

    const updateData: any = {
        paymentStatus,
        updatedAt: new Date()
    };

    if (paymentReference) {
        updateData.paymentReference = paymentReference;
    }

    const result = await db.collection('users').updateOne(
        { _id: userId },
        { $set: updateData }
    );

    return result.modifiedCount > 0;
}

// Delete user
export async function deleteUser(userId: ObjectId): Promise<boolean> {
    const { db } = await connectToDatabase();

    const result = await db.collection('users').deleteOne({ _id: userId });
    return result.deletedCount > 0;
}

// Create payment record
export async function createPayment(paymentData: Omit<Payment, '_id' | 'createdAt' | 'updatedAt'>): Promise<ObjectId> {
    const { db } = await connectToDatabase();

    const now = new Date();
    const payment: Payment = {
        ...paymentData,
        createdAt: now,
        updatedAt: now
    };

    const result = await db.collection('payments').insertOne(payment);
    return result.insertedId;
}

// Get payment by reference
export async function getPaymentByReference(reference: string): Promise<Payment | null> {
    const { db } = await connectToDatabase();
    return await db.collection('payments').findOne({ reference });
}

// Update payment status
export async function updatePaymentStatus(reference: string, status: Payment['status'], paystackData?: any): Promise<boolean> {
    const { db } = await connectToDatabase();

    const updateData: any = {
        status,
        updatedAt: new Date()
    };

    if (paystackData) {
        updateData.paystackData = paystackData;
    }

    const result = await db.collection('payments').updateOne(
        { reference },
        { $set: updateData }
    );

    return result.modifiedCount > 0;
}

// Get all users (for admin)
export async function getAllUsers(): Promise<User[]> {
    const { db } = await connectToDatabase();
    return await db.collection('users').find({}).sort({ createdAt: -1 }).toArray();
}

// Close database connection
export async function closeDatabase() {
    if (client) {
        await client.close();
        console.log('Disconnected from MongoDB');
    }
} 