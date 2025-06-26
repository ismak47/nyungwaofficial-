const SUPABASE_URL = 'https://ybxkcqjppwpultcfzevl.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlieGtjcWpwcHdwdWx0Y2Z6ZXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5Nzc0ODgsImV4cCI6MjA2NjU1MzQ4OH0.cjMU4VoW2d5H5qWpn5Fsqv5HbLT1y3kBHWhBmKIwfsg';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    alert('Error: ' + error.message);
  } else {
    document.getElementById('message').innerText = `Karibu tena, ${email}`;
    document.getElementById('logout-btn').style.display = 'block';
  }
});

// Signup
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert('Error: ' + error.message);
  } else {
    alert('Umejisajili! Tafadhali ingia.');
  }
});

// Logout
document.getElementById('logout-btn').addEventListener('click', async () => {
  await supabase.auth.signOut();
  document.getElementById('message').innerText = '';
  document.getElementById('logout-btn').style.display = 'none';
});
