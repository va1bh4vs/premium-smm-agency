import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data', 'enquiries.json');

function readData() {
  try {
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  } catch (e) {
    return [];
  }
}

function writeData(data:any) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body;
    // honeypot
    if (body.hp) return res.status(400).json({ error: 'Spam detected' });

    if (!body.name || !body.email || !body.message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const entry = {
      id: Date.now().toString(),
      name: body.name,
      company: body.company || '',
      email: body.email,
      whatsapp: body.whatsapp || '',
      website: body.website || '',
      services: body.services || '',
      budget: body.budget || '',
      message: body.message,
      createdAt: new Date().toISOString()
    };

    const current = readData();
    current.unshift(entry);
    try {
      writeData(current);
      return res.status(201).json({ ok: true });
    } catch (err:any) {
      return res.status(500).json({ error: 'Unable to save' });
    }
  } else if (req.method === 'GET') {
    // GET returns last 50 enquiries for admin (publicly available — protect via admin in dashboard fetch)
    const current = readData();
    res.status(200).json(current.slice(0, 100));
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
