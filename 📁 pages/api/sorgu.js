import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { adi, soyadi, il, nufusil } = req.body;

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  try {
    let sql = "SELECT * FROM 101m WHERE ADI = ? AND SOYADI = ?";
    let params = [adi, soyadi];

    if (il) {
      sql += " AND NUFUSIL = ?";
      params.push(il);
    }

    if (nufusil) {
      sql += " AND NUFUSILCE = ?";
      params.push(nufusil);
    }

    const [rows] = await connection.execute(sql, params);
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    await connection.end();
  }
}
