// Client-side JS for Dynamic Web App

async function fetchTime() {
  const res = await fetch('/api/time');
  const data = await res.json();
  document.getElementById('time').textContent = new Date(data.time).toLocaleString();
}

async function fetchRandom() {
  const res = await fetch('/api/random');
  const data = await res.json();
  document.getElementById('random').textContent = data.message;
}

async function sendEcho() {
  const input = document.getElementById('jsonInput').value;
  let parsed;
  try {
    parsed = JSON.parse(input);
  } catch (e) {
    document.getElementById('response').textContent = 'Invalid JSON: ' + e.message;
    return;
  }

  const res = await fetch('/api/echo', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(parsed)
  });
  const data = await res.json();
  document.getElementById('response').textContent = JSON.stringify(data, null, 2);
}

// Wire UI
window.addEventListener('DOMContentLoaded', () => {
  fetchTime();
  fetchRandom();
  document.getElementById('refreshTime').addEventListener('click', fetchTime);
  document.getElementById('getRandom').addEventListener('click', fetchRandom);
  document.getElementById('sendEcho').addEventListener('click', sendEcho);
});
