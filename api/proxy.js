export default async function handler(req, res) {
  const backendUrl = 'http://localhost:3001' + req.url.replace('/api', '');

  try {
    const response = await fetch(backendUrl, {
      method: req.method,
      headers: {
        'Content-Type': req.headers['content-type'] || 'application/json'
      },
      body: req.method === 'POST' ? JSON.stringify(req.body) : null,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching from backend' });
  }
}
