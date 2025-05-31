export default function handler(req, res) {
  const data = {
    bandwidth: `${(Math.random() * 100).toFixed(2)} Mbps`,
    ping: `${Math.floor(Math.random() * 300)} ms`,
    ram: `${(Math.random() * 16).toFixed(2)} GB`,
    cpu: `${(Math.random() * 100).toFixed(1)} %`
  };

  res.status(200).json(data);
}
