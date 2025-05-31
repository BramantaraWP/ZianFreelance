export default function handler(req, res) {
  function getRandomValue(min, max, unit = '') {
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${value}${unit}`;
  }

  const data = {
    bandwidth: getRandomValue(20, 100, " Mbps"),
    ping: getRandomValue(5, 40, "ms"),
    ram: `${getRandomValue(200, 1000)}Mb/1Tb`,
    cpu: `${getRandomValue(1, 1000)}%`
  };

  res.status(200).json(data);
}
