"use server"
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../utils/database';
import { NextResponse } from 'next/server'

export async function dbTest(request: Request) {
  try {
    // Execute a simple query to test the database connection
    const result = await pool.query('SELECT 1 + 1 AS result');

    // Return the result of the query
    return NextResponse.json({ status: 'Database is ok' }, { status: 200 })
  } catch (error) {
    // Return an error response if the query fails
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}