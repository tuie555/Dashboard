"use server"
import { NextRequest, NextResponse } from 'next/server';
import pool from '../utils/database';
import Cors from 'cors';
import { dbTest } from './dbtest';

const cors = Cors({
  origin: ['https://example.com'], // Restrict allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 3600,
});


export async function GET(request: NextRequest, response: NextResponse) {
  try {
    // Create a connection to the database
    const conn = await pool.getConnection();

    // Query the 'user' table
    const query = "SELECT * FROM user";
    const [rows] = await conn.query(query);

    // Release the connection back to the pool
    conn.release();

    // Return the retrieved data as a JSON response
    return NextResponse.json(rows, {
      status: 200,
    });
  } catch (error) {
    // Handle any errors that occur during the query
    console.error(error);
    return NextResponse.json({ message: "Error retrieving data" }, {
      status: 500,
    });
  }
}