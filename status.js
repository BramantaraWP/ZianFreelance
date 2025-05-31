export default function handler(req, res) {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  res.status(200).json({
    bandwidth: `${random(20, 100)} Mbps`,
    ping: `${random(1, 40)} ms`,
    ram: `${random(20, 1000)} Mb/1Tb`,
    cpu: `${random(5, 1000)} %`,
    updated: new Date().toISOString()
  });
}
