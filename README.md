## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository
```bash
git clone https://github.com/katcoderr/job-board.git
cd job-board
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
DATABASE_URL=your_database_url
PORT=your_port_number
```
Replace `your_database_url` and `your_port_number` with appropriate values.

### 4. Run Prisma Migrations

Ensure your database is running and execute:

```bash
npm run db
```

This will apply all pending migrations and generate the Prisma client.

### 5. Start the Server

Run the following command to start the application:

```bash
npm start
```

The server will start on the specified port (`PORT` from `.env`).
Access API Docs at `localhost:PORT/api-docs`